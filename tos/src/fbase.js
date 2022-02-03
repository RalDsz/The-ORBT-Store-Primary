import firebase from 'firebase';
import { getAuth, sendSignInLinkToEmail } from "firebase/auth";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWs2E5NJStFMe4SJMn9afts1nabLjsTIo",
  authDomain: "theorbtstore.firebaseapp.com",
  projectId: "theorbtstore",
  storageBucket: "theorbtstore.appspot.com",
  messagingSenderId: "168328156119",
  appId: "1:168328156119:web:badb2961acc94f94dff192",
  measurementId: "G-RE51X1ZEFM"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };