import WishCardActionTypes from './wishCard.type'
import wishCardDummyData from './contact.dummyData'

export const getWishCard = () => ({
  type: WishCardActionTypes.GET_WISH_CARD,
  payload: wishCardDummyData
})

export const addWishCard = (form) => ({
  type: WishCardActionTypes.ADD_WISH_CARD,
  payload: form
})