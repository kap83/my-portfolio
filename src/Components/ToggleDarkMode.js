import React from 'react'
import './Toggle.css'

export default function ToggleDarkMode({darkMode, handleToggleChange}) {
 
  return (
    <div className='toggle-container'>
    <input
      type='checkbox'
      id='check'
      className='toggle'
      checked={darkMode}
      onChange={handleToggleChange}
    />
    <label htmlFor='check'>Dark Mode</label>
  </div>
  )
}
