import api from './Api'; // Supondo que esteja importando sua instância de axios ou fetch configurada
import { Alert } from 'react-native';

class UserAPI {
  async getUsers() {
    try {
      const response = await api.get('/user');
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar usuários:', error);
      throw error;
    }
  }

  async getUserById(userId) {
    try {
      const response = await api.get(`/user/${userId}`);
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar usuário por ID:', error);
      throw error;
    }
  }

  async addUser(userData) {
    try {
      const response = await api.post('/user', userData);
      return response.data;
    } catch (error) {
      console.error('Erro ao adicionar usuário:', error);
      throw error;
    }
  }

  async updateUser(userId, userData) {
    try {
      const response = await api.put(`/user/${userId}`, userData);
      return response.data;
    } catch (error) {
      console.error('Erro ao atualizar usuário:', error);
      throw error;
    }
  }
}

export default UserAPI;