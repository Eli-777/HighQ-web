import { takeLatest, call, put, all } from 'redux-saga/effects'
import { firestore, convertWishCardsSnapshotToMap } from '../../firebase/firebase.utils'
import { fetchWishCardSuccess, fetchWishCardFailure } from './wishCard.action'
import WishCardActionTypes from './wishCard.type'

export function* fetchWishCardAsync() {
  try {
    const collectionRef = firestore.collection('wishCards')
    const snapShot = yield collectionRef.get()
    const firebaseWishCard = yield call(convertWishCardsSnapshotToMap, snapShot)
    yield put(fetchWishCardSuccess(firebaseWishCard))
  } catch (error) {
    yield put(fetchWishCardFailure(error.message))
  }
}

export function* fetchWishCardStart() {
  yield takeLatest(
    WishCardActionTypes.FETCH_WISH_CARD_START,
    fetchWishCardAsync
  )
}

export function* wishCardSagas() {
  yield all([
    call(fetchWishCardStart)
  ])
}