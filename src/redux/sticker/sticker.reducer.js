
import StickerActionTypes from './sticker.type'

const INITIAL_STATE = {
  stickers: [],
  emojis: [],
  themes: [],
}

const stickerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case StickerActionTypes.GET_STICKER:
      return {
        ...state,
        stickers: action.payload.stickers,
        emojis: action.payload.emojis,
        themes: action.payload.themes
      }
    default:
      return state
  }
}

export default stickerReducer