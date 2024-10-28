// src/firebase.js
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyABGvjI3W3ip0Fp02Z9-JW-VUTL5A902Zo",
  authDomain: "banco-rotina.firebaseapp.com",
  projectId: "banco-rotina",
  storageBucket: "banco-rotina.appspot.com",
  messagingSenderId: "694148028544",
  appId: "1:694148028544:web:26964ae5da415c836e2e65"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Configura o Firebase Auth com persistência
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

// Exporta o Auth
export { auth };