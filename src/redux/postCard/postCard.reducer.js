import PostCardActionTypes from './postCard.type'

import { addFormToPostCards, deletePostCard, fetchSinglePostCard, editPostCard } from './postCard.utils'


const INITIAL_STATE = {
  cards: [],
  selectedCard: [],
  isLoading: true,
  errorMessage: null
}


const postCardReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PostCardActionTypes.UPDATE_POSTCARDS:
      return {
        ...state,
        cards: action.payload,
        isLoading: false
      }

    case PostCardActionTypes.FETCH_POSTCARDS_START:
      return {
        ...state,
      }
    case PostCardActionTypes.FETCH_POSTCARDS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        cards: action.payload
      }
    case PostCardActionTypes.FETCH_POSTCARDS_FAILURE:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload
      }

    case PostCardActionTypes.GET_SINGLE_POSTCARD:
      return {
        ...state,
        selectedCard: fetchSinglePostCard(action.payload, state.cards)
      }

    case PostCardActionTypes.ADD_POSTCARDS:
      return {
        ...state,
        cards: addFormToPostCards(action.payload, state.cards.length, state.cards),

      }

    case PostCardActionTypes.EDIT_POSTCARD:
      return {
        ...state,
        cards: editPostCard(action.payload, state.cards)
      }

    case PostCardActionTypes.DELETE_POSTCARDS:
      return {
        ...state,
        cards: deletePostCard(action.payload, state.cards)
      }
    default:
      return state
  }
}

export default postCardReducer