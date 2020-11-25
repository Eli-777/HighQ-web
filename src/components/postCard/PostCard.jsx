import React from 'react';

import { FaInstagram, FaFacebookF } from 'react-icons/fa';

import './postCard.style.scss'

function PostCard({ media, mediaIcon, photo, date, link, style }) {

  function fetchMediaIcon(mediaIcon) {
    if (mediaIcon === 'FaInstagram') {
      return <FaInstagram className={`card__icon ig`} />
    } else if (mediaIcon === 'FaFacebookF') {
      return <FaFacebookF className={`card__icon fb`} />
    }
  }

  return (
    <div className={`card `} style={style}>
      <div className={`card__header ${media}`}>
        {fetchMediaIcon(mediaIcon)}
        <div className="card__date">{date}</div>
      </div>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={photo} alt="Post" className="card__photo" />
      </a>
    </div>
  );
}

export default PostCard;