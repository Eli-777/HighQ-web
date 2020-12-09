import UserActionTypes from './user.type'

export const setCurrentUser = (credentials) => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: credentials
})

export const signOut = () => ({
  type: UserActionTypes.SIGN_OUT
})