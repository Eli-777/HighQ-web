export const addFormToStickers = (form, stickersLength, stickers) => {
  const time = new Date()
  const stringTime = time.toDateString()

  const id = 'st' + (stickersLength + 1).toString()


  form = {
    ...form,
    id,
    createTime: stringTime,
  }
  return [form, ...stickers]
}

export const deleteSticker = (selectId, stickers) => {
  let filteredStickers = stickers.filter(sticker =>
    sticker.id !== selectId
  )
  return filteredStickers
}

export const fetchSingleSticker = (selectId, stickers) => {
  let selectedSticker = stickers.find(sticker =>
    sticker.id === selectId
  )
  return selectedSticker
}

export const editSticker = (form, stickers) => {
  let editSticker = stickers.map(sticker =>
    sticker.id === form.id ?
      { ...sticker, ...form }
      :
      sticker
  )
  return editSticker
}
