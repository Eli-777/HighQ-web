import React from 'react';

import StickerCard from '../../components/stickerCard/StickerCard'

import './stickers.style.scss'
import { stickers, emojis, themes } from './dummyStickers'

function Stickers(props) {
  return (
    <div className="stickers pageContainer">
      <h1 className="title">貼圖介紹</h1>
      <h2 className="title-2">貼圖</h2>
      <div className="stickers__cards">
        {
          stickers.map((sticker) => {
            return <StickerCard key={sticker.id} image={sticker.image} />
          })
        }
      </div>
      <h2 className="title-2">表情貼</h2>
      <div className="stickers__cards">
        {
          emojis.map((emoji) => {
            return <StickerCard key={emoji.id} image={emoji.image} />
          })
        }
      </div>
      <h2 className="title-2">主題</h2>
      <div className="stickers__cards">
        {
          themes.map((theme) => {
            return <StickerCard key={theme.id} image={theme.image} type="theme" />
          })
        }
      </div>
    </div>
  );
}

export default Stickers;