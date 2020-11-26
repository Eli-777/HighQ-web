import PostCardActionTypes from './postCard.type'
import postCardDummyData from './postCard.dummyData'

export const getPostCards = () => ({
  type: PostCardActionTypes.GET_POSTCARDS,
  payload: postCardDummyData.cards
})