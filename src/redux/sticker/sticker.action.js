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


export const addStickerStart = (form) => ({
  type: StickerActionTypes.ADD_STICKER_START,
  payload: form
})

export const addStickerSuccess = (form) => ({
  type: StickerActionTypes.ADD_STICKER_SUCCESS,
  payload: form
})

export const addStickerFailure = (errorMessage) => ({
  type: StickerActionTypes.ADD_STICKER_FAILURE,
  payload: errorMessage
})

export const getSingleStickerStart = (id) => ({
  type: StickerActionTypes.GET_SINGLE_STICKER_START,
  payload: id
})

export const getSingleStickerSuccess = (form) => ({
  type: StickerActionTypes.GET_SINGLE_STICKER_SUCCESS,
  payload: form
})


export const deleteStickerStart = (id) => ({
  type: StickerActionTypes.DELETE_STICKER_START,
  payload: id
})

export const deleteStickerSuccess = (id) => ({
  type: StickerActionTypes.DELETE_STICKER_SUCCESS,
  payload: id
})

export const deleteStickerFailure = (errorMessage) => ({
  type: StickerActionTypes.DELETE_STICKER_FAILURE,
  payload: errorMessage
})

export const editStickerStart = (form) => ({
  type: StickerActionTypes.EDIT_STICKER_START,
  payload: form
})

export const editStickerSuccess = (form) => ({
  type: StickerActionTypes.EDIT_STICKER_SUCCESS,
  payload: form
})

export const editStickerFailure = (errorMessage) => ({
  type: StickerActionTypes.EDIT_STICKER_FAILURE,
  payload: errorMessage
})

