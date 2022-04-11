import React, {useState} from 'react';
import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom';
import { SiteContextProvider } from './context/SiteContext';
import './App.css';
import UserList from './components/UserList';
import Header from './components/Header';
import Home from './pages/Home';
import UserDetailPage from './pages/UserDetailPage';


function App() {

  return (
    <SiteContextProvider>
      <Router>
      <div className="App">
        <header>
          <Header />
        </header>
        <main>
          <Routes>
                    <Route exact path="/" element = {<Home/>} />
                    <Route path="/users/:id" element = {<UserDetailPage />} />
          </Routes>
        </main>
        <footer>
          <p>Luis Gonzalez Tucci</p>
        </footer>
    </div>

      </Router>
    </SiteContextProvider>
    
  );
}

export default App;
