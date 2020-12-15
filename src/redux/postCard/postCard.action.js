import PostCardActionTypes from './postCard.type'


export const fetchPostCardsStart = () => ({
  type: PostCardActionTypes.FETCH_POSTCARDS_START,
})

export const fetchPostCardsSuccess = (PostCardsMap) => ({
  type: PostCardActionTypes.FETCH_POSTCARDS_SUCCESS,
  payload: PostCardsMap
})

export const fetchPostCardsFailure = (errorMessage) => ({
  type: PostCardActionTypes.FETCH_POSTCARDS_FAILURE,
  payload: errorMessage
})

export const getSinglePostCards = (id) => ({
  type: PostCardActionTypes.GET_SINGLE_POSTCARD,
  payload: id
})

export const addPostCards = (form) => ({
  type: PostCardActionTypes.ADD_POSTCARDS,
  payload: form
})

export const deletePostCard = (id) => ({
  type: PostCardActionTypes.DELETE_POSTCARDS,
  payload: id
})

export const editPostCard = (form) => ({
  type: PostCardActionTypes.EDIT_POSTCARD,
  payload: form
})