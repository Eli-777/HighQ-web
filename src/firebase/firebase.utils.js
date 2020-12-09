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



export default firebase