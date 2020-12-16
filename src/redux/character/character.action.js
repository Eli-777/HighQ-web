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


export const addCharacterStart = (form) => ({
  type: CharacterActionTypes.ADD_CHARACTER_START,
  payload: form
})

export const addCharacterSuccess = (form) => ({
  type: CharacterActionTypes.ADD_CHARACTER_SUCCESS,
  payload: form
})

export const addCharacterFailure = (errorMessage) => ({
  type: CharacterActionTypes.ADD_CHARACTER_FAILURE,
  payload: errorMessage
})

export const getSingleCharacterStart = (id) => ({
  type: CharacterActionTypes.GET_SINGLE_CHARACTER_START,
  payload: id
})

export const getSingleCharacterSuccess = (form) => ({
  type: CharacterActionTypes.GET_SINGLE_CHARACTER_SUCCESS,
  payload: form
})


export const deleteCharacterStart = (id) => ({
  type: CharacterActionTypes.DELETE_CHARACTER_START,
  payload: id
})

export const deleteCharacterSuccess = (id) => ({
  type: CharacterActionTypes.DELETE_CHARACTER_SUCCESS,
  payload: id
})

export const deleteCharacterFailure = (errorMessage) => ({
  type: CharacterActionTypes.DELETE_CHARACTER_FAILURE,
  payload: errorMessage
})

export const editCharacterStart = (form) => ({
  type: CharacterActionTypes.EDIT_CHARACTER_START,
  payload: form
})

export const editCharacterSuccess = (form) => ({
  type: CharacterActionTypes.EDIT_CHARACTER_SUCCESS,
  payload: form
})

export const editCharacterFailure = (errorMessage) => ({
  type: CharacterActionTypes.EDIT_CHARACTER_FAILURE,
  payload: errorMessage
})