import React from 'react'
import { Link } from 'react-router-dom'
const header = () => {

    return <>
      
        <nav>Get Ready to Complete Your Goals</nav>
        <div className="header">
        < Link to="/">Home</Link>
        <Link to="/about">About</Link> 
        <Link to="/contact">Contact</Link> 
        <Link to="/user/tempid">User</Link> 
        </div>
    </>
  }



export default header