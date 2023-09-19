import React from 'react'
import TodoItem from './TodoItem';
import './todos.css';

const Todos = (props) => {
  return (
    <div className='container'>
      <h3>MY TODO LIST</h3>
      <div className="box">
      
      {/* {props.lists.length === 0? "Mo Todos to display": */}

      {props.list.map((todo)=>
      {
      return(
        
        <TodoItem todo={todo} key={todo.slno} OnDelete={props.OnDelete}/>
       
      )})}
      </div>
    </div>
  )
      }

export default Todos
// const Todos = (props) => {
//   return (
//   <div>
//    {props.todo.map((todo)=>
//    {
//     return(
//     < TodoItem todo={todo}/>
//    )})}
//   </div>
//   )
// }
// export default Todos





// import React from 'react'