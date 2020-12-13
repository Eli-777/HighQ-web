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

export const getHistory = () => ({
  type: HistoryActionTypes.GET_HISTORY,
})

export const addHistory = (form) => ({
  type: HistoryActionTypes.ADD_HISTORY,
  payload: form
})

export const getSingleHistory = (id) => ({
  type: HistoryActionTypes.GET_SINGLE_HISTORY,
  payload: id
})


export const deleteHistory = (id) => ({
  type: HistoryActionTypes.DELETE_HISTORY,
  payload: id
})

export const editHistory = (form) => ({
  type: HistoryActionTypes.EDIT_HISTORY,
  payload: form
})