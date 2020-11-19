import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import UseScrollToTop from './effects/use-reStoreScrollTop.effects'

import Homepage from './pages/homepage/Homepage'
import AuthorPage from './pages/author/Author'
import CharactersPage from './pages/characters/Characters'
import StickersPage from './pages/stickers/Stickers'
import ContactPage from './pages/contact/Contact'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'

import './main.style.scss';

function App() {

  return (
    <Router>

      <div className="App">
        <Header />
        <UseScrollToTop />
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
          <Route path="/stickers" exact={true}>
            <StickersPage />
          </Route>
          <Route path="/contact" exact={true}>
            <ContactPage />
          </Route>
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
