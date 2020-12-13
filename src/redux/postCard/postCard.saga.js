import { takeLatest ,call, put, all} from 'redux-saga/effects'

import { firestore, convertPostCardsSnapshotToMap } from '../../firebase/firebase.utils'
import { fetchPostCardsSuccess, fetchPostCardsFailure } from './postCard.action'
import PostCardActionTypes from './postCard.type.js'

export function* fetchPostCardsAsync() {
  try {
    const collectionRef = firestore.collection('postCards')
    const snapShot = yield collectionRef.get()
    const firebasePostCards = yield call(convertPostCardsSnapshotToMap,snapShot)
    yield put(fetchPostCardsSuccess(firebasePostCards))

  } catch(error) {
    yield put(fetchPostCardsFailure(error.message))
  }
}

export function* fetchPostCardsStart() {
  yield takeLatest(
    PostCardActionTypes.FETCH_POSTCARDS_START,
    fetchPostCardsAsync
  )
}

export function* postCardSagas() {
  yield all([
    call(fetchPostCardsStart)
  ])
}