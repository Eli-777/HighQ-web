import CharacterActionTypes from './character.type'

export const getCharacter = () => ({
  type: CharacterActionTypes.GET_CHARACTER,
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