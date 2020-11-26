import CharacterActionTypes from './character.type'
import characterDummyData from './DummyCharacters'

export const getCharacter = () => ({
  type: CharacterActionTypes.GET_CHARACTER,
  payload: characterDummyData
})