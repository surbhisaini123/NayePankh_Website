import React from 'react'
import EduImg from '../assets/education.jpg'
import WomenImg from '../assets/women.jpg'
import DevelopImg from '../assets/community.jpg'
const OurProgram = () => {
  return (
    <div>
      <div className='program-heading'>
        <h1>Our Programs</h1>
        <div className='underline'></div>
      </div>
      <div className='program-card' >
        <div className='edu-card'>
           <img src={EduImg} alt='No Image'/>
          <div className='edu-content'> 
            <h3>Education For All</h3> 
            <p>We provide quality education,school supplies and learning resource to children from underprivvileged communities.</p> <br></br>
            <button>Read More</button>

          </div>
            
        </div>
        <div className='women-card'>
            <img src={WomenImg} alt='No Image'/>
            <div className='women-content'>
              <h3>Women Empowerment</h3>
              <p>We work for women empowerment through skill development, training and employment opportunities.</p>
              <br></br>
              <button>Read More</button>
            </div>
            
        </div>
        <div className='community-card'>
            <img src={DevelopImg} alt='No Image'/>
            <div className='community-content'>
              <h3>Community Development</h3>
              <p>we focus on community growth, health awareness, sanitation, and enviroment sustainability.</p>
              <br></br>
              <button>Read More</button>
            </div>

        </div>

      </div>
    </div>
  )
}

export default OurProgram
mcn