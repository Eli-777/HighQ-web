import StickerActionTypes from './sticker.type'
import stickerDummyData from './dummyStickers'

export const getSticker = () => ({
  type: StickerActionTypes.GET_STICKER,
  payload: stickerDummyData
})

