import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import "./Navbar.css";

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo-box">
        <div><img src="./Container.png" alt="logo" /></div>
        <div className="logo">THE DIGITAL CURATOR</div>
      </div>

      <div className={isMobile ? "nav-links active" : "nav-links"}>
        <NavLink to="/" className="nav-item" onClick={() => setIsMobile(false)}>Home</NavLink>
        <NavLink to="/projects" className="nav-item" onClick={() => setIsMobile(false)}>Projects</NavLink>
        <NavLink to="/about" className="nav-item" onClick={() => setIsMobile(false)}>About</NavLink>
        <NavLink to="/contact" className="nav-item" onClick={() => setIsMobile(false)}>Contact</NavLink>
        
        {/* <a href="https://t.me/abdurahmon_9506" 
           target="_blank" 
           rel="noopener noreferrer" 
           className="talk mobile-talk">LET'S TALK</a> */}
      </div>

      <a href="https://t.me/abdurahmon_9506" 
         target="_blank" 
         rel="noopener noreferrer" 
         className="talk desktop-talk">LET'S TALK</a>

      <button className="hamburger" onClick={() => setIsMobile(!isMobile)}>
        <span className={isMobile ? "bar bar1" : "bar"}></span>
        <span className={isMobile ? "bar bar2" : "bar"}></span>
        <span className={isMobile ? "bar bar3" : "bar"}></span>
      </button>
    </nav>
  );
}

export default Navbar;