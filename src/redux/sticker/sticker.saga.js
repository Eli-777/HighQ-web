import { takeLatest, call, put, all } from 'redux-saga/effects'
import {
  firestore,
  convertStickersSnapshotToMap,
  addCollectionAndDocuments,
  deleteDocument,
  editDocument
} from '../../firebase/firebase.utils'
import {
  fetchStickerSuccess,
  fetchStickerFailure,
  addStickerSuccess,
  addStickerFailure,
  deleteStickerSuccess,
  deleteStickerFailure,
  editStickerSuccess,
  editStickerFailure,
  getSingleStickerSuccess,
} from './sticker.action'
import StickerActionTypes from './sticker.type.js'
import { addSuccess, deleteSuccess } from '../../effects/sweetAlert2.effects'

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

export function* addStickerAsync({ payload: { form, setForm } }) {
  try {
    const time = new Date()
    const stringTime = time.toDateString()
    form = {
      ...form,
      createTime: stringTime,
    }
    yield call(addCollectionAndDocuments, 'stickers', [form])
    yield put(addStickerSuccess(form))
    yield addSuccess('貼圖')
    setForm({
      type: 'default',
      name: '',
      price: '',
      image: { single: '', together: '' },
      link: '',
      description: ''
    })
  } catch (error) {
    yield put(addStickerFailure(error.message))
  }
}

export function* addStickerStart() {
  yield takeLatest(
    StickerActionTypes.ADD_STICKER_START,
    addStickerAsync
  )
}

export function* deleteHistoryAsync(action) {
  try {
    yield (call(deleteDocument, 'stickers', action.payload))
    yield put(deleteStickerSuccess(action.payload))
    yield deleteSuccess()
  } catch (error) {
    yield put(deleteStickerFailure(error.message))
  }
}

export function* deleteStickerStart() {
  yield takeLatest(
    StickerActionTypes.DELETE_STICKER_START,
    deleteHistoryAsync
  )
}

export function* editStickerAsync({ payload: { form, history } }) {
  try {
    yield (call(editDocument, 'stickers', form))
    yield put(editStickerSuccess(form))
    addSuccess('編輯').then(() => {
      history.goBack()
    })
  } catch (error) {
    yield put(editStickerFailure(error.message))
  }
}

export function* editStickerStart() {
  yield takeLatest(
    StickerActionTypes.EDIT_STICKER_START,
    editStickerAsync
  )
}

export function* getSingleStickerAsync(action) {
  try {
    const collectionRef = firestore.collection('stickers')
    const snapShot = yield collectionRef.get()
    const firebaseSticker = yield call(convertStickersSnapshotToMap, snapShot)
    const filteredSticker = firebaseSticker.filter((sticker) =>
      sticker.id === action.payload
    )
    yield put(getSingleStickerSuccess(filteredSticker[0]))
  } catch (error) {
    yield put(fetchStickerFailure(error.message))
  }
}

export function* getSingleStickerStart() {
  yield takeLatest(
    StickerActionTypes.GET_SINGLE_STICKER_START,
    getSingleStickerAsync
  )
}

export function* stickerSagas() {
  yield all([
    call(fetchStickerStart),
    call(addStickerStart),
    call(deleteStickerStart),
    call(editStickerStart),
    call(getSingleStickerStart)
  ])
}