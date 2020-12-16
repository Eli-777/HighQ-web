export const addFormToHistory = (form, historyLength, histories) => {
  const id = 'h' + (historyLength + 1).toString()

  form = {
    ...form,
    id,
  }
  let allData = [...histories, form]
  allData.sort((a,b)=> a.date.split('-').join('') - b.date.split('-').join(''))
  return allData
}

export const deleteHistory = (selectId, histories) => {
  let filteredHistory = histories.filter(history =>
    history.id !== selectId
  )
  return filteredHistory
}

export const editHistory = (form, histories) => {
  let editHistory = histories.map(history =>
    history.id === form.id ?
      { ...history, ...form }
      :
      history
  )
  return editHistory
}
