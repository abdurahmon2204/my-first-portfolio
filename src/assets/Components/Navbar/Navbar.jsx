import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Navbar.css"

function Navbar() {
  return (
    <div>
        <nav className="navbar">
          <div className="logo-box">
            <div><img src="./Container.png" alt="" /></div>
            <div className="logo">THE DIGITAL CURATOR</div>
          </div>
            <div className="nav-links">
                <NavLink to="/" className="nav-item">Home</NavLink>
                <NavLink to="/projects" className="nav-item">Projects</NavLink>
                <NavLink to="/about" className="nav-item">About</NavLink>
                <NavLink to="/contact" className="nav-item">Contact</NavLink>
            </div>
            <button className="talk">LET'S TALK</button>
        </nav>
    </div>
  )
}

export default Navbar