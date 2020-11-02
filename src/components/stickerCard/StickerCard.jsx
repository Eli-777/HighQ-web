import React from 'react';

import './stickerCard.style.scss'

function StickerCard({image, type}) {
  return (
    <div className={`sticker__card ${type}`}>
      <img src={image} alt="Sticker Img" className="sticker__img" />
    </div>
  );
}

export default StickerCard;