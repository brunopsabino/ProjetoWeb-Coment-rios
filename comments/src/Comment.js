import React, {Component} from 'react'
//import {database} from './firebase'
import './Comment.css'

class Comment extends Component {

    constructor(props){
        super(props)

        this.state = {
            comment: 'Você inseriu um comentário vazio!'
        }
       if(this.props.c && this.props.c.comment){
           this.state.comment = this.props.c.comment
       }
       
    }

    deleteComment(comm) {
        //const newID = database.ref().child('comments').value
        /*const key = database.ref.child('comments').push().getKey()
            database.ref.child('comments').child(key).setValue(comm)
            database.ref.child('comments').child(key).removeValue()*/
        //console.log(newID)
        console.log('delete' + comm)
    }
    

    render () {
            return(
                
                <div className="row">
                    <div className="col-sm-10 col-md-8 col-lg-10 _Comment_Component">
                        <b>Comentário:</b> {this.state.comment}
                    </div>
                    <div className="col-sm-2 col-md-4 col-lg-2 _Comment_Component">
                        
                    </div>
                </div>
            
        )
    }
   
}

export default Comment