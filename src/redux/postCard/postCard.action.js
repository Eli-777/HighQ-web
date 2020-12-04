import PostCardActionTypes from './postCard.type'

export const getPostCards = () => ({
  type: PostCardActionTypes.GET_POSTCARDS,
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