import { takeLatest, put, call, all } from 'redux-saga/effects'
import {
  firestore,
  convertHistoriesSnapshotToMap,
  convertAdminHistoriesSnapshotToMap,
  addCollectionAndDocuments,
  deleteDocument,
  editDocument
} from '../../firebase/firebase.utils'
import {
  fetchHistorySuccess,
  fetchHistoryFailure,
  addHistorySuccess,
  addHistoryFailure,
  deleteHistorySuccess,
  deleteHistoryFailure,
  editHistorySuccess,
  editHistoryFailure,
  getSingleHistorySuccess
} from './history.action'
import HistoryActionTypes from './history.type'
import { addSuccess, deleteSuccess } from '../../effects/sweetAlert2.effects'

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

export function* addHistoryAsync({ payload: { form, setForm } }) {
  try {
    const time = new Date()
    const stringTime = time.toDateString()
    form = {
      ...form,
      createTime: stringTime,
    }
    yield (call(addCollectionAndDocuments, 'histories', [form]))
    yield put(addHistorySuccess(form))
    yield addSuccess('歷史')
    setForm({
      type: 'default',
      date: '',
      img: '',
      desc: ''
    })
  } catch (error) {
    yield put(addHistoryFailure(error.message))
  }
}

export function* addHistoryStart() {
  yield takeLatest(
    HistoryActionTypes.ADD_HISTORY_START,
    addHistoryAsync
  )
}

export function* deleteHistoryAsync(action) {
  try {
    yield (call(deleteDocument, 'histories', action.payload))
    yield put(deleteHistorySuccess(action.payload))
    yield deleteSuccess()
  } catch (error) {
    yield put(deleteHistoryFailure(error.message))
  }
}

export function* deleteHistoryStart() {
  yield takeLatest(
    HistoryActionTypes.DELETE_HISTORY_START,
    deleteHistoryAsync
  )
}

export function* editHistoryAsync({ payload: { form, history } }) {
  try {
    yield (call(editDocument, 'histories', form))
    yield put(editHistorySuccess(form))
    addSuccess('編輯').then(() => {
      history.push(`/admin/history`)
    })
  } catch (error) {
    yield put(editHistoryFailure(error.message))
  }
}

export function* editHistoryStart() {
  yield takeLatest(
    HistoryActionTypes.EDIT_HISTORY_START,
    editHistoryAsync
  )
}

export function* getSingleHistoryAsync(action) {
  try {
    const collectionRef = firestore.collection('histories')
    const snapShot = yield collectionRef.get()
    const firebaseHistory = yield call(convertAdminHistoriesSnapshotToMap, snapShot)
    const filteredHistory = firebaseHistory.filter((history) =>
      history.id === action.payload
    )
    yield put(getSingleHistorySuccess(filteredHistory[0]))
  } catch (error) {
    yield put(fetchHistoryFailure(error.message))
  }
}

export function* getSingleHistoryStart() {
  yield takeLatest(
    HistoryActionTypes.GET_SINGLE_HISTORY_START,
    getSingleHistoryAsync
  )
}

export function* historySagas() {
  yield all([
    call(fetchHistoryStart),
    call(getAdminHistoryStart),
    call(addHistoryStart),
    call(deleteHistoryStart),
    call(editHistoryStart),
    call(getSingleHistoryStart)
  ])
}