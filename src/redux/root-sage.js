import { all, call } from 'redux-saga/effects'

import { postCardSagas } from './postCard/postCard.saga'
import { characterSagas } from './character/character.saga'
import { stickerSagas } from './sticker/sticker.saga'
import { wishCardSagas } from './wishCard/wishCard.saga'
import { historySagas } from './history/history.saga'
import { userSagas } from './user/user.saga'

export default function* rootSaga() {
  yield all([
    call(postCardSagas),
    call(characterSagas),
    call(stickerSagas),
    call(wishCardSagas),
    call(historySagas),
    call(userSagas)
  ])
}