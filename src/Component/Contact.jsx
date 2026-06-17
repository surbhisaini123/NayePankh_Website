import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import PublicIcon from '@mui/icons-material/Public';
const Contact = () => {
  return (
    <div>
        <div className='contact-heading'>
           <h1>Contact Us</h1>
           <div className='underline'></div>
        </div>
      <div className='contact-section'>
         <div className='contact-left'>
            <h3>Get in Touch</h3>
            <p>We'd love to hear from you. Feel free to reach out</p>
            <p> for any queries, collaboration or support</p>
            <div className='contact-box'>
                <LocationOnIcon/>
                <div>
                    <h4>Address</h4>
                   <p>123,Naye Pankh Street, New Delhi,India</p>
                </div>
            </div>
            <div className='contact-box'>
                <EmailIcon className='contact-icon'/>
                <div>
                     <h4>Email</h4>
                    <p>info@nayepankhfoundation.org</p>
                </div>
            </div>
            <div className='contact-box'>
                <CallIcon className='contact-icon'/>
                <div>
                    <h4>Phone</h4>
                    <p>+91 9674257853</p>
                </div>
            </div>  
            <div className="follow-us">
               <div className="follow-heading">
                    <PublicIcon className="contact-icon" />
                     <h4>Follow Us</h4>
                </div>

               <div className="social-icons">
                  <FacebookIcon className="social-icon facebook" />
                  <InstagramIcon className="social-icon instagram" /> <LinkedInIcon className="social-icon linkedin" />  <TwitterIcon className="social-icon twitter" />
                  </div>
                </div>  
         </div>
         <div className='contact-right'>
            <div className='input-row'>
                <div>
                    <lable>Your Name</lable>
                    <input type='text' placeholder='Enter your name'/>
                </div>
                <div>
                    <lable>Your Email</lable>
                    <input type='email' placeholder='Enter your email'/>
                </div>
            </div>
             <label>Your Meassage</label>
             <textarea rows="7" placholder="write your message here..."></textarea>
             <button>Send Message</button>
         </div>
      </div>
    </div>
  )
}

export default Contact
