import UserActionTypes from './user.type.js'


const INITIAL_STATE = {
  currentUser: "",
  isAdmin: false
}

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
        isAdmin: true
      }
    
    case UserActionTypes.SIGN_OUT:
      return {
        ...state,
        currentUser: '',
        isAdmin: false
      }

    default:
      return state
  }
}

export default userReducer