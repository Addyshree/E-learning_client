import React from 'react'
import "./header.css"
import { Link } from 'react-router-dom'

function Header({isAuth}) {
  return (
    <header>
        <div className='logo'> E-learning</div>

        <div className='link'>
            <Link to={"/"}>Home</Link>
            <Link to={"/courses"}>Courses</Link>
            <Link to={"/about"}>About</Link>
            {
              isAuth ? (
              <Link to={"/account"}>Account</Link>
            ) : (
              <Link to = {"/login"}>Login</Link>
            )
            }
            

        </div>
    </header>
  )
}

export default Header
