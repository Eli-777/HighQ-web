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

  const batch = firestore.batch()
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc()
    batch.set(newDocRef, obj)
  })

  return await batch.commit()
}

export const deleteDocument = async (collectionKey, objectsToDelete) => {
  const collectionRef = firestore.collection(collectionKey)
  const collectionRefDoc = collectionRef.doc(objectsToDelete)
  collectionRefDoc.delete()
}

export const editDocument = async (collectionKey, objectsToDelete) => {
  const collectionRef = firestore.collection(collectionKey)
  const collectionRefDoc = collectionRef.doc(objectsToDelete.id)
  collectionRefDoc.update({ ...objectsToDelete })
}
/*** sort function start ***/

function sortedLatestToOldest(transformedItems, sortDateKey) {
  let sortedItems = transformedItems.map((item) => {
    item.changeDate = new Date(item[sortDateKey])
    return item
  })
  sortedItems.sort((a, b) =>
    b.changeDate - a.changeDate
  )
  return sortedItems
}

/*** sort function end ***/


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

  let sortedPostCard = sortedLatestToOldest(transformedPostCard, 'date')
  return sortedPostCard
}

export const convertCharactersSnapshotToMap = (characters) => {
  const transformedCharacter = characters.docs.map(doc => {
    const { name, characterImg, intro, createTime } = doc.data()
    return {
      id: doc.id,
      name,
      characterImg,
      intro,
      createTime
    }
  })

  let sortedCharacter = sortedLatestToOldest(transformedCharacter, 'createTime')
  return sortedCharacter
}

export const convertStickersSnapshotToMap = (stickers) => {
  const transformedSticker = stickers.docs.map(doc => {
    const { type, name, price, image, link, description, createTime } = doc.data()
    return {
      id: doc.id,
      type,
      name,
      price,
      image,
      link,
      description,
      createTime
    }
  })

  let sortedSticker = sortedLatestToOldest(transformedSticker, 'createTime')
  return sortedSticker
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

  let sortedWishCard = sortedLatestToOldest(transformedWishCard, 'createTime')
  return sortedWishCard
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

export const convertAdminHistoriesSnapshotToMap = (histories) => {
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

  let sortedHistory = sortedLatestToOldest(transformedHistory, 'date')
  return sortedHistory
}

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      resolve(userAuth);
    }, reject)
  })
}

export default firebase