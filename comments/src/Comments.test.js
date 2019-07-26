import React from 'react'
import {shallow} from 'enzyme'
import Comments from './Comments'
import Comment from './Comment' 

//Renderizando com o shallow ele não irá montar os filhos do componente
describe('<Comments />', () => {
    it('should render Comments', ()=>{
        const comments = {            
           a: {id: 'a', comment: 'Comment 1'},
           b: {id: 'b', comment: 'Comment 2'}
        }  
        const wrapper = shallow(<Comments comments={comments} />)
    expect(wrapper.find(Comment).length).toBe(2)
    //Verificar se a passagem de parâmetros foi realizada de forma correta
    expect(wrapper.find(Comment).get(0).props.c).toBe(comments.a)
    expect(wrapper.find(Comment).get(1).props.c).toBe(comments.b)
    expect(wrapper.find(Comment).get(0).key).toBe('a')
    expect(wrapper.find(Comment).get(1).key).toBe('b')
    })

    it('shold work with no comments', ()=>{
        const comments = {}
        const wrapper = shallow(<Comments comments={comments} />)
    expect(wrapper.find(Comment).length).toBe(0)    
    })
})