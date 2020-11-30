import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'

import UseScrollToTop from './effects/use-reStoreScrollTop.effects'

import Homepage from './pages/homepage/Homepage'
import AuthorPage from './pages/author/Author'
import CharactersPage from './pages/characters/Characters'
import StickersPage from './pages/stickers/Stickers'
import ContactPage from './pages/contact/Contact'
import AdminPage from './pages/admin/Admin'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import NotFound from './components/notFound/NotFound'

import './main.style.scss';

function App() {
  const adminHeader = [
    { id: 'admin1', title: '管理最新貼文', link: '/admin/main' },
    { id: 'admin2', title: '管理歷史沿革', link: '/admin/history' },
    { id: 'admin3', title: '管理角色介紹', link: '/admin/character' },
    { id: 'admin4', title: '管理貼圖介紹', link: '/admin/sticker' },
    { id: 'admin5', title: '管理許願池清單', link: '/admin/wishCard' },
  ]
  const header = [
    { id: 'header1', title: '最新貼文', link: '/main' },
    { id: 'header2', title: '作者介紹', link: '/author' },
    { id: 'header3', title: '角色介紹', link: '/characters' },
    { id: 'header4', title: '貼圖介紹', link: '/stickers' },
    { id: 'header5', title: '聯絡我們', link: '/contact' },
  ]


  return (
    <div className="App">
      <UseScrollToTop />
      <Switch>
        <Redirect exact={true} path="/admin" to="/admin/main" />

        <Route path="/admin" >
          <Header type={adminHeader} admin="admin"/>
          <Switch>
            <Route path="/admin/main" exact={true}>
              <AdminPage />
            </Route>
          </Switch>
        </Route>

        <Route>
          <Header type={header} />

          <Switch>
            <Redirect exact={true} path="/" to="/main" />
            <Route path="/main" exact={true}>
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
        </Route>

      </Switch>

    </div>
  );
}

export default App;