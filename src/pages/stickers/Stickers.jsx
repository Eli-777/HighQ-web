import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import { fetchStickerStart } from '../../redux/sticker/sticker.action'

import StickerCards from '../../components/stickerCards/StickerCards'
import StickerShowCard from '../../components/stickerShowCard/StickerShowCard'



function Stickers({ stickers, fetchStickerStart, isLoading }) {
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
    fetchStickerStart()
  }, [fetchStickerStart])

  
  let onlyStickers = stickers.filter((sticker) => sticker.type === 'sticker') 
  let emojis = stickers.filter((sticker) => sticker.type === 'emoji') 
  let themes = stickers.filter((sticker) => sticker.type === 'theme') 


  return (
    <div className="stickers pageContainer max-width-big-desktop">
      <h1 className="title">貼圖介紹</h1>
      <StickerCards  
        title="貼圖" 
        stickerCards={onlyStickers} 
        selectedStickerInfo={selectedStickerInfo}
        isLoading={isLoading}
      />
      <StickerCards  
        title="表情貼" 
        stickerCards={emojis} 
        selectedStickerInfo={selectedStickerInfo}
        isLoading={isLoading}
      />
      <StickerCards  
        title="主題" 
        stickerCards={themes} 
        selectedStickerInfo={selectedStickerInfo}
        type="theme"
        isLoading={isLoading}
      />

      {
        isShowCard ? <StickerShowCard toggleShowCard={toggleShowCard} selectedSticker={selectedSticker} /> : ''
      }

    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    stickers: state.sticker.stickers,
    isLoading: state.sticker.isLoading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchStickerStart: () => {
      dispatch(fetchStickerStart())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Stickers);