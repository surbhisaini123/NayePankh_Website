import React from 'react'
import './App.css'
import NavBar from './Component/NavBar.jsx'
import Home from './Component/Home.jsx'
import AboutUs from './Component/AboutUs.jsx'
const App = () => {
  return (
    <div>
     <NavBar/>
      <Home/>
      <br></br>
     <AboutUs/>
    </div>
  )
}

export default App