import React from 'react';

import { AppRouter } from './App.router';
import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Movies and Series by RP</p>
      </header>
      <AppRouter />
      <footer className="App-footer">
        <span>2024 @ Developed by RP</span>
      </footer>
    </div>
  );
}

export default App;
