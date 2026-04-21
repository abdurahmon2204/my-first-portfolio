import React from 'react'
import { NavLink } from 'react-router-dom'
import './Home.css'

function Home() {
  return (
    <div>
      <div className="home-page">
        < h2>FULL STACK ARCHITECT</h2>
        <p className='fullname'>SOBITJONOV  <span className='name'>ABDURAHMON.</span></p>
        <p className='architect'>Architecting high-performance digital ecosystems with a
          focus on semantic precision and kinetic motion.</p>
         
         <div className="home-buttons">
          <NavLink to="/projects" className="view">view projects</NavLink>
          <NavLink to="/contact" className="contact">contact me</NavLink>
         </div>

         <div className="about-me">
          <div className="first">
            <p className='age'>02+</p>
            <p className='year'>years experience</p>
          </div>
          <div className="first">
            <p className='age'>50</p>
            <p className='year'>projects completed</p>
          </div>
          <div className="first">
            <p className='age'>10+</p>
            <p className='year'>certificates taken</p>
          </div>
         </div>

         <div className="all-feature">
          <p className='featured'>FEATURED  <span className='manifestos'>MANIFESTOS</span></p>
          <NavLink to="/projects" className='explore'>EXPLORE ALL WORK</NavLink>
         </div>

         <div className="all-second">
          <div className="second-first">
            <div className='override'><img width={"400px"} height={"200px"} src="./image.png" alt="" /></div>
            <p className='clean'>Clean Code & Readability</p>
            <p className='code'>Code for Humans</p>
            <p className='should'>Code should not only be written for computers to execute but for humans to understand. My goal is to write clean, maintainable, and scalable code that any developer can easily build upon.</p>
          </div>
          <div className="second-first">
            <div className='override'><img width={"400px"} height={"200px"} src="./hacking.png" alt="" /></div>
            <p className='clean'>User-Centric Philosophy</p>
            <p className='code'>User-First Approach</p>
            <p className='should'>Behind every complex backend system, there must be a simple and intuitive user experience. I believe technology should serve people by making their lives easier and more efficient.</p>
          </div>
         </div>
         <div className="second-second">
            <div className='override'><img width={"500px"} height={"400px"} src="./override.png" alt="" /></div>
            <div className='system'>
             <p className='clean'>SYSTEM OVERRIDE</p>
             <p className='code'>Override the Ordinary</p>
             <p className='should'>In software development, the default state isn't always the best state. I specialize in overriding standard systems to deliver customized, secure, and lightning-fast web applications.</p>
          </div>
          </div>
      </div>
    </div>
  )
}

export default Home