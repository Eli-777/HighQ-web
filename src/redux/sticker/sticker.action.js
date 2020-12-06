import StickerActionTypes from './sticker.type'


export const getSticker = () => ({
  type: StickerActionTypes.GET_STICKER,
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

