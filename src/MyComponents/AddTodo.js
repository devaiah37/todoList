import React, { useState } from 'react'
import './addtodo.css';
import { Link } from 'react-router-dom';

const AddTodo = ({addTodo,navigation}) => {
    const [title, SetTitle] = useState("")
    const [desc, SetDesc] = useState("")
    const submit =(e)=>
    {
       e.preventDefault()
       if(!title || !desc)
       {
alert("Title and description can't be empty")
       } 
       addTodo(title , desc)
    }
  return (
    <div className='contain'>
       <form onSubmit={submit}>
  <div className="title">
    <label ><p>TODO TITLE</p></label>
    <input type="text"  value={title} onChange={(e)=>{SetTitle(e.target.value)}} />
  </div>
  <div className="desc">
    <label  ><p>TODO DESCRIPTION</p></label>
    <input type="text" value={desc} onChange={(e)=>{SetDesc(e.target.value)}} />
  </div>
  <button type="submit" className="todosub" onPress={() => navigation.push('MyTodoList')}>ADD TODO</button>
</form>
    </div>
  )
}

export default AddTodo
