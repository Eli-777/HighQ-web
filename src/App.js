import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'

import Homepage from './pages/homepage/Homepage'
import Header from './components/header/Header'

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <header className="App-header">
          <Homepage />
        </header>
      </div>
    </Router>
  );
}

export default App;
