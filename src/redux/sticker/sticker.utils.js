export const addFormToStickers = (form, stickersLength, stickers) => {
  const id = 'st' + (stickersLength + 1).toString()
  form = {
    ...form,
    id,

  }
  return [form, ...stickers]
}

export const deleteSticker = (selectId, stickers) => {
  let filteredStickers = stickers.filter(sticker =>
    sticker.id !== selectId
  )
  return filteredStickers
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
