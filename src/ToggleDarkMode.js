import './index.css'


export default function ToggleDarkMode({darkMode, toggleDarkMode}) {
 

  return (
    <>
    <input
      type='checkbox'
      checked={darkMode}
      onChange={toggleDarkMode}
    />
    {darkMode ? '🌙' : '🔆'}
  </>
  )
}
