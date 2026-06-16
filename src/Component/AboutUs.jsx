import React from 'react'
import Image from '../assets/pick.jpg'
const AboutUs = () => {
  return (
    <div className='about-section' >
      <div className='about-heading'>
         <h1  >About Us</h1>
      </div>
      <div className='about-container'>
        <div className='about-content'>
          <h2>Who We Are</h2>
         <p>
           NayePankh Foundation is a non-profit organization dedicated
            to improving the lives of underprivileged children and
            communities.
          </p>
          <p>
             We believe that every individual deserves access to
            education, healthcare and equal opportunities to grow
            and succeed.
          </p>
          <p>
           Through our programs and volunteers, we are building
            a brighter tomorrow.
          </p>
          <button className='join-btn'>
           Join Us
          </button>
        </div>
        <div className='about-image'>
          <img src={Image} alt="About Us"/>
        </div>
      </div>
      <div className='about-card'>
        <div className='card'>
          <h3>Our Mission</h3>
          <p>To empower lives through education and support.</p>
        </div>
        <div className='card'>
          <h3>Our Vission</h3>
          <p> A society where everyone has equal opportunities.</p>
        </div>
        <div className='card'>
          <h3>Our Value</h3>
          <p>Compassion, Integrity, Inclusion and Empowerment.</p>
        </div>
      </div>
       
        
       
    </div>
  )
}

export default AboutUs