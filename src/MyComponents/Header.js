import React from 'react'
import '../MyComponents/Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (

<header>


    <nav>

            <ul className='ul1'>
              <li><Link to="/">HOME</Link></li>
               <li><Link to="/MyTodoList">TODOS</Link></li>
                <li><Link to="/addtodo">ADD TODO</Link></li>
                <li><Link to="/contact">CONTACT</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header
