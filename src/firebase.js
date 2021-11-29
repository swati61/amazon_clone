// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';
import '@firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCt0nuf9L0cMPGcDMAejkSrrPYAaqiZ-FM",
  authDomain: "clone-5444f.firebaseapp.com",
  databaseURL: "https://clone-5444f-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "clone-5444f",
  storageBucket: "clone-5444f.appspot.com",
  messagingSenderId: "287247990934",
  appId: "1:287247990934:web:d16047ba6165e9d6eac2b7",
  measurementId: "G-PSBSJDTENB" 
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth(); 

export { db, auth }; 