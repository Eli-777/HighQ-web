import React, { useState } from 'react';
import { Link } from 'react-router-dom'

import './header.style.scss'

function Header(props) {
  const [showBackground, setShowBackground] = useState(false)

  function navToggle() {
    setShowBackground(!showBackground)
  }



  return (
    <div className='header'>
      <div className="header__icon">
        <Link to="/" className="header__icon-link" />
      </div>

      

      <button type="button" className={`${showBackground ? 'showBackground' : ''} btn nav__button `} onClick={navToggle} >
        <span className="nav__icon"></span>
      </button>

      <div className="nav__background"></div>

      <nav className={`${showBackground ? 'showBackground' : ''} nav`}>
        <ul className="nav__list">
          <li className={`${showBackground ? 'showBackground' : ''} nav__item `}>
            <Link to="/" className="nav__link">作者介紹</Link>
          </li>
          <li className={`${showBackground ? 'showBackground' : ''} nav__item `}>
            <Link to="/" className='nav__link'>角色介紹</Link>
          </li>
          <li className={`${showBackground ? 'showBackground' : ''} nav__item `}>
            <Link to="/" className='nav__link'>貼圖介紹</Link>
          </li>
          <li className={`${showBackground ? 'showBackground' : ''} nav__item `}>
            <Link to="/" className='nav__link'>聯絡我們</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;