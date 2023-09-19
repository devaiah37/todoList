import React, { useState } from 'react'
import './addtodo.css';

const AddTodo = ({addTodo}) => {
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
    <label htmlFor="exampleInputEmail1" className=""><p>TODO TITLE</p></label>
    <input type="text" className="" value={title} onChange={(e)=>{SetTitle(e.target.value)}} id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div className="desc">
    <label htmlFor="exampleInputPassword1" className=""><p>TODO DESCRIPTION</p></label>
    <input type="text" className="" value={desc} onChange={(e)=>{SetDesc(e.target.value)}} id="exampleInputPassword1"/>
  </div>
  <button type="submit" className="todosub">ADD TODO</button>
</form>
    </div>
  )
}

export default AddTodo
