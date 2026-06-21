import React from 'react'
import './App.css'
import NavBar from './Component/NavBar.jsx'
import Home from './Component/Home.jsx'
import AboutUs from './Component/AboutUs.jsx'
import OurProgram from './Component/OurProgram.jsx'
import Contact from './Component/Contact.jsx'
import { useState } from 'react'

const App = () => {
  const [darkMode,setDarkMode]=useState(false)
  return (
    <div className={darkMode ? "dark-mode": "light-mode"}>
     <NavBar
     darkMode={darkMode}
     setDarkMode={setDarkMode}
     />
     <section id='home'>
      <Home/>
     </section>
     <section id='aboutUs'>
      <AboutUs/>
     </section>
     <section id='ourProgram'>
      <OurProgram/>
     </section>
     <section id='contact'>
      <Contact/>
     </section>
    
    </div>
  )
}

export default App