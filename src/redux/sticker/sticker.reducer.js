import stickerDummyData from './dummyStickers'
import StickerActionTypes from './sticker.type'
import { fetchSingleSticker, addFormToStickers, editSticker, deleteSticker } from './sticker.utils.js'

const INITIAL_STATE = {
  stickers: stickerDummyData,
  selectedSticker: []
}

const stickerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case StickerActionTypes.GET_STICKER:
      return {
        ...state,
      }

    case StickerActionTypes.GET_SINGLE_STICKER:
      return {
        ...state,
        selectedSticker: fetchSingleSticker(action.payload, state.stickers)
      }

    case StickerActionTypes.ADD_STICKER:
      return {
        ...state,
        stickers: addFormToStickers(action.payload, state.stickers.length, state.stickers),

      }

    case StickerActionTypes.EDIT_STICKER:
      return {
        ...state,
        stickers: editSticker(action.payload, state.stickers)
      }

    case StickerActionTypes.DELETE_STICKER:
      return {
        ...state,
        stickers: deleteSticker(action.payload, state.stickers)
      }
    default:
      return state
  }
}

export default stickerReducer