import WishCardActionTypes from './wishCard.type'
import { addFormToWishCards, editWishCard, deleteWishCard } from './wishCard.utils'

const INITIAL_STATE = {
  wishCards: [],
  selectedWishCard: null,
  isLoading: true,
  errorMessage: null
}

const wishCardReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case WishCardActionTypes.FETCH_WISH_CARD_SUCCESS:
      return {
        ...state,
        wishCards: action.payload,
        isLoading: false,
        selectedWishCard: null
      }

    case WishCardActionTypes.ADD_WISH_CARD_SUCCESS:
      return {
        ...state,
        wishCards: addFormToWishCards(action.payload, state.wishCards.length, state.wishCards)
      }

      case WishCardActionTypes.GET_SINGLE_WISH_CARD_START:
        return {
          ...state,
          selectedWishCard: null,
          isLoading: true
        }

    case WishCardActionTypes.GET_SINGLE_WISH_CARD_SUCCESS:
      return {
        ...state,
        selectedWishCard: action.payload,
        isLoading: false
      }

    case WishCardActionTypes.EDIT_WISH_CARD_SUCCESS:
      return {
        ...state,
        wishCards: editWishCard(action.payload, state.wishCards)
      }

    case WishCardActionTypes.DELETE_WISH_CARD_SUCCESS:
      return {
        ...state,
        wishCards: deleteWishCard(action.payload, state.wishCards)
      }

    case WishCardActionTypes.EDIT_WISH_CARD_FAILURE:
    case WishCardActionTypes.DELETE_WISH_CARD_FAILURE:
    case WishCardActionTypes.ADD_WISH_CARD_FAILURE:
    case WishCardActionTypes.FETCH_WISH_CARD_FAILURE:
      return {
        ...state,
        errorMessage: action.payload,
        isLoading: false
      }
    default:
      return state
  }
}

export default wishCardReducer