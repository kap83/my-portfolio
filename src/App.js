
// eslint-disable-next-line
import React, { useState } from 'react';
import ToggleDarkMode from './Components/ToggleDarkMode';
import './index.css';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false)

  const handleToggleChange = () => {
    setDarkMode(!darkMode)
  }

  return (
    <div className='App' data-theme={darkMode ? 'dark' : 'light'}>
      <ToggleDarkMode 
        darkMode={darkMode}
        handleToggleChange={handleToggleChange}

      />
     <h1 className='title'>Hello World!</h1>
     <div className='box'>
        <h2>This is a box</h2>
     </div>
    </div>
  );
}

export default App;
