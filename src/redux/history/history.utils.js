export const addFormToHistory = (form, historyLength, histories) => {
  const time = new Date()
  const stringTime = time.toDateString()

  const id = 'h' + (historyLength + 1).toString()


  form = {
    ...form,
    id,
    createTime: stringTime,
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

export const fetchSingleHistory = (selectId, histories) => {
  let selectedHistory = histories.find(history =>
    history.id === selectId
  )
  return selectedHistory
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
