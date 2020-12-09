import { combineReducers } from 'redux'

import postCardReducer from './postCard/postCard.reducer'
import historyReducer from './history/history.reducer'
import characterReducer from './character/character.reducer'
import stickerReducer from './sticker/sticker.reducer'
import wishCardReducer from './wishCard/wishCard.reducer'
import userReducer from './user/user.reducer'

export default combineReducers({
  postCard: postCardReducer,
  history: historyReducer,
  character: characterReducer,
  sticker: stickerReducer,
  wishCard: wishCardReducer,
  user: userReducer
})