import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom'

import './header.style.scss'

function Header(props) {
  const [showBackground, setShowBackground] = useState(false)

  function navToggle() {
    setShowBackground(!showBackground)
  }

  const { pathname } = useLocation()


  return (
    <div className='header'>
      <div className="header__icon">
        <Link to="/" className="header__icon-link">
          <h1>HighQ</h1>
        </Link>
      </div>



      <button type="button" className={`${showBackground ? 'showBackground' : ''} btn nav__button `} onClick={navToggle} >
        <span className="nav__icon"></span>
      </button>

      <div className="nav__background"></div>

      <nav className={`${showBackground ? 'showBackground' : ''} nav`}>
        <ul className="nav__list">
          <li className={`${showBackground ? 'showBackground' : ''} nav__item `}>
            <Link to="/" className={`${pathname === '/' ? 'active' : ''} nav__link`} onClick={navToggle} >最新貼文</Link>
          </li>
          <li className={`${showBackground ? 'showBackground' : ''} ${pathname === '/author' ? 'active' : ''} nav__item `}>
            <Link to="/author" className={`${pathname === '/author' ? 'active' : ''} nav__link`} onClick={navToggle} >作者介紹</Link>
          </li>
          <li className={`${showBackground ? 'showBackground' : ''} nav__item `}>
            <Link to="/characters" className={`${pathname === '/characters' ? 'active' : ''} nav__link`} onClick={navToggle} >角色介紹</Link>
          </li>
          <li className={`${showBackground ? 'showBackground' : ''} nav__item `}>
            <Link to="/stickers" className={`${pathname === '/stickers' ? 'active' : ''} nav__link`} onClick={navToggle} >貼圖介紹</Link>
          </li>
          <li className={`${showBackground ? 'showBackground' : ''} nav__item `}>
            <Link to="/contact" className={`${pathname === '/contact' ? 'active' : ''} nav__link`} onClick={navToggle} >聯絡我們</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;