import React, { useState } from 'react';
import ToggleDarkMode from './ToggleDarkMode';
import './index.css';

function App() {
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <div data-theme={darkMode ? "dark" : "light"}>
     <ToggleDarkMode darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
     <h1>Hello</h1>
     <h2>world</h2>
    </div>
  );
}

export default App;
