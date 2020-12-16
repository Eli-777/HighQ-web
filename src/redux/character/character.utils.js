export const addFormToCharacters = (form, charactersLength, characters) => {
  const id = 'ch' + (charactersLength + 1).toString()

  form = {
    ...form,
    id,
  }
  return [form, ...characters]
}

export const deleteCharacter = (selectId, characters) => {
  let filteredCharacters = characters.filter(character =>
    character.id !== selectId
  )
  return filteredCharacters
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
