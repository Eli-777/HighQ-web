import { takeLatest, call, put, all } from 'redux-saga/effects'

import {
  firestore,
  convertPostCardsSnapshotToMap,
  addCollectionAndDocuments,
  deleteDocument,
  editDocument
} from '../../firebase/firebase.utils'
import {
  fetchPostCardsSuccess,
  fetchPostCardsFailure,
  addPostCardSuccess,
  addPostCardFailure,
  deletePostCardSuccess,
  deletePostCardFailure,
  editPostCardSuccess,
  editPostCardFailure,
  getSinglePostCardSuccess
} from './postCard.action'
import PostCardActionTypes from './postCard.type.js'
import { addSuccess } from '../../effects/sweetAlert2.effects'

export function* fetchPostCardsAsync() {
  try {
    const collectionRef = firestore.collection('postCards')
    const snapShot = yield collectionRef.get()
    const firebasePostCards = yield call(convertPostCardsSnapshotToMap, snapShot)
    yield put(fetchPostCardsSuccess(firebasePostCards))

  } catch (error) {
    yield put(fetchPostCardsFailure(error.message))
  }
}

export function* fetchPostCardsStart() {
  yield takeLatest(
    PostCardActionTypes.FETCH_POSTCARDS_START,
    fetchPostCardsAsync
  )
}

export function* addPostCardAsync({ payload: { form, setForm } }) {
  try {
    const time = new Date()
    const stringTime = time.toDateString()
    let mediaIcon
    if (form.media === 'fb') {
      mediaIcon = "FaFacebookF"
    } else if (form.media === 'ig') {
      mediaIcon = "FaInstagram"
    }
    form = {
      ...form,
      createTime: stringTime,
      mediaIcon,
    }
    yield (call(addCollectionAndDocuments, 'postCards', [form]))
    yield put(addPostCardSuccess(form))
    yield addSuccess('貼文')
    setForm({ media: 'default', date: '', photo: '', link: '' })
  } catch (error) {
    yield put(addPostCardFailure(error.message))
  }
}

export function* addPostCardStart() {
  yield takeLatest(
    PostCardActionTypes.ADD_POSTCARD_START,
    addPostCardAsync
  )
}

export function* deletePostCardAsync(action) {
  try {
    yield (call(deleteDocument, 'postCards', action.payload))
    yield put(deletePostCardSuccess(action.payload))
  } catch (error) {
    yield put(deletePostCardFailure(error.message))
  }
}

export function* deletePostCardStart() {
  yield takeLatest(
    PostCardActionTypes.DELETE_POSTCARD_START,
    deletePostCardAsync
  )
}

export function* editPostCardAsync({ payload: { form, history } }) {
  try {
    yield (call(editDocument, 'postCards', form))
    yield put(editPostCardSuccess(form))
    addSuccess('編輯').then(() => {
      history.push(`/admin/main`)
    })
  } catch (error) {
    yield put(editPostCardFailure(error.message))
  }
}

export function* editPostCardStart() {
  yield takeLatest(
    PostCardActionTypes.EDIT_POSTCARD_START,
    editPostCardAsync
  )
}

export function* getSinglePostCardAsync(action) {
  try {
    const collectionRef = firestore.collection('postCards')
    const snapShot = yield collectionRef.get()
    const firebasePostcard = yield call(convertPostCardsSnapshotToMap, snapShot)
    const filteredPostcard = firebasePostcard.filter((Postcard) =>
      Postcard.id === action.payload
    )
    yield put(getSinglePostCardSuccess(filteredPostcard[0]))
  } catch (error) {
    yield put(fetchPostCardsFailure(error.message))
  }
}

export function* getSinglePostcardStart() {
  yield takeLatest(
    PostCardActionTypes.GET_SINGLE_POSTCARD_START,
    getSinglePostCardAsync
  )
}

export function* postCardSagas() {
  yield all([
    call(fetchPostCardsStart),
    call(addPostCardStart),
    call(deletePostCardStart),
    call(editPostCardStart),
    call(getSinglePostcardStart)
  ])
}