import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Homepage from './pages/homepage/Homepage'
import AuthorPage from './pages/author/Author'
import CharactersPage from './pages/characters/Characters'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact={true}>
            <Homepage />
          </Route>
          <Route path="/author" exact={true}>
            <AuthorPage />
          </Route>
          <Route path="/characters" exact={true}>
            <CharactersPage />
          </Route>
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
