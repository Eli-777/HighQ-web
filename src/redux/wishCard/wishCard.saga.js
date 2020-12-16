import { takeLatest, call, put, all } from 'redux-saga/effects'
import {
  firestore,
  convertWishCardsSnapshotToMap,
  addCollectionAndDocuments,
  deleteDocument,
  editDocument
} from '../../firebase/firebase.utils'
import {
  fetchWishCardSuccess,
  fetchWishCardFailure,
  addWishCardSuccess,
  addWishCardFailure,
  deleteWishCardSuccess,
  deleteWishCardFailure,
  editWishCardSuccess,
  editWishCardFailure,
  getSingleWishCardSuccess
} from './wishCard.action'
import WishCardActionTypes from './wishCard.type'
import { addSuccess } from '../../effects/sweetAlert2.effects'

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

export function* addWishCardAsync({ payload: { form, setForm } }) {
  try {
    const time = new Date()
    const stringTime = time.toDateString()
    form = {
      ...form,
      createTime: stringTime
    }
    yield (call(addCollectionAndDocuments, 'wishCards', [form]))
    yield put(addWishCardSuccess(form))
    yield addSuccess('留言')
    setForm({ name: '', email: '', isPublic: 'true', text: '', createTime: '' })
  } catch (error) {
    yield put(addWishCardFailure(error.message))
  }
}

export function* addWishCardStart() {
  yield takeLatest(
    WishCardActionTypes.ADD_WISH_CARD_START,
    addWishCardAsync
  )
}

export function* deleteWishCardAsync(action) {
  try {
    yield (call(deleteDocument, 'wishCards', action.payload))
    yield put(deleteWishCardSuccess(action.payload))
  } catch (error) {
    yield put(deleteWishCardFailure(error.message))
  }
}

export function* deleteWishCardStart() {
  yield takeLatest(
    WishCardActionTypes.DELETE_WISH_CARD_START,
    deleteWishCardAsync
  )
}

export function* editWishCardAsync({ payload: { form, history } }) {
  try {
    yield (call(editDocument, 'wishCards', form))
    yield put(editWishCardSuccess(form))
    addSuccess('編輯').then(() => {
      history.push(`/admin/wishCard`)
    })
  } catch (error) {
    yield put(editWishCardFailure(error.message))
  }
}

export function* editWishCardStart() {
  yield takeLatest(
    WishCardActionTypes.EDIT_WISH_CARD_START,
    editWishCardAsync
  )
}

export function* getSingleWishCardAsync(action) {
  try {
    const collectionRef = firestore.collection('wishCards')
    const snapShot = yield collectionRef.get()
    const firebaseWishCard = yield call(convertWishCardsSnapshotToMap, snapShot)
    const filteredWishCard = firebaseWishCard.filter((wishCard) =>
      wishCard.id === action.payload
    )
    yield put(getSingleWishCardSuccess(filteredWishCard[0]))
  } catch (error) {
    yield put(fetchWishCardFailure(error.message))
  }
}

export function* getSingleWishCardStart() {
  yield takeLatest(
    WishCardActionTypes.GET_SINGLE_WISH_CARD_START,
    getSingleWishCardAsync
  )
}

export function* wishCardSagas() {
  yield all([
    call(fetchWishCardStart),
    call(addWishCardStart),
    call(deleteWishCardStart),
    call(editWishCardStart),
    call(getSingleWishCardStart)
  ])
}