import React, {Component} from 'react'

import NewComment from './NewComment'
import Comments from './Comments'


class App extends Component{
  state = {
    comments: [
      'Comment 1',
      'Comment 2',
      'Comment 3'
    ]
  }

  sendComment = commment => {
    this.setState({
      comments: [...this.state.comments, commment]
    })
  }
  
  render (){
    return (
      <div className="App">
        <NewComment sendComment={this.sendComment} />
        <Comments comments={this.state.comments} />
      </div>
    );
  }
  
}

export default App;
