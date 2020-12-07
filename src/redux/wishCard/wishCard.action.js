import WishCardActionTypes from './wishCard.type'

export const getWishCard = () => ({
  type: WishCardActionTypes.GET_WISH_CARD,
})

export const addWishCard = (form) => ({
  type: WishCardActionTypes.ADD_WISH_CARD,
  payload: form
})

export const getSingleWishCard = (id) => ({
  type: WishCardActionTypes.GET_SINGLE_WISH_CARD,
  payload: id
})


export const deleteWishCard = (id) => ({
  type: WishCardActionTypes.DELETE_WISH_CARD,
  payload: id
})

export const editWishCard = (form) => ({
  type: WishCardActionTypes.EDIT_WISH_CARD,
  payload: form
})