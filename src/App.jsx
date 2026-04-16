import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Navbar from './assets/Components/Navbar/Navbar'
import Home from './assets/Pages/Home/Home.jsx'
import About from './assets/Pages/About/About.jsx'
import Contact from './assets/Pages/Contact/Contact.jsx'
import Projects from './assets/Pages/Projects/Projects.jsx'
import Error from './assets/Components/Error/Error.jsx'
import Footer from './assets/Pages/Footer/Footer.jsx'

function App() {
  return (
    <div>
      <Navbar/>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
     </Routes>
     <Footer/>
    </div>
  )
}

export default App