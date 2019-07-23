import React, {Component} from 'react'

class App extends Component{
  state = {
    newComment: '',
    comments: [
      'Comment 1',
      'Comment 2',
      'Comment 3'
    ]
  }

  SendComment = () => {
    this.setState({
      comments: [...this.state.comments, this.state.newComment],
      newComment: ''
    })
  }

  handleChange = event =>{
    this.setState({
      newComment: event.target.value
    })
  }
  
  render (){
    return (
      <div className="App">
        {/*New Comment*/}
        <div>
          <textarea value={this.state.newComment} onChange={this.handleChange}></textarea>
          <button onClick={this.SendComment}>Enviar</button>
        </div>
        {/*New Comment*/}
        <div>
          {this.state.comments.map(c => {
            return <div>{c}</div>
          })}
        </div>
      </div>
    );
  }
  
}

export default App;
