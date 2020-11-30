import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom'

import './header.style.scss'

function Header({ type, admin }) {
  const [showBackground, setShowBackground] = useState(false)

  function navToggle() {
    setShowBackground(!showBackground)
  }

  const { pathname } = useLocation()


  return (
    <div className='header'>
      <div className={`header__icon`}>
        <Link to="/" className={`header__icon-link`}>
          <h1>
            {
              admin ? 'logout' : 'HighQ'
            }
          </h1>
        </Link>
      </div>



      <button type="button" className={`${showBackground ? 'showBackground' : ''} btn nav__button `} onClick={navToggle} >
        <span className="nav__icon"></span>
      </button>

      <div className="nav__background"></div>

      <nav className={`${showBackground ? 'showBackground' : ''} nav`}>
        <ul className="nav__list">
          {
            type.map((item) => {
              return (
                <li className={`${showBackground ? 'showBackground' : ''}  nav__item `} key={item.id} >
                  <Link to={item.link} className={`${pathname === item.link ? 'active' : ''} ${admin ? admin : ''} nav__link `} onClick={navToggle} >{item.title}</Link>
                </li>
              )
            })
          }
        </ul>
      </nav>
    </div>
  );
}

export default Header;