import CharacterActionTypes from './character.type'
import { 
  addFormToCharacters, 
  deleteCharacter, 
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
    case CharacterActionTypes.FETCH_CHARACTER_SUCCESS:
      return {
        ...state,
        characters: action.payload,
        isLoading: false,
      }

      case CharacterActionTypes.ADD_CHARACTER_SUCCESS:
        return {
          ...state,
          characters: addFormToCharacters(action.payload, state.characters.length, state.characters)
        }
  
      case CharacterActionTypes.GET_SINGLE_CHARACTER_START:
        return {
          ...state,
          selectedCharacter: null,
          isLoading: true
        }
  
      case CharacterActionTypes.GET_SINGLE_CHARACTER_SUCCESS:
        return {
          ...state,
          selectedCharacter: action.payload,
          isLoading: false
        }
  
      case CharacterActionTypes.EDIT_CHARACTER_SUCCESS:
        return {
          ...state,
          characters: editCharacter(action.payload, state.characters)
        }
  
      case CharacterActionTypes.DELETE_CHARACTER_SUCCESS:
        return {
          ...state,
          characters: deleteCharacter(action.payload, state.characters)
        }
  
      case CharacterActionTypes.EDIT_CHARACTER_FAILURE:
      case CharacterActionTypes.DELETE_CHARACTER_FAILURE:
      case CharacterActionTypes.ADD_CHARACTER_FAILURE:
      case CharacterActionTypes.FETCH_CHARACTER_FAILURE:
        return {
          ...state,
          errorMessage: action.payload,
          isLoading: false
        }
    default:
      return state
  }
}

export default characterReducer