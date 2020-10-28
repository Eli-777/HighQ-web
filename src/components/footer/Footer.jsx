import React from 'react';
import { Link } from 'react-router-dom'

import { FaInstagram, FaFacebookF, FaYoutube } from 'react-icons/fa';
import { SiTiktok } from 'react-icons/si';


import './footer.style.scss'

function Footer(props) {
  return (
    <div className="footer">

      <ul className="footer__nav">
        <li className="footer__nav--item"><Link to="/author" className="footer__nav--link">作者介紹</Link></li>
        <li className="footer__nav--item"><Link to="/characters" className="footer__nav--link">角色介紹</Link></li>
        <li className="footer__nav--item"><Link to="/stickers" className="footer__nav--link">貼圖介紹</Link></li>
        <li className="footer__nav--item"><Link to="/contact" className="footer__nav--link">聯絡我們</Link></li>
      </ul>

      <div className="footer__connect">
        <h3 className="footer__connect--title">
          Connect with us
        </h3>
        <p className="footer__connect--mail">
          Email: fireguns0903@gmaiil.com
        </p>
        <div className="footer__connect--social-icons">
          <a href="https://www.facebook.com/HighQman" target="_blank" rel="noopener noreferrer">
            <FaFacebookF className={`social__icon fb`} />
          </a>
          <a href="https://www.instagram.com/highq_ig/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className={`social__icon ig`} />
          </a>
          <a href="https://www.tiktok.com/@highq0903?lang=en" target="_blank" rel="noopener noreferrer">
            <SiTiktok className={`social__icon tiktok`} />
          </a>
          <a href="https://www.youtube.com/channel/UCimb03Z3R6F4nYJNAVOArGA/featured" target="_blank" rel="noopener noreferrer">
            <FaYoutube className={`social__icon youtube`} />
          </a>
        </div>
        <p className="footer__copyright">Copyright © 2020 Eli studio.</p>
      </div>
    </div>
  );
}

export default Footer;