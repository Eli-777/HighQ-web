import HistoryActionTypes from './history.type'
import { addFormToHistory, fetchSingleHistory, editHistory, deleteHistory } from './history.utils'

const INITIAL_STATE = {
  histories: [],
  selectedHistory: [],
  isLoading: true,
  errorMessage: null
}

const historyReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case HistoryActionTypes.FETCH_HISTORY_START:
      return {
        ...state
      }

    case HistoryActionTypes.FETCH_HISTORY_SUCCESS:
      return {
        ...state,
        histories: action.payload,
        isLoading: false
      }

    case HistoryActionTypes.FETCH_HISTORY_FAILURE:
      return {
        ...state,
        errorMessage: action.payload,
        isLoading: false
      }
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