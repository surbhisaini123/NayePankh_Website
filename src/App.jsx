import React from 'react'
import './App.css'
import NavBar from './Component/NavBar.jsx'
import Home from './Component/Home.jsx'
import AboutUs from './Component/AboutUs.jsx'
import OurProgram from './Component/OurProgram.jsx'

const App = () => {
  return (
    <div>
     <NavBar/>
      <Home/>
     <AboutUs/>
     <OurProgram/>
    
    </div>
  )
}

export default App