import CharacterActionTypes from './character.type'

export const fetchCharacterStart= () => ({
  type: CharacterActionTypes.FETCH_CHARACTER_START
})

export const fetchCharacterSuccess = (characters) => ({
  type: CharacterActionTypes.FETCH_CHARACTER_SUCCESS,
  payload: characters
})

export const fetchCharacterFailure = (errorMessage) => ({
  type: CharacterActionTypes.FETCH_CHARACTER_FAILURE,
  payload: errorMessage
})


export const getSingleCharacter = (id) => ({
  type: CharacterActionTypes.GET_SINGLE_CHARACTER,
  payload: id
})

export const addCharacter = (form) => ({
  type: CharacterActionTypes.ADD_CHARACTER,
  payload: form
})

export const deleteCharacter = (id) => ({
  type: CharacterActionTypes.DELETE_CHARACTER,
  payload: id
})

export const editCharacter = (form) => ({
  type: CharacterActionTypes.EDIT_CHARACTER,
  payload: form
})