import React from 'react'
import './Comment.css'

const Comment = ({c}) => {
    //Condicional para testes
    let comment = 'Você inseriu um comentário vazio!'
    if(c && c.comment){
        comment = c.comment
    }
    return(
        <div className="_Comment">
            <div className="_Comment_Component">
                <b>Comentário:</b> {comment}
            </div>
        </div>
    )
}

export default Comment