import firebase from 'firebase/app'
import 'firebase/firestore'


  const firebaseConfig = {
    apiKey: "AIzaSyDglo-iniBQ8EAf-q2v2HyTkjsJXdCPDWo",
    authDomain: "crud-5b17c.firebaseapp.com",
    projectId: "crud-5b17c",
    storageBucket: "crud-5b17c.appspot.com",
    messagingSenderId: "112150377626",
    appId: "1:112150377626:web:c8996b9acf81f72a7f9b23"
  }

  export const firebaseApp = firebase.initializeApp(firebaseConfig)