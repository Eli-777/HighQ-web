import React from 'react';

import { Link } from 'react-router-dom'

function HeaderNavForestage({showBackground, pathname, navToggle}) {
  return (
    
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
    
  );
}

export default HeaderNavForestage;