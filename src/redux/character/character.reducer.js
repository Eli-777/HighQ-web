import CharacterActionTypes from './character.type'
import characterDummyData from './DummyCharacters'
import { 
  addFormToCharacters, 
  deleteCharacter, 
  fetchSingleCharacter, 
  editCharacter 
} from './character.utils'

const INITIAL_STATE = {
  characters: characterDummyData,
  selectedCharacter: []
}

const characterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
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