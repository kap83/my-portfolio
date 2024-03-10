// eslint-disable-next-line
import React, { useState } from 'react';
import useLocalStorage from 'use-local-storage';
import ToggleDarkMode from './Components/ToggleDarkMode';
import './index.css';
import './App.css';
import JSCSSHTML from './logos/JSCSSHTML.png'
import ReactLogo from './logos/ReactLogo.png'



function App() {
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", false)

  const handleToggleChange = () => {
    setDarkMode(!darkMode)
  }

  return (
    <div className='App' data-theme={darkMode ? 'dark' : 'light'}>
      <ToggleDarkMode 
        darkMode={darkMode}
        handleToggleChange={handleToggleChange}

      />
     <h1 className='myName'>Karen Polanco</h1>
     <h2 className='profession'>Software Engineer</h2>
     <p className='description'>Analytical, organized, with an eye on latest technologies. 
        Ready to design and maintain intuitive, user-friendly websites.
     </p>
     <img src={ReactLogo} alt='react logo' 
       width={100}
       height={100}/>
     <img src={JSCSSHTML} alt='js css html logo' 
      width={250}
      height={250}
     />

    
    </div>
  );
}

export default App;
