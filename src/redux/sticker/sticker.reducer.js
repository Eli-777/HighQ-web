import StickerActionTypes from './sticker.type'
import { fetchSingleSticker, addFormToStickers, editSticker, deleteSticker } from './sticker.utils.js'

const INITIAL_STATE = {
  stickers: [],
  selectedSticker: [],
  isLoading: true,
  errorMessage: null
}

const stickerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case StickerActionTypes.FETCH_STICKER_SUCCESS:
      return {
        ...state,
        stickers: action.payload,
        isLoading: false
      }

    case StickerActionTypes.FETCH_STICKER_FAILURE:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload
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