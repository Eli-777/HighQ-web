import HistoryActionTypes from './history.type'

const INITIAL_STATE = {
  histories: []
}

const historyReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case HistoryActionTypes.GET_HISTORY:
      return {
        ...state,
        histories: action.payload
      }
      default:
        return state
  }
}

export default historyReducer