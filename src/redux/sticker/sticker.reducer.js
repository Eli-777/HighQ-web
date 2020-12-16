import StickerActionTypes from './sticker.type'
import { addFormToStickers, editSticker, deleteSticker } from './sticker.utils.js'

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

    case StickerActionTypes.ADD_STICKER_SUCCESS:
      return {
        ...state,
        stickers: addFormToStickers(action.payload, state.stickers.length, state.stickers)
      }

    case StickerActionTypes.GET_SINGLE_STICKER_START:
      return {
        ...state,
        selectedSticker: null,
        isLoading: true
      }

    case StickerActionTypes.GET_SINGLE_STICKER_SUCCESS:
      return {
        ...state,
        selectedSticker: action.payload,
        isLoading: false
      }

    case StickerActionTypes.EDIT_STICKER_SUCCESS:
      return {
        ...state,
        stickers: editSticker(action.payload, state.stickers)
      }

    case StickerActionTypes.DELETE_STICKER_SUCCESS:
      return {
        ...state,
        stickers: deleteSticker(action.payload, state.stickers)
      }

    case StickerActionTypes.EDIT_STICKER_FAILURE:
    case StickerActionTypes.DELETE_STICKER_FAILURE:
    case StickerActionTypes.ADD_STICKER_FAILURE:
    case StickerActionTypes.FETCH_STICKER_FAILURE:
      return {
        ...state,
        errorMessage: action.payload,
        isLoading: false
      }
    default:
      return state
  }
}

export default stickerReducer