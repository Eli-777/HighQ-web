import React from 'react';

import './stickerCard.style.scss'

function StickerCard({image, type, selectedStickerInfo}) {
  return (
    <div className={`sticker__card ${type}`} onClick={selectedStickerInfo} >
      <img src={image} alt="Sticker Img" className="sticker__img" />
    </div>
  );
}

export default StickerCard;