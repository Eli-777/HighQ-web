import WishCardActionTypes from './wishCard.type'
import { addFormToWishCards, fetchSingleWishCard, editWishCard, deleteWishCard } from './wishCard.utils'

const INITIAL_STATE = {
  wishCards: [],
  selectedWishCard: [],
  isLoading: true,
  errorMessage: null
}

const wishCardReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case WishCardActionTypes.FETCH_WISH_CARD_START:
      return {
        ...state
      }

    case WishCardActionTypes.FETCH_WISH_CARD_SUCCESS:
      return {
        ...state,
        wishCards: action.payload,
        isLoading: false
      }

    case WishCardActionTypes.FETCH_WISH_CARD_FAILURE:
      return {
        ...state,
        errorMessage: action.payload,
        isLoading: false
      }
    
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