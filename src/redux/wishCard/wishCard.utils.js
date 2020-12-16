export const addFormToWishCards = (form, wishCardslength, wishCards) => {
  form = {
    ...form,
    id: 'wish000' + (wishCardslength + 1),
  }
  return [form, ...wishCards]
}

export const deleteWishCard = (selectId, wishCards) => {
  let filteredWishCards = wishCards.filter(wishCard =>
    wishCard.id !== selectId
  )
  return filteredWishCards
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