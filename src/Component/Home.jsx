import React from 'react'
import Imapct from './Imapct.jsx'
const Home = () => {
  return (
    <div >
      <div className='Hero'>
        
         <div className='text-Hero' >
        <h3>Welcome to</h3> 
        <h1>NayePankh <span > Foundation</span></h1>

        <h4>Empowering Lives. Creating Future</h4> <br></br>

        <p>We work from the education,health, and empowerment of <br></br> underprivileged children and communities. </p>  <br></br>
      </div>
      <div className='button-Hero'>
        <button className='donate'>Donate Now</button>
        <button className='learn'>Learn More</button>
      </div>
      
      </div>
      <section id='impact'>
         <Imapct/>
      </section>
    
    </div>
  )
}

export default Home
