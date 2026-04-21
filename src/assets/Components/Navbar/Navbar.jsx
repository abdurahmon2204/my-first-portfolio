import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import "./Navbar.css";

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMobile ? 'hidden' : 'unset';
  }, [isMobile]);

  return (
    <nav className="navbar">
      <div className="logo-box">
        <img src="./Container.png" alt="logo" />
        <div className="logo">THE DIGITAL CURATOR</div>
      </div>

      <div className={isMobile ? "nav-links active" : "nav-links"}>
        <NavLink to="/" onClick={() => setIsMobile(false)}>Home</NavLink>
        <NavLink to="/projects" onClick={() => setIsMobile(false)}>Projects</NavLink>
        <NavLink to="/about" onClick={() => setIsMobile(false)}>About</NavLink>
        <NavLink to="/contact" onClick={() => setIsMobile(false)}>Contact</NavLink>
      </div>

      {/* Desktop only button */}
      <a 
        href="https://t.me/abdurahmon_9506" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="talk desktop-talk"
      >
        LET'S TALK
      </a>

      {/* Hamburger */}
      <div className="hamburger" onClick={() => setIsMobile(!isMobile)}>
        <span className={isMobile ? "bar bar1" : "bar"}></span>
        <span className={isMobile ? "bar bar2" : "bar"}></span>
        <span className={isMobile ? "bar bar3" : "bar"}></span>
      </div>
    </nav>
  );
}

export default Navbar;