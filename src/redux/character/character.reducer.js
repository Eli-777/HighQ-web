import CharacterActionTypes from './character.type'
import { 
  addFormToCharacters, 
  deleteCharacter, 
  fetchSingleCharacter, 
  editCharacter 
} from './character.utils'

const INITIAL_STATE = {
  characters: [],
  selectedCharacter: [],
  isLoading: true,
  errorMessage: null
}

const characterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CharacterActionTypes.FETCH_CHARACTER_START:
      return {
        ...state,
      }

    case CharacterActionTypes.FETCH_CHARACTER_SUCCESS:
      return {
        ...state,
        characters: action.payload,
        isLoading: false,
      }

    case CharacterActionTypes.FETCH_CHARACTER_FAILURE:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload
      }

    case CharacterActionTypes.GET_CHARACTER:
      return {
        ...state,
      }

    case CharacterActionTypes.GET_SINGLE_CHARACTER:
      return {
        ...state,
        selectedCharacter: fetchSingleCharacter(action.payload, state.characters)
      }

    case CharacterActionTypes.ADD_CHARACTER:
      return {
        ...state,
        characters: addFormToCharacters(action.payload, state.characters.length, state.characters),

      }

    case CharacterActionTypes.EDIT_CHARACTER:
      return {
        ...state,
        characters: editCharacter(action.payload, state.characters)
      }

    case CharacterActionTypes.DELETE_CHARACTER:
      return {
        ...state,
        characters: deleteCharacter(action.payload, state.characters)
      }
    default:
      return state
  }
}

export default characterReducer