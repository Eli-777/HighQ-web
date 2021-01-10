import React from 'react';
import handleImgError from '../../effects/handleImgError.effects'

import './stickerShowCard.style.scss'

function StickerShowCard({ toggleShowCard, selectedSticker }) {

  // function handleImgError(e) {
  //   console.log(e.target.onerror)
  //   if (!e.target.onerror) {
  //     e.target.src="https://upload.wikimedia.org/wikipedia/commons/0/0a/No-image-available.png"
  //   }
  // }

  return (
    <div className="stickerShowCard">
      <div className="background" onClick={toggleShowCard} />
      <div className="left-side">
        <img src={selectedSticker.image.together} alt="All stickers img" className="left-side__img" onError={handleImgError} />
      </div>
      <div className="right-side">
        <div className="close-btn" onClick={toggleShowCard}>&times;</div>
        <h1 className="right-side__title">
        {selectedSticker.name}
        </h1>
        <h3 className="right-side__author"><a target="_blank" rel="noopener noreferrer" href="https://store.line.me/search/zh-Hant?q=HighQ">High Q</a></h3>
        <p className="right-side__description">
          {selectedSticker.description}
        </p>
        <span className="right-side__price">NT${selectedSticker.price}</span>
        <a className="right-side__button" target="_blank" rel="noopener noreferrer" href={selectedSticker.link}>
          前 往 購 買
        </a>
      </div>

    </div>
  );
}

export default StickerShowCard;