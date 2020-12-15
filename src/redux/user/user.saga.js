import { takeLatest, put, call, all } from 'redux-saga/effects'
import { auth, getCurrentUser } from '../../firebase/firebase.utils'
import { signInSuccess, signInFailure, signOutSuccess, signOutFailure } from './user.action'
import UserActionTypes from './user.type'
import { loginFail } from '../../effects/sweetAlert2.effects'


export function* fetchCurrentUserAsync() {
  try {
    const userAuth = yield getCurrentUser()
    if (!userAuth) {
      yield signOut()
      return
    }
    yield put(signInSuccess(userAuth.email))
  } catch (error) {
    yield put(signInFailure(error.message))
  }
}
export function* checkCurrentUserStart() {
  yield takeLatest(UserActionTypes.CHECK_CURRENT_USER_START, fetchCurrentUserAsync)
}

export function* emailSignInAsync({ payload: { email, password, history } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password)
    yield put(signInSuccess(user.email))
    history.push('/admin/main')
  } catch (error) {
    yield put(signInFailure(error.message))
    loginFail()
  }
}

export function* EmailSignInStart() {
  yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, emailSignInAsync)
}

export function* signOut() {
  try {
    yield auth.signOut()
    yield put(signOutSuccess())
  } catch (error) {
    yield put(signOutFailure(error.message))
  }
}

export function* signOutStart() {
  yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut)
}

export function* userSagas() {
  yield all([
    call(EmailSignInStart),
    call(checkCurrentUserStart),
    call(signOutStart)
  ])
}