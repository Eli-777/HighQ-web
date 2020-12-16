import PostCardActionTypes from './postCard.type'

import { addFormToPostCards, deletePostCard, editPostCard } from './postCard.utils'


const INITIAL_STATE = {
  cards: [],
  selectedCard: [],
  isLoading: true,
  errorMessage: null
}


const postCardReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PostCardActionTypes.FETCH_POSTCARDS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        cards: action.payload
      }

    case PostCardActionTypes.ADD_POSTCARD_SUCCESS:
      return {
        ...state,
        cards: addFormToPostCards(action.payload, state.cards.length, state.cards)
      }

    case PostCardActionTypes.GET_SINGLE_POSTCARD_START:
      return {
        ...state,
        selectedCard: null,
        isLoading: true
      }

    case PostCardActionTypes.GET_SINGLE_POSTCARD_SUCCESS:
      return {
        ...state,
        selectedCard: action.payload,
        isLoading: false
      }

    case PostCardActionTypes.EDIT_POSTCARD_SUCCESS:
      return {
        ...state,
        cards: editPostCard(action.payload, state.cards)
      }

    case PostCardActionTypes.DELETE_POSTCARD_SUCCESS:
      return {
        ...state,
        cards: deletePostCard(action.payload, state.cards)
      }

    case PostCardActionTypes.EDIT_POSTCARD_FAILURE:
    case PostCardActionTypes.DELETE_POSTCARD_FAILURE:
    case PostCardActionTypes.ADD_POSTCARD_FAILURE:
    case PostCardActionTypes.FETCH_POSTCARDS_FAILURE:
      return {
        ...state,
        errorMessage: action.payload,
        isLoading: false
      }
    default:
      return state
  }
}

export default postCardReducer