import React, {Component} from 'react'

import NewComment from './NewComment'
import Comments from './Comments'
import Header from './Header'
import Login from './Login'

import './App.css'

class App extends Component{
  state = {
    comments: {},
    isLoading: false,
    isAuth: false,
    isAuthErr: false,
    AuthErr: ''
  }

  sendComment = comment => {
    //Criar novo ID no firebase
    const {database} = this.props
    const newID = database.ref().child('comments').push().key
    //Associar novo ID ao novo comentário
    const comments = {}
    comments['comments/' + newID] = {
      comment
    }
    //Realizar update
    database.ref().update(comments)
  }

  login = async(email, passwd) => {
    const {auth} = this.props
    this.setState({
      AuthErr: '',
      isAuthErr: false
    })
    try{
      await auth.signInWithEmailAndPassword(email, passwd)
      console.log('logar', email, passwd)
    }catch(err){
     this.setState({
       AuthErr: err.code,
       isAuthErr: true
     })
    }
    
  }

  componentDidMount(){
    const {database, auth} = this.props
    this.setState({isLoading: true})
    this.comments = database.ref('comments');
    this.comments.on('value', snapshot => {
      this.setState({ comments: snapshot.val() })
      this.setState({isLoading: false})
    })

    auth.onAuthStateChanged(user => {
      if(user){
        this.setState({
          isAuth: true,
          user
        })
      }
    })
  }

  render (){
    return (
      <div className="container">
      
        <div className="row">
          <div className="col-2"></div>
          <div className="col-8">
            <Header />
            {!this.state.isAuth && <Login login={this.login} />}
            {this.state.isAuth && <NewComment sendComment={this.sendComment} /> }
          </div>
          <div className="col-2"></div>
        </div>

        <div className="row">
          <div className="col-2"></div>
          <div className="col-8">
            <Comments comments={this.state.comments} />
          </div>
          <div className="col-2"></div>
        </div>

        <div className="row">
          <div className="col-2"></div>
          <div className="col-8">
            {
              this.state.isLoading && <div><b>Carregando comentários...</b></div>
            }
            <footer id="sticky-footer" className="py-4 bg-dark text-white-50">
              <div className="container text-center">
                <small>Desenvolvido por: <a href="https://github.com/brunopsabino">Bruno Sabino</a></small>
              </div>
            </footer>
          </div>  
          <div className="col-2"></div>
        </div> 
        
      </div>
    );
  }
  
}

export default App;
