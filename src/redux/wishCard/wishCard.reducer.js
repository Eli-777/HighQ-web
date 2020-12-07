import WishCardActionTypes from './wishCard.type'
import { addFormToWishCards, fetchSingleWishCard, editWishCard, deleteWishCard } from './wishCard.utils'
import wishCardDummyData from './contact.dummyData'

const INITIAL_STATE = {
  wishCards: wishCardDummyData,
  selectedWishCard: []
}

const wishCardReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case WishCardActionTypes.GET_WISH_CARD:
      return {
        ...state,
      }
    case WishCardActionTypes.ADD_WISH_CARD:
      return {
        ...state,
        wishCards: addFormToWishCards(action.payload, state.wishCards.length, state.wishCards)
      }

    case WishCardActionTypes.GET_SINGLE_WISH_CARD:
      return {
        ...state,
        selectedWishCard: fetchSingleWishCard(action.payload, state.wishCards)
      }

    case WishCardActionTypes.EDIT_WISH_CARD:
      return {
        ...state,
        wishCards: editWishCard(action.payload, state.wishCards)
      }

    case WishCardActionTypes.DELETE_WISH_CARD:
      return {
        ...state,
        wishCards: deleteWishCard(action.payload, state.wishCards)
      }
    default:
      return state
  }
}

export default wishCardReducer