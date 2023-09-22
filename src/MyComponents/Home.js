import React from 'react'
import { Link , NavLink} from 'react-router-dom'
import './home.css';

const Home = () => {
  return (
    <div className='home'> 
        <Link to="/MyTodoList"><h2>WELCOME TO MY TODO LIST</h2></Link>
      
    </div>
  )
}

export default Home
