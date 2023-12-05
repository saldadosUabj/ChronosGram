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

  async getUserData() {
    try {
      const response = await api.get('/tarefas');
      return response.data;
    } catch (error) {
      console.error('Erro ao obter dados de tarefas:', error);
      throw error;
    }
  }

  async insertNeuralData(dados) {
    try {
      await api.put('/redeNeural', dados);
    } catch (error) {
      console.error('Erro ao inserir dados na rede neural:', error);
      throw error;
    }
  }

  async insertTarefas(tarefa) {
    try {
      await api.put('/tarefas', tarefa);
    } catch (error) {
      console.error('Erro ao inserir tarefa:', error);
      throw error;
    }
  }  
  async getTarefas() {
    try {
      const response = await api.get('/tarefas');
      return response.data;
    } catch (error) {
      console.error('Erro ao obter dados de tarefas:', error);
      throw error;
    }
  }

  async getInfo(){
    fetch('https://fast-api-x5fr.onrender.com/tarefas')
          .then(response => response.json())
          .then(data => {
            console.log(data);
            const Infos = data[0];
            return Infos
  })
    .catch(error => {
      console.error('Erro ao buscar dados:', error);
    });
  }
}

export default UserAPI;