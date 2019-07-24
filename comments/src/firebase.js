import firebase from 'firebase/app'
import 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyDae8QakDyoO09aXO4GnrSkTafhmze6b0M",
    authDomain: "comments-devreactjs-66ff5.firebaseapp.com",
    databaseURL: "https://comments-devreactjs-66ff5.firebaseio.com",
    projectId: "comments-devreactjs-66ff5",
    storageBucket: "",
    messagingSenderId: "832880323347",
    appId: "1:832880323347:web:6cd0e541a7a0f1c4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig)

export const database = firebase.database()