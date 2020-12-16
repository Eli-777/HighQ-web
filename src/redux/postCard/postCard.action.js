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


export const addPostCardStart = (form) => ({
  type: PostCardActionTypes.ADD_POSTCARD_START,
  payload: form
})

export const addPostCardSuccess = (form) => ({
  type: PostCardActionTypes.ADD_POSTCARD_SUCCESS,
  payload: form
})

export const addPostCardFailure = (errorMessage) => ({
  type: PostCardActionTypes.ADD_POSTCARD_FAILURE,
  payload: errorMessage
})

export const getSinglePostCardStart = (id) => ({
  type: PostCardActionTypes.GET_SINGLE_POSTCARD_START,
  payload: id
})

export const getSinglePostCardSuccess = (form) => ({
  type: PostCardActionTypes.GET_SINGLE_POSTCARD_SUCCESS,
  payload: form
})


export const deletePostCardStart = (id) => ({
  type: PostCardActionTypes.DELETE_POSTCARD_START,
  payload: id
})

export const deletePostCardSuccess = (id) => ({
  type: PostCardActionTypes.DELETE_POSTCARD_SUCCESS,
  payload: id
})

export const deletePostCardFailure = (errorMessage) => ({
  type: PostCardActionTypes.DELETE_POSTCARD_FAILURE,
  payload: errorMessage
})

export const editPostCardStart = (form) => ({
  type: PostCardActionTypes.EDIT_POSTCARD_START,
  payload: form
})

export const editPostCardSuccess = (form) => ({
  type: PostCardActionTypes.EDIT_POSTCARD_SUCCESS,
  payload: form
})

export const editPostCardFailure = (errorMessage) => ({
  type: PostCardActionTypes.EDIT_POSTCARD_FAILURE,
  payload: errorMessage
})