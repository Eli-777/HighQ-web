import { combineReducers } from 'redux'

import postCardReducer from './postCard/postCard.reducer'

export default combineReducers({
  postCards: postCardReducer
})