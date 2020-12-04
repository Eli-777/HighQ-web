export const addFormToPostCards = (form, postCardsLength, postCards) => {
  const time = new Date()
  const stringTime = time.toDateString()

  const id = (postCardsLength + 1).toString()

  let mediaIcon
  if (form.media === 'fb') {
    mediaIcon = "FaFacebookF"
  } else if (form.media === 'ig') {
    mediaIcon = "FaInstagram"
  }

  form = {
    ...form,
    id,
    createTime: stringTime,
    mediaIcon,
  }
  return [form, ...postCards]
}

export const deletePostCard = (selectId, postCards) => {
  let filteredPostCards = postCards.filter(postCard =>
    postCard.id !== selectId
  )
  return filteredPostCards
}

export const fetchSinglePostCard = (selectId, postCards) => {
  let selectedPostCard = postCards.find(postCard =>
    postCard.id === selectId
  )
  return selectedPostCard
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
