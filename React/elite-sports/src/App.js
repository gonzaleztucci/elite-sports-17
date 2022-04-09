import React, {useState, useEffect, useContext} from 'react';
import { SiteContext , SiteContextProvider } from './context/SiteContext';
import UserTile from './components/UserTile';
import fetchUsers from './api/index';
import './App.css';
import UserList from './components/UserList';


function App() {

  // const context = useContext(SiteContext);


  
  const [darkMode, setDarkMode] = useState(false);



  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  }




  return (
    <SiteContextProvider>
      <div className="App">
      <header>
        <h1>Some random users</h1>
        <button className="toggleButton" onClick={toggleDarkMode}>{darkMode ? 'off' : 'on'}</button>
      </header>
      <main>
        <UserList />
      </main>
      <footer>
      </footer>
    </div>
    </SiteContextProvider>
    
  );
}

export default App;
