import UserActionTypes from './user.type.js'


const INITIAL_STATE = {
  currentUser: null,
  isAdmin: false,
  isLoading: true,
  errorMessage: null
}

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        isAdmin: true,
        errorMessage: null,
        isLoading: false
      }

    case UserActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: '',
        isAdmin: false,
        isLoading: false
      }

    case UserActionTypes.SIGN_OUT_FAILURE:
    case UserActionTypes.SIGN_IN_FAILURE:
      return {
        ...state,
        currentUser: null,
        errorMessage: action.payload,
        isLoading: false
      }

    default:
      return state
  }
}

export default userReducer