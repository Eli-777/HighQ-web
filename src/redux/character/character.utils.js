export const addFormToCharacters = (form, charactersLength, characters) => {
  const time = new Date()
  const stringTime = time.toDateString()

  const id = 'ch' + (charactersLength + 1).toString()


  form = {
    ...form,
    id,
    createTime: stringTime,
  }
  return [form, ...characters]
}

export const deleteCharacter = (selectId, characters) => {
  let filteredCharacters = characters.filter(character =>
    character.id !== selectId
  )
  return filteredCharacters
}

export const fetchSingleCharacter = (selectId, characters) => {
  let selectedCharacter = characters.find(character =>
    character.id === selectId
  )
  return selectedCharacter
}

export const editCharacter = (form, characters) => {
  let editCharacter = characters.map(character =>
    character.id === form.id ?
      { ...character, ...form }
      :
      character
  )
  return editCharacter
}
