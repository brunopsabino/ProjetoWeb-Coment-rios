import React from 'react'
import {shallow} from 'enzyme'

import NewComment from './NewComment'


describe('<NewComment />',  ()=>{
    it('should handle changes in textarea', ()=>{
        const wrapper = shallow(<NewComment />)
        const event = {
            target: {value: 'test'}
        }
        //Simula um evento do handle change no textarea
        wrapper.find('textarea').simulate('change', event)
    expect(wrapper.state().newComment).toBe('test')
    })
    it('should call sendComment on buttom click', ()=>{
        const sendComment = jest.fn()//Mock function
        const wrapper = shallow(<NewComment sendComment={sendComment} />)
        const event = {
            target: {value: 'test'}
        }
        wrapper.find('textarea').simulate('change', event)
        wrapper.find('button').simulate('click')
        //console.log(sendComment.mock.calls)//Verifica onde o método sendComment foi chamado
    expect(sendComment).toBeCalledWith('test')
    expect(wrapper.state().newComment).toBe('')
    })
})