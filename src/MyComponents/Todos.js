import React from 'react'
import TodoItem from './TodoItem';
import './todos.css';

const Todos = (props) => {
  return (
    <div className='container'>
      <h1>MY TODO LIST</h1>
      <div className="box">
      

      {props.list.map((todo)=>
      {
      return(
        
        <TodoItem todo={todo} OnDelete={props.OnDelete}/>
       
      )})}
      </div>
    </div>
  )
      }

export default Todos
