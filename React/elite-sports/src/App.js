import React, {useState, useEffect} from 'react';
import UserTile from './components/UserTile';
import fetchUsers from './api/index';
import './App.css';
import UserList from './components/UserList';


function App() {

  const [currentUsers, setCurrentUsers] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  const load = async () => {
    const users = await fetchUsers();
    setCurrentUsers(users);
  }

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  }

  useEffect(() => {
    load();
  }, []);


  return (
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
  );
}

export default App;
