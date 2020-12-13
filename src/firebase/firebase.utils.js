import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyBnj4tyjcia-1hgQFA2cCW4iN0WQgtiCiw",
  authDomain: "highq-website.firebaseapp.com",
  databaseURL: "https://highq-website.firebaseio.com",
  projectId: "highq-website",
  storageBucket: "highq-website.appspot.com",
  messagingSenderId: "196295742242",
  appId: "1:196295742242:web:f104bf9ab98eb3cad04b7b",
  measurementId: "G-NXX30H4QCZ"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey)
  console.log(collectionRef)

  const batch = firestore.batch()
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc()
    batch.set(newDocRef, obj)
  })

  return await batch.commit()
}

export const convertPostCardsSnapshotToMap = (postCards) => {
  const transformedPostCard = postCards.docs.map(doc => {
    const { date, link, media, mediaIcon, photo } = doc.data()
    return {
      id: doc.id,
      date,
      link,
      media,
      mediaIcon,
      photo
    }
  })
  return transformedPostCard
}

export const convertCharactersSnapshotToMap = (characters) => {
  const transformedCharacter = characters.docs.map(doc => {
    const { name, characterImg, intro } = doc.data()
    return {
      id: doc.id,
      name,
      characterImg,
      intro
    }
  })
  return transformedCharacter
}

export const convertStickersSnapshotToMap = (stickers) => {
  const transformedSticker = stickers.docs.map(doc => {
    const { type, name, price, image, link, description } = doc.data()
    return {
      id: doc.id,
      type,
      name,
      price,
      image,
      link,
      description
    }
  })
  return transformedSticker.reduce((accumulator, sticker) => {
    if (!accumulator[sticker.type]) {
      accumulator[sticker.type] = []
    }
    accumulator[sticker.type].push(sticker)
    return accumulator
  }, {})
}

export const convertWishCardsSnapshotToMap = (wishCards) => {
  const transformedWishCard = wishCards.docs.map(doc => {
    const { name, email, text, isPublic, createTime } = doc.data()
    return {
      id: doc.id,
      name,
      email,
      text,
      isPublic,
      createTime
    }
  })
  return transformedWishCard
}

export const convertHistoriesSnapshotToMap = (histories) => {
  const transformedHistory = histories.docs.map(doc => {
    const { date, type, desc, img } = doc.data()
    return {
      id: doc.id,
      date,
      type,
      desc,
      img
    }
  })
  function selectDate(history, date) {
    let historyDate = history.date.split('-')
    let yearOrMonth = historyDate[date]
    return yearOrMonth
  }

  let sortHistory = transformedHistory.reduce((accumulator, history) => {
    let historyYear = selectDate(history, 0)
    let historyMonth = selectDate(history, 1)
    if (!accumulator[historyYear]) {
      accumulator[historyYear] = {}
    }
    if (!accumulator[historyYear][historyMonth]) {
      accumulator[historyYear][historyMonth] = []
    }
    accumulator[historyYear][historyMonth].push(history)
    return accumulator
  }, {})

  let yearArray = []
  for (const [key, value] of Object.entries(sortHistory)) {
    yearArray.push({
      "year": key,
      "inner": value
    })
  }

  let sortedHistories = yearArray.map((item) => {
    let month = []
    for (const [key, value] of Object.entries(item.inner)) {
      month.push({
        "month": key,
        "left": value
      })
    }
    month.sort((a, b) => a.month - b.month)
    item.inner = month
    return item
  })

  return sortedHistories
}

export default firebase