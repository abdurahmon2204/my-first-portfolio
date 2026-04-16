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
            <a href="https://t.me/abdurahmon_9506" target="_blank" rel="noopener noreferrer"  className="talk">LET'S TALK</a>
        </nav>
    </div>
  )
}

export default Navbar