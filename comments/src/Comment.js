import React from 'react'
import './Comment.css'

const Comment = ({c}) => {
    //Condicional para testes
    let comment = 'Você inseriu um comentário vazio!'
    if(c && c.comment){
        comment = c.comment
    }

    return(
        
            <div className="row">
                <div className="col-sm-10 col-md-8 col-lg-10 _Comment_Component">
                    <b>Comentário:</b> {comment}
                </div>
                <div className="col-sm-2 col-md-4 col-lg-2 _Comment_Component">
                    <button className="btn btn-danger btn-sm">Excluir</button>
                </div>
            </div>
        
    )
}

export default Comment