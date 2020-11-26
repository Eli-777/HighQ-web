import WishCardActionTypes from './wishCard.type'
import { addFormToWishCards } from './wishCard.utils'

const INITIAL_STATE = {
  wishCards: []
}

const wishCardReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case WishCardActionTypes.GET_WISH_CARD:
      return {
        ...state,
        wishCards: action.payload
      }
    case WishCardActionTypes.ADD_WISH_CARD:
      return {
        ...state,
        wishCards: addFormToWishCards(action.payload, state.wishCards.length, state.wishCards)
      }
    default:
      return state
  }
}

export default wishCardReducer