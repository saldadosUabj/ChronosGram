
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBr1WT0RrpEqDt9nDdZagLoIAl_iPOj9vs",
  authDomain: "banco-usuario.firebaseapp.com",
  projectId: "banco-usuario",
  storageBucket: "banco-usuario.appspot.com",
  messagingSenderId: "764675995287",
  appId: "1:764675995287:web:da365866a67c0b5e861bd2"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)