import { useState, useEffect } from 'react';
import axios from 'axios';

export interface UserData {
  nome: string;
  turno_livre: string;
  tipo: string;
  username: string; // Adicione o campo username
}

export const useUserData = (userId: string) => {
  const [userData, setUserData] = useState<UserData | null>(null);

  const fetchUserData = async () => {
    try {
      const response = await axios.get(`https://fast-api-x5fr.onrender.com/users/${userId}`);
      setUserData(response.data);
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar dados do usuário:', error);
      throw error;
    }
  };

  useEffect(() => {
    fetchUserData();
  }, [userId]);

  return { userData, fetchUserData };
};

export const updateUserName = async (userId: string, newName: string) => {
  try {
    const response = await axios.put(`https://fast-api-x5fr.onrender.com/users/${userId}?nome=${encodeURIComponent(newName)}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao atualizar o nome do usuário:', error);
    throw error; // Retorna o erro para ser tratado no componente
  }
};