import React from 'react';

import './stickerShowCard.style.scss'

function StickerShowCard({ toggleShowCard, selectedSticker }) {

  const img = `https://i.imgur.com/gJ3PZS4.jpg`
  return (
    <div className="stickerShowCard">
      <div className="background" onClick={toggleShowCard} />
      <div className="left-side">
        <img src={selectedSticker.image.together} alt="All stickers img" className="left-side__img" />
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