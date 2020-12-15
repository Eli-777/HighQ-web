import StickerActionTypes from './sticker.type'


export const fetchStickerStart = () => ({
  type: StickerActionTypes.FETCH_STICKER_START
})

export const fetchStickerSuccess = (stickers) => ({
  type: StickerActionTypes.FETCH_STICKER_SUCCESS,
  payload: stickers
})

export const fetchStickerFailure = (errorMessage) => ({
  type: StickerActionTypes.FETCH_STICKER_FAILURE,
  payload: errorMessage
})


export const getSingleSticker = (id) => ({
  type: StickerActionTypes.GET_SINGLE_STICKER,
  payload: id
})

export const addSticker = (form) => ({
  type: StickerActionTypes.ADD_STICKER,
  payload: form
})

export const deleteSticker = (id) => ({
  type: StickerActionTypes.DELETE_STICKER,
  payload: id
})

export const editSticker = (form) => ({
  type: StickerActionTypes.EDIT_STICKER,
  payload: form
})

