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