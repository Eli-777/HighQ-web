import { takeLatest, call, put, all } from 'redux-saga/effects'
import { 
  firestore, 
  convertCharactersSnapshotToMap,
  addCollectionAndDocuments,
  deleteDocument,
  editDocument
} from '../../firebase/firebase.utils'
import { 
  fetchCharacterSuccess, 
  fetchCharacterFailure,
  addCharacterSuccess,
  addCharacterFailure,
  deleteCharacterSuccess,
  deleteCharacterFailure,
  editCharacterSuccess,
  editCharacterFailure,
  getSingleCharacterSuccess, 
} from './character.action'
import CharacterActionTypes from './character.type'
import { addSuccess } from '../../effects/sweetAlert2.effects'

export function* fetchCharacterAsync() {
  try {
    const collectionRef = firestore.collection('characters')
    const snapShot = yield collectionRef.get()
    const firebaseCharacters = yield call(convertCharactersSnapshotToMap, snapShot)
    yield put(fetchCharacterSuccess(firebaseCharacters))
  } catch (error) {
    yield put(fetchCharacterFailure(error.message))
  }
}

export function* fetchCharactersStart() {
  yield takeLatest(
    CharacterActionTypes.FETCH_CHARACTER_START,
    fetchCharacterAsync
  )
}

export function* addCharacterAsync({ payload: { form, setForm } }) {
  try {
    const time = new Date()
    const stringTime = time.toDateString()
    form = {
      ...form,
      createTime: stringTime,
    }
    yield (call(addCollectionAndDocuments, 'characters', [form]))
    yield put(addCharacterSuccess(form))
    yield addSuccess('角色')
    setForm({ name: '', characterImg: '', intro: '' })
  } catch (error) {
    yield put(addCharacterFailure(error.message))
  }
}

export function* addCharacterStart() {
  yield takeLatest(
    CharacterActionTypes.ADD_CHARACTER_START,
    addCharacterAsync
  )
}

export function* deleteHistoryAsync(action) {
  try {
    yield (call(deleteDocument, 'characters', action.payload))
    yield put(deleteCharacterSuccess(action.payload))
  } catch (error) {
    yield put(deleteCharacterFailure(error.message))
  }
}

export function* deleteCharacterStart() {
  yield takeLatest(
    CharacterActionTypes.DELETE_CHARACTER_START,
    deleteHistoryAsync
  )
}

export function* editCharacterAsync({ payload: { form, history } }) {
  try {
    yield (call(editDocument, 'characters', form))
    yield put(editCharacterSuccess(form))
    addSuccess('編輯').then(() => {
      history.push(`/admin/Character`)
    })
  } catch (error) {
    yield put(editCharacterFailure(error.message))
  }
}

export function* editCharacterStart() {
  yield takeLatest(
    CharacterActionTypes.EDIT_CHARACTER_START,
    editCharacterAsync
  )
}

export function* getSingleCharacterAsync(action) {
  try {
    const collectionRef = firestore.collection('characters')
    const snapShot = yield collectionRef.get()
    const firebaseCharacter = yield call(convertCharactersSnapshotToMap, snapShot)
    const filteredCharacter = firebaseCharacter.filter((character) =>
      character.id === action.payload
    )
    yield put(getSingleCharacterSuccess(filteredCharacter[0]))
  } catch (error) {
    yield put(fetchCharacterFailure(error.message))
  }
}

export function* getSingleCharacterStart() {
  yield takeLatest(
    CharacterActionTypes.GET_SINGLE_CHARACTER_START,
    getSingleCharacterAsync
  )
}

export function* characterSagas() {
  yield all([
    call(fetchCharactersStart),
    call(addCharacterStart),
    call(deleteCharacterStart),
    call(editCharacterStart),
    call(getSingleCharacterStart)
  ])
}