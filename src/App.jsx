import React from 'react'
import './App.css'
import NavBar from './Component/NavBar.jsx'
import Home from './Component/Home.jsx'
import AboutUs from './Component/AboutUs.jsx'
import OurProgram from './Component/OurProgram.jsx'
import Contact from './Component/Contact.jsx'

const App = () => {
  return (
    <div>
     <NavBar/>
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