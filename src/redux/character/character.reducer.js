import CharacterActionTypes from './character.type'

const INITIAL_STATE = {
  characters: []
}

const characterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CharacterActionTypes.GET_CHARACTER:
      return {
        ...state,
        characters: action.payload
      }
    default:
      return state
  }
}

export default characterReducer