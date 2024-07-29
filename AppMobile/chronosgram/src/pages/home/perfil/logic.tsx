import { useState, useEffect } from 'react';
import axios from 'axios';

export interface UserData {
  nome: string;
  turno_livre: string;
  tipo: string;
  username: string;
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

export const updateUser = async (userId: string, updatedData: Partial<UserData>) => {
  try {
    const params = new URLSearchParams();
    if (updatedData.nome) params.append('nome', updatedData.nome);
    if (updatedData.turno_livre) params.append('turno_livre', updatedData.turno_livre);
    if (updatedData.tipo) params.append('tipo', updatedData.tipo);
    if (updatedData.username) params.append('username', updatedData.username);

    const response = await axios.put(`https://fast-api-x5fr.onrender.com/users/${userId}?${params.toString()}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao atualizar os dados do usuário:', error);
    throw error;
  }
};