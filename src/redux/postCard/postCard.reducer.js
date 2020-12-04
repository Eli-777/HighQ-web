import PostCardActionTypes from './postCard.type'
import postCardDummyData from './postCard.dummyData'

import { addFormToPostCards, deletePostCard, fetchSinglePostCard, editPostCard } from './postCard.utils'


const INITIAL_STATE = {
  cards: postCardDummyData.cards,
  selectedCard: []
}


const postCardReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PostCardActionTypes.GET_POSTCARDS:
      return {
        ...state,
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