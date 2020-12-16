import HistoryActionTypes from './history.type'

export const fetchHistoryStart = () => ({
  type: HistoryActionTypes.FETCH_HISTORY_START
})

export const fetchHistorySuccess = (histories) => ({
  type: HistoryActionTypes.FETCH_HISTORY_SUCCESS,
  payload: histories
})

export const fetchHistoryFailure = (errorMessage) => ({
  type: HistoryActionTypes.FETCH_HISTORY_FAILURE,
  payload: errorMessage
})

export const getHistoryStart = () => ({
  type: HistoryActionTypes.GET_HISTORY_START,
})

export const addHistoryStart = (form) => ({
  type: HistoryActionTypes.ADD_HISTORY_START,
  payload: form
})

export const addHistorySuccess = (form) => ({
  type: HistoryActionTypes.ADD_HISTORY_SUCCESS,
  payload: form
})

export const addHistoryFailure = (errorMessage) => ({
  type: HistoryActionTypes.ADD_HISTORY_FAILURE,
  payload: errorMessage
})

export const getSingleHistoryStart = (id) => ({
  type: HistoryActionTypes.GET_SINGLE_HISTORY_START,
  payload: id
})

export const getSingleHistorySuccess = (form) => ({
  type: HistoryActionTypes.GET_SINGLE_HISTORY_SUCCESS,
  payload: form
})


export const deleteHistoryStart = (id) => ({
  type: HistoryActionTypes.DELETE_HISTORY_START,
  payload: id
})

export const deleteHistorySuccess = (id) => ({
  type: HistoryActionTypes.DELETE_HISTORY_SUCCESS,
  payload: id
})

export const deleteHistoryFailure = (errorMessage) => ({
  type: HistoryActionTypes.DELETE_HISTORY_FAILURE,
  payload: errorMessage
})

export const editHistoryStart = (form) => ({
  type: HistoryActionTypes.EDIT_HISTORY_START,
  payload: form
})

export const editHistorySuccess = (form) => ({
  type: HistoryActionTypes.EDIT_HISTORY_SUCCESS,
  payload: form
})

export const editHistoryFailure = (errorMessage) => ({
  type: HistoryActionTypes.EDIT_HISTORY_FAILURE,
  payload: errorMessage
})