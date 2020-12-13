import { takeLatest, call, put, all } from 'redux-saga/effects'
import { firestore, convertCharactersSnapshotToMap } from '../../firebase/firebase.utils'
import { fetchCharacterSuccess, fetchCharacterFailure } from './character.action'
import CharacterActionTypes from './character.type'

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

export function* characterSagas() {
  yield all([
    call(fetchCharactersStart)
  ])
}