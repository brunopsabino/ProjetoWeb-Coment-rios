import React, {Component} from 'react'

import {database} from './firebase'

import NewComment from './NewComment'
import Comments from './Comments'


class App extends Component{
  state = {
    comments: {},
    isLoading: false
  }

  sendComment = comment => {
    //Criar novo ID no firebase
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
    this.setState({isLoading: true})
    this.comments = database.ref('comments');
    this.comments.on('value', snapshot => {
      this.setState({ comments: snapshot.val() })
      this.setState({isLoading: false})
    })
  }
  
  render (){
    return (
      <div className="App">
        <NewComment sendComment={this.sendComment} />
        <Comments comments={this.state.comments} />
        {
          this.state.isLoading && <div><b>Carregando comentários...</b></div>
        }
      </div>
    );
  }
  
}

export default App;
