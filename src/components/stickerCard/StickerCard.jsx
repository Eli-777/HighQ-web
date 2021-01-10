import React from 'react';
import handleImgError from '../../effects/handleImgError.effects'

import './stickerCard.style.scss'

function StickerCard({image, type, selectedStickerInfo}) {
  return (
    <div className={`sticker__card ${type}`} onClick={selectedStickerInfo} onError={handleImgError} >
      <img src={image} alt="Sticker Img" className="sticker__img" />
    </div>
  );
}

export default StickerCard;