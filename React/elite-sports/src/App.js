import React, {useState} from 'react';
import { SiteContextProvider } from './context/SiteContext';
import './App.css';
import UserList from './components/UserList';
import Header from './components/Header';


function App() {

  return (
    <SiteContextProvider>
      <div className="App">
        <header>
          <Header />
        </header>
        <main>
          <UserList />
        </main>
        <footer>
          <p>Luis Gonzalez Tucci</p>
        </footer>
    </div>
    </SiteContextProvider>
    
  );
}

export default App;
