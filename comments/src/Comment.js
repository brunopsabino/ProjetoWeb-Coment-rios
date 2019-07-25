import React from 'react'

const Comment = ({c}) => {
    //Condicional para testes
    let comment = 'vazio'
    if(c && c.comment){
        comment = c.comment
    }
    return(
        <div>Comentário: {comment}</div>
    )
}

export default Comment