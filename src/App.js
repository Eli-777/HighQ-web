import React from 'react';
import { Route, Switch } from 'react-router-dom'

import UseScrollToTop from './effects/use-reStoreScrollTop.effects'

import Homepage from './pages/homepage/Homepage'
import AuthorPage from './pages/author/Author'
import CharactersPage from './pages/characters/Characters'
import StickersPage from './pages/stickers/Stickers'
import ContactPage from './pages/contact/Contact'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import NotFound from './components/notFound/NotFound'

import './main.style.scss';

function App() {

  return (
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

        <Route to="*" >
          <NotFound />
        </Route>
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
