import React, {Component} from 'react'

import NewComment from './NewComment'
import Comments from './Comments'

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
        <div class="row">
          <div class="col-2"></div>
          <div class="col-8">
            <NewComment sendComment={this.sendComment} />
          </div>
          <div class="col-2"></div>
        </div>

        <div class="row">
          <div class="col-2"></div>
          <div class="col-8">
            <Comments comments={this.state.comments} />
          </div>
          <div class="col-2"></div>
        </div>

        <div class="row">
          <div class="col-2"></div>
          <div class="col-8">
            {
              this.state.isLoading && <div><b>Carregando comentários...</b></div>
            }
          </div>  
          <div class="col-2"></div>
        </div>  
      </div>
    );
  }
  
}

export default App;
