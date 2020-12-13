import React from 'react';

import StickerCard from '../../components/stickerCard/StickerCard'
import Spinner from '../spinner/spinner.component'

import './stickerCards.style.scss'

function StickerCards({title, stickerCards, selectedStickerInfo, isLoading, ...otherProps}) {
  return (
    <div>
      <h2 className="title-2">{title}</h2>
      <div className="stickers__cards">
        {
          isLoading ? 
          <Spinner /> :
          stickerCards.map((sticker) => {
            return <StickerCard key={sticker.id} image={sticker.image.single} selectedStickerInfo={() => selectedStickerInfo(sticker)} {...otherProps} />
          })
        }
      </div>
    </div>
  );
}

export default StickerCards;