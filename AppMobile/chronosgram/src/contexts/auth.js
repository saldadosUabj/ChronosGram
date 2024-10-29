// src/contexts/AuthContext.js
import React, { createContext, useState, useEffect } from "react";
import { auth } from "../firebase/firebase";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore';

export const AuthContext = createContext(null);

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const db = getFirestore();

  // Monitora o estado de autenticação
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        // Busca o username do usuário no Firestore
        const userDoc = await getDoc(doc(db, "users", currentUser.uid));
        const userData = userDoc.exists() ? userDoc.data() : null;
        setUser({
          uid: currentUser.uid,
          email: currentUser.email,
          username: userData ? userData.username : null,
        });
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  // Função de Login
  const login = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      throw error;
    }
  };

  // Função de Registro
  const register = async (email, password, username) => {
    try {
      const response = await createUserWithEmailAndPassword(auth, email, password);
      const userId = response.user.uid;

      await setDoc(doc(db, "users", userId), {
        id: userId,
        username: username,
        email: response.user.email,
      });

      setUser({
        uid: userId,
        email: response.user.email,
        username: username,
      });

      console.log("Usuário salvo no Firestore");
    } catch (error) {
      console.error("Erro ao registrar:", error.message);
      throw error;
    }
  };

  // Função de Logout
  const logout = async () => {
    try {
      await signOut(auth);
      setUser(null); // Limpa o estado do usuário ao fazer logout
    } catch (error) {
      console.error("Erro ao sair:", error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, db, auth }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;