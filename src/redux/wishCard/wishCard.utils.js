export const addFormToWishCards = (form, wishCardslength, wishCards) => {
  const time = new Date()
  const stringTime = time.toDateString()
  form = {
    ...form,
    id: 'wish000' + (wishCardslength + 1),
    createTime: stringTime
  }
  return [form, ...wishCards]
}

export const deleteWishCard = (selectId, wishCards) => {
  let filteredWishCards = wishCards.filter(wishCard =>
    wishCard.id !== selectId
  )
  return filteredWishCards
}

export const fetchSingleWishCard = (selectId, wishCards) => {
  let selectedWishCard = wishCards.find(wishCard =>
    wishCard.id === selectId
  )
  return selectedWishCard
}

export const editWishCard = (form, wishCards) => {
  let editWishCard = wishCards.map(wishCard =>
    wishCard.id === form.id ?
      { ...wishCard, ...form }
      :
      wishCard
  )
  return editWishCard
}