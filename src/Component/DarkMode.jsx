import React from 'react'

const DarkMode = ({darkMode,setDarkMode}) => {
  return (
    <div>
        <button className='theme-btn' onClick={()=> setDarkMode(!darkMode)}>
            {darkMode ? "☀️" : "🌙"}

        </button>
    </div>
  )
}

export default DarkMode