import React, { useEffect, Suspense } from 'react';
import { Route, Switch, Redirect, useLocation } from 'react-router-dom'

import UseScrollToTop from './effects/use-reStoreScrollTop.effects'
import { useDispatch, useSelector } from 'react-redux'
import { checkCurrentUserStart } from './redux/user/user.action'

import Homepage from './pages/homepage/Homepage'
import AdminLoginPage from './pages/adminLogin/AdminLogin'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import NotFound from './components/notFound/NotFound'
import PrivateRoute from './components/privateRoute/PrivateRoute'
import Spinner from './components/spinner/spinner.component'

import './main.style.scss';
import { CSSTransition, TransitionGroup } from 'react-transition-group'

const AuthorPage = React.lazy(() => import('./pages/author/Author'))
const CharactersPage = React.lazy(() => import('./pages/characters/Characters'))
const StickersPage = React.lazy(() => import('./pages/stickers/Stickers'))
const ContactPage = React.lazy(() => import('./pages/contact/Contact'))
const AdminPage = React.lazy(() => import('./pages/admin/Admin'))
const AdminAddPage = React.lazy(() => import('./components/adminMainAdd/AdminMainAdd'))
const AdminEditPage = React.lazy(() => import('./components/adminMainEdit/AdminMainEdit'))
const AdminHistoryPage = React.lazy(() => import('./pages/adminHistory/AdminHistory'))
const AdminHistoryAddPage = React.lazy(() => import('./components/adminHistoryAdd/AdminHistoryAdd'))
const AdminHistoryEditPage = React.lazy(() => import('./components/adminHistoryEdit/AdminHistoryEdit'))
const AdminCharacterPage = React.lazy(() => import('./pages/adminCharacter/AdminCharacter'))
const AdminCharacterAddPage = React.lazy(() => import('./components/adminCharacterAdd/AdminCharacterAdd'))
const AdminCharacterEditPage = React.lazy(() => import('./components/adminCharacterEdit/AdminCharacterEdit'))
const AdminStickerPage = React.lazy(() => import('./pages/adminSticker/AdminSticker'))
const AdminStickerAddPage = React.lazy(() => import('./components/adminStickerAdd/AdminStickerAdd'))
const AdminStickerEditPage = React.lazy(() => import('./components/adminStickerEdit/AdminStickerEdit'))
const AdminWishCardPage = React.lazy(() => import('./pages/adminWishCard/AdminWishCard'))
const AdminWishCardEdit = React.lazy(() => import('./components/adminWishCardEdit/AdminWishCardEdit'))

function App() {
  const adminHeader = [
    { id: 'admin1', title: '管理貼文', link: '/admin/main' },
    { id: 'admin2', title: '管理歷史', link: '/admin/history' },
    { id: 'admin3', title: '管理角色', link: '/admin/character' },
    { id: 'admin4', title: '管理貼圖', link: '/admin/sticker' },
    { id: 'admin5', title: '管理許願池', link: '/admin/wishCard' },
  ]
  const header = [
    { id: 'header1', title: '最新貼文', link: '/' },
    { id: 'header2', title: '作者介紹', link: '/author' },
    { id: 'header3', title: '角色介紹', link: '/characters' },
    { id: 'header4', title: '貼圖介紹', link: '/stickers' },
    { id: 'header5', title: '聯絡我們', link: '/contact' },
  ]

  const dispatch = useDispatch()
  const isAdmin = useSelector(state => state.user.isAdmin)
  const location = useLocation()


  useEffect(() => {

    dispatch(checkCurrentUserStart())

  }, [dispatch])



  return (
    <div className="App">
      <UseScrollToTop />
      <Suspense fallback={<Spinner />}>

        <Switch>
          <Redirect exact={true} path="/admin" to="/admin/main" />
          {
            isAdmin ?
              <Redirect exact={true} path="/admin/login" to='/admin/main' />
              :
              null
          }

          <Route path="/admin/login" exact={true}>
            <AdminLoginPage />
          </Route>

          <Route path="/admin" >
            <Header type={adminHeader} admin="admin" />
            <Switch>

              <PrivateRoute>
                <Route path="/admin/main" exact={true}>
                  <AdminPage />
                </Route>
                <Route path="/admin/main/add" exact={true}>
                  <AdminAddPage title="新增貼文" submitButton="新增" />
                </Route>
                <Route path="/admin/main/edit/:id" exact={true}>
                  <AdminEditPage />
                </Route>
                <Route path="/admin/history" exact={true}>
                  <AdminHistoryPage />
                </Route>
                <Route path="/admin/history/add" exact={true}>
                  <AdminHistoryAddPage title="新增歷史" submitButton="新增" />
                </Route>
                <Route path="/admin/history/edit/:id" exact={true}>
                  <AdminHistoryEditPage />
                </Route>
                <Route path="/admin/character" exact={true}>
                  <AdminCharacterPage />
                </Route>
                <Route path="/admin/character/add" exact={true}>
                  <AdminCharacterAddPage title="新增角色" submitButton="新增" />
                </Route>
                <Route path="/admin/character/edit/:id" exact={true}>
                  <AdminCharacterEditPage />
                </Route>
                <Route path="/admin/sticker" exact={true}>
                  <AdminStickerPage />
                </Route>
                <Route path="/admin/sticker/add" exact={true}>
                  <AdminStickerAddPage title="新增貼圖" submitButton="新增" />
                </Route>
                <Route path="/admin/sticker/edit/:id" exact={true}>
                  <AdminStickerEditPage />
                </Route>
                <Route path="/admin/wishCard" exact={true}>
                  <AdminWishCardPage />
                </Route>
                <Route path="/admin/wishCard/edit/:id" exact={true}>
                  <AdminWishCardEdit />
                </Route>
              </PrivateRoute>

            </Switch>
          </Route>

          <Route>
            <Header type={header} />
            <TransitionGroup className={'square-wrapper'}>
              <CSSTransition
                timeout={500}
                classNames={'fade'}
                key={location.pathname}
              >

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
              </CSSTransition>
            </TransitionGroup>

            <Footer />
          </Route>

        </Switch>
      </Suspense>

    </div>
  );
}

export default App;
