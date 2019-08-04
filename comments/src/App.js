import React, {Component} from 'react'

import NewComment from './NewComment'
import Comments from './Comments'
import Header from './Header'

import './App.css'

class App extends Component{
  state = {
    comments: {},
    isLoading: false
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

  componentDidMount(){
    const {database} = this.props
    this.setState({isLoading: true})
    this.comments = database.ref('comments');
    this.comments.on('value', snapshot => {
      this.setState({ comments: snapshot.val() })
      this.setState({isLoading: false})
    })
  }

  render (){
    return (
      <div className="container">
      
        <div className="row">
          <div className="col-2"></div>
          <div className="col-8">
            <Header />
            <NewComment sendComment={this.sendComment} />
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
