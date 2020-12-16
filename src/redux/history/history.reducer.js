import HistoryActionTypes from './history.type'
import { addFormToHistory, editHistory, deleteHistory } from './history.utils'

const INITIAL_STATE = {
  histories: [],
  selectedHistory: [],
  isLoading: true,
  errorMessage: null
}

const historyReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case HistoryActionTypes.FETCH_HISTORY_SUCCESS:
      return {
        ...state,
        histories: action.payload,
        isLoading: false
      }

      case HistoryActionTypes.ADD_HISTORY_SUCCESS:
        return {
          ...state,
          histories: addFormToHistory(action.payload, state.histories.length, state.histories)
        }
  
      case HistoryActionTypes.GET_SINGLE_HISTORY_START:
        return {
          ...state,
          selectedHistory: null,
          isLoading: true
        }
  
      case HistoryActionTypes.GET_SINGLE_HISTORY_SUCCESS:
        return {
          ...state,
          selectedHistory: action.payload,
          isLoading: false
        }
  
      case HistoryActionTypes.EDIT_HISTORY_SUCCESS:
        return {
          ...state,
          histories: editHistory(action.payload, state.histories)
        }
  
      case HistoryActionTypes.DELETE_HISTORY_SUCCESS:
        return {
          ...state,
          histories: deleteHistory(action.payload, state.histories)
        }
  
      case HistoryActionTypes.EDIT_HISTORY_FAILURE:
      case HistoryActionTypes.DELETE_HISTORY_FAILURE:
      case HistoryActionTypes.ADD_HISTORY_FAILURE:
      case HistoryActionTypes.FETCH_HISTORY_FAILURE:
        return {
          ...state,
          errorMessage: action.payload,
          isLoading: false
        }
    default:
      return state
  }
}

export default historyReducer