import React, { useContext } from 'react';
import { SiteContext } from '../context/SiteContext';


const Header = () => {

    const { darkMode, setDarkMode } = useContext(SiteContext);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
      }


  return (
    <>
        <h1>Some random users</h1>
        <button className="toggleButton" onClick={toggleDarkMode}>{darkMode ? 'off' : 'on'}</button>
    </>
  )
}

export default Header