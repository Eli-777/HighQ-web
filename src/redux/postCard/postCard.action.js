import PostCardActionTypes from './postCard.type'
import postCardDummyData from './postCard.dummyData'

export const setPostCards = () => ({
  type: PostCardActionTypes.SET_POSTCARDS,
  payload: postCardDummyData.cards
})