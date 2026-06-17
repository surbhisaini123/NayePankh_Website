import React from 'react'
import Logo from "../assets/logo.png";
const NavBar = () => {
  return (
    <div className='navbar'>
        <div className="logo">
          <img src={Logo} alt="Logo" />

           <div className="logo-text">
             <h2>NayePankh</h2>
             <p>Foundation</p>
            </div>
        </div>

        <div className='nav_msg'>
            <p>Home</p>
            <p>About</p>
            <p>Our Program</p>
            <p>Impact</p>
            <p>Gallery</p>
            <p>Contact Us</p>
            <button>Donate Now</button>
        </div>    
    </div>
  )
}

export default NavBar