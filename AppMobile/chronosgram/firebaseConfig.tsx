import { initializeApp } from "firebase/app";
//import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBr1WT0RrpEqDt9nDdZagLoIAl_iPOj9vs",
  authDomain: "banco-usuario.firebaseapp.com",
  databaseURL: "https://banco-usuario-default-rtdb.firebaseio.com",
  projectId: "banco-usuario",
  storageBucket: "banco-usuario.appspot.com",
  messagingSenderId: "764675995287",
  appId: "1:764675995287:web:da365866a67c0b5e861bd2"
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);
//export const FIREBASE_AUTH = getAuth(FIREBASE_APP);