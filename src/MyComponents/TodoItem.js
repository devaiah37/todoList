import React from 'react'
import './todoitem.css';
const TodoItem = ({todo, OnDelete}) => {
  return (
    <div className='display'>  
      <h3>{todo.title}</h3>
      <p>{todo.desc}</p>
      <button className='btn1' onClick={()=>{OnDelete(todo)}}> DELETE</button>
    </div>
  )
}

export default TodoItem
