import HistoryActionTypes from './history.type'
import historyDummyData from './dummyHistory'

export const getHistory = () => ({
  type: HistoryActionTypes.GET_HISTORY,
  payload: historyDummyData
})