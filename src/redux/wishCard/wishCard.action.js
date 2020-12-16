import WishCardActionTypes from './wishCard.type'


export const fetchWishCardStart = () => ({
  type: WishCardActionTypes.FETCH_WISH_CARD_START
})

export const fetchWishCardSuccess = (wishCards) => ({
  type: WishCardActionTypes.FETCH_WISH_CARD_SUCCESS,
  payload: wishCards
})

export const fetchWishCardFailure = (errorMessage) => ({
  type: WishCardActionTypes.FETCH_WISH_CARD_FAILURE,
  payload: errorMessage
})


export const addWishCardStart = (form) => ({
  type: WishCardActionTypes.ADD_WISH_CARD_START,
  payload: form
})

export const addWishCardSuccess = (form) => ({
  type: WishCardActionTypes.ADD_WISH_CARD_SUCCESS,
  payload: form
})

export const addWishCardFailure = (errorMessage) => ({
  type: WishCardActionTypes.ADD_WISH_CARD_FAILURE,
  payload: errorMessage
})

export const getSingleWishCardStart = (id) => ({
  type: WishCardActionTypes.GET_SINGLE_WISH_CARD_START,
  payload: id
})

export const getSingleWishCardSuccess = (form) => ({
  type: WishCardActionTypes.GET_SINGLE_WISH_CARD_SUCCESS,
  payload: form
})


export const deleteWishCardStart = (id) => ({
  type: WishCardActionTypes.DELETE_WISH_CARD_START,
  payload: id
})

export const deleteWishCardSuccess = (id) => ({
  type: WishCardActionTypes.DELETE_WISH_CARD_SUCCESS,
  payload: id
})

export const deleteWishCardFailure = (errorMessage) => ({
  type: WishCardActionTypes.DELETE_WISH_CARD_FAILURE,
  payload: errorMessage
})

export const editWishCardStart = (form) => ({
  type: WishCardActionTypes.EDIT_WISH_CARD_START,
  payload: form
})

export const editWishCardSuccess = (form) => ({
  type: WishCardActionTypes.EDIT_WISH_CARD_SUCCESS,
  payload: form
})

export const editWishCardFailure = (errorMessage) => ({
  type: WishCardActionTypes.EDIT_WISH_CARD_FAILURE,
  payload: errorMessage
})