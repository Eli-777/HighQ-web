import { takeLatest, call, put, all } from 'redux-saga/effects'
import { firestore, convertStickersSnapshotToMap } from '../../firebase/firebase.utils'
import { fetchStickerSuccess, fetchStickerFailure } from './sticker.action'
import StickerActionTypes from './sticker.type.js'

export function* fetchStickerAsync() {
  try {
    const collectionRef = firestore.collection('stickers')
    const snapShot = yield collectionRef.get()
    const firebaseSticker = yield call(convertStickersSnapshotToMap, snapShot)
    yield put(fetchStickerSuccess(firebaseSticker))
  } catch (error) {
    yield put(fetchStickerFailure(error.message))
  }
}

export function* fetchStickerStart() {
  yield takeLatest(
    StickerActionTypes.FETCH_STICKER_START,
    fetchStickerAsync
  )
}

export function* stickerSagas() {
  yield all([
    call(fetchStickerStart)
  ])
}