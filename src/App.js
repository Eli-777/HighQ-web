import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'

import Homepage from './pages/homepage/Homepage'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Homepage />

        <Footer />
      </div>
    </Router>
  );
}

export default App;
