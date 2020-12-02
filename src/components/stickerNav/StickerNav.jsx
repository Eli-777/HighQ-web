import React from 'react';
import { Link } from 'react-router-dom'

import './stickerNav.style.scss'

function StickerNav({ query }) {

  return (
    <nav className="stickerNav admin-margin">
      <ul className="stickerNav__list">
        <li className="stickerNav__item">
          <Link
            to="/admin/sticker"
            className={`${!query ? 'active' : ''} stickerNav__link`}
          >
            貼圖
          </Link>
        </li>
        <li className="stickerNav__item">
          <Link
            to="/admin/sticker?sticker=emoji"
            className={`${query === 'emoji' ? 'active' : ''} stickerNav__link`}
          >
            表情貼
          </Link>
        </li>
        <li className="stickerNav__item">
          <Link
            to="/admin/sticker?sticker=theme"
            className={`${query === 'theme' ? 'active' : ''} stickerNav__link`}
          >
            主題
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default StickerNav;