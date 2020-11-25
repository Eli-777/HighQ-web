
import PostCardActionTypes from './postCard.type'


const INITIAL_STATE = {
  cards: []
}


const postCardReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PostCardActionTypes.SET_POSTCARDS:
      return {
        ...state,
        cards: action.payload
      }

    default:
      return state
  }
}

export default postCardReducer