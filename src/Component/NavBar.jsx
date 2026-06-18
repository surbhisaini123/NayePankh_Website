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
            <p onClick={() =>document.getElementById("home").scrollIntoView({   behavior: "smooth", })}>Home</p>
            <p onClick={() =>document.getElementById("aboutUs").scrollIntoView({   behavior: "smooth", })}>About Us</p>
            <p onClick={() =>document.getElementById("ourProgram").scrollIntoView({   behavior: "smooth", })}>Our Programs</p>
            <p  onClick={() =>document.getElementById("impact").scrollIntoView({   behavior: "smooth", })}>Impact</p>
            {/* <p>Gallery</p> */}
            <p onClick={() =>document.getElementById("contact").scrollIntoView({   behavior: "smooth", })}>Contact</p>
            <button>Donate Now</button>
        </div>
        
    </div>
  )
}

export default NavBar