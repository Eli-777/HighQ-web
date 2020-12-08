import HistoryActionTypes from './history.type'

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