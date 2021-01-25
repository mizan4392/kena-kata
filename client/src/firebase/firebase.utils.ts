import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyDdIuxEoEweFPeQkHDlxNkp6TIkZLyEoQc",
  authDomain: "kenakata-2bba1.firebaseapp.com",
  projectId: "kenakata-2bba1",
  storageBucket: "kenakata-2bba1.appspot.com",
  messagingSenderId: "713919844151",
  appId: "1:713919844151:web:3b2560e59ab602f6ec94b2",
  measurementId: "G-KB860ZEB8G",
};

firebase.initializeApp(config)


export const auth = firebase.auth()
export const db = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({'prompt':"select_account"})
export const signInWithGoogle = () => auth.signInWithPopup(provider)
export default firebase