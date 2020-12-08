import HistoryActionTypes from './history.type'
import { addFormToHistory, fetchSingleHistory, editHistory, deleteHistory } from './history.utils'
import historyDummyData from './dummyHistory2'

const INITIAL_STATE = {
  histories: historyDummyData,
  selectedHistory: []
}

const historyReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case HistoryActionTypes.GET_HISTORY:
      return {
        ...state,
      }
    case HistoryActionTypes.ADD_HISTORY:
      return {
        ...state,
        histories: addFormToHistory(action.payload, state.histories.length, state.histories)
      }

    case HistoryActionTypes.GET_SINGLE_HISTORY:
      return {
        ...state,
        selectedHistory: fetchSingleHistory(action.payload, state.histories)
      }

    case HistoryActionTypes.EDIT_HISTORY:
      return {
        ...state,
        histories: editHistory(action.payload, state.histories)
      }

    case HistoryActionTypes.DELETE_HISTORY:
      return {
        ...state,
        histories: deleteHistory(action.payload, state.histories)
      }
    default:
      return state
  }
}

export default historyReducer