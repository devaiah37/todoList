import React from 'react'
import '../MyComponents/Header.css'

const Header = () => {
  return (

<header>
<h1>MY TODOS LIST</h1>

        <nav>
            <ul className='ul1'>
                <li><a href="#">ADD TODO</a></li>
                <li><a href="#">CONTACT</a></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header
