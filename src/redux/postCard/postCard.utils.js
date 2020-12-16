export const addFormToPostCards = (form, postCardsLength, postCards) => {
  const id = (postCardsLength + 1).toString()

  form = {
    ...form,
    id,
  }
  return [form, ...postCards]
}

export const deletePostCard = (selectId, postCards) => {
  let filteredPostCards = postCards.filter(postCard =>
    postCard.id !== selectId
  )
  return filteredPostCards
}


export const editPostCard = (form, postCards) => {
  let editPostCard = postCards.map(postCard =>
    postCard.id === form.id ?
      { ...postCard, ...form }
      :
      postCard
  )
  return editPostCard
}
