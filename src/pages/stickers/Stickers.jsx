import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import { getSticker } from '../../redux/sticker/sticker.action'

import StickerCard from '../../components/stickerCard/StickerCard'
import StickerShowCard from '../../components/stickerShowCard/StickerShowCard'

import './stickers.style.scss'

function Stickers({ stickers, emojis, themes, getSticker }) {
  const [isShowCard, setIsShowCard] = useState(false)
  const [selectedSticker, setSelectedSticker] = useState('')

  function toggleShowCard() {
    setIsShowCard(!isShowCard)
  }

  function selectedStickerInfo(sticker) {
    setSelectedSticker(sticker)
    toggleShowCard()
  }

  useEffect(() => {
    getSticker()
  }, [getSticker])

  return (
    <div className="stickers pageContainer max-width-big-desktop">
      <h1 className="title">貼圖介紹</h1>
      <h2 className="title-2">貼圖</h2>
      <div className="stickers__cards">
        {
          stickers.map((sticker) => {
            return <StickerCard key={sticker.id} image={sticker.image.single} selectedStickerInfo={() => selectedStickerInfo(sticker)} />
          })
        }
      </div>
      <h2 className="title-2">表情貼</h2>
      <div className="stickers__cards">
        {
          emojis.map((emoji) => {
            return <StickerCard key={emoji.id} image={emoji.image.single} selectedStickerInfo={() => selectedStickerInfo(emoji)} />
          })
        }
      </div>
      <h2 className="title-2">主題</h2>
      <div className="stickers__cards">
        {
          themes.map((theme) => {
            return <StickerCard key={theme.id} image={theme.image.single} type="theme" selectedStickerInfo={() => selectedStickerInfo(theme)} />
          })
        }
      </div>

      {
        isShowCard ? <StickerShowCard toggleShowCard={toggleShowCard} selectedSticker={selectedSticker} /> : ''
      }

    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    stickers: state.sticker.stickers,
    emojis: state.sticker.emojis,
    themes: state.sticker.themes,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getSticker: () => {
      dispatch(getSticker())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Stickers);