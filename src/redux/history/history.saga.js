import { takeLatest, put, call, all } from 'redux-saga/effects'
import {
  firestore,
  convertHistoriesSnapshotToMap,
  convertAdminHistoriesSnapshotToMap
} from '../../firebase/firebase.utils'
import { fetchHistorySuccess, fetchHistoryFailure } from './history.action'
import HistoryActionTypes from './history.type'

export function* fetchHistoryAsync() {
  try {
    const collectionRef = firestore.collection('histories')
    const snapShot = yield collectionRef.get()
    const firebaseHistory = yield call(convertHistoriesSnapshotToMap, snapShot)
    yield put(fetchHistorySuccess(firebaseHistory))
  } catch (error) {
    put(fetchHistoryFailure(error.message))
  }
}

export function* fetchHistoryStart() {
  yield takeLatest(
    HistoryActionTypes.FETCH_HISTORY_START,
    fetchHistoryAsync
  )
}

export function* getAdminHistoryAsync() {
  try {
    const collectionRef = firestore.collection('histories')
    const snapShot = yield collectionRef.get()
    const firebaseHistory = yield call(convertAdminHistoriesSnapshotToMap, snapShot)
    yield put(fetchHistorySuccess(firebaseHistory))
  } catch (error) {
    put(fetchHistoryFailure(error.message))
  }
}

export function* getAdminHistoryStart() {
  yield takeLatest(
    HistoryActionTypes.GET_HISTORY_START,
    getAdminHistoryAsync
  )
}

export function* historySagas() {
  yield all([
    call(fetchHistoryStart),
    call(getAdminHistoryStart)
  ])
}