import React from 'react'
import GroupsIcon from '@mui/icons-material/Groups';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import HandshakeIcon from '@mui/icons-material/Handshake';
import SchoolIcon from '@mui/icons-material/School';

const Imapct = () => {
  return (
    <div>
        <div className='impact-section'>
            <div className='imapct-card'>
               <GroupsIcon className='impact-icon'/>
                <h2>5000+</h2>
                <p>Children Educated</p>
            </div>
            <div className='imapct-card'>
                <HandshakeIcon className='impact-icon'/>
                <h2>100+</h2>
                <p>Volunteers</p>
            </div>
            <div className='imapct-card'>
                <LocationOnIcon className='impact-icon'/>
                <h2>50+</h2>
                <p>Village Reached</p>
            </div>
            <div className='imapct-card'>
                <SchoolIcon className='impact-icon'/>
                <h2>20+</h2>
                <p>Education Programs</p>
            </div>
            

        </div>
    </div>
  )
}

export default Imapct