import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, Modal, TextInput, Button } from 'react-native';
import { useUserData, updateUserName, UserData } from './logic';
import styles from './style';

const userId = '5a0e161c-095c-490f-9a60-f7f1635118fe';

const Perfil = () => {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [newName, setNewName] = useState('');

  // Hook customizado para buscar os dados do usuário
  const { fetchUserData } = useUserData(userId);

  // Função para buscar dados do usuário
  const fetchUserDataFromAPI = async () => {
    try {
      const data = await fetchUserData(); // Busca os dados atualizados
      setUserData(data);
      setNewName(data?.nome || ''); // Atualiza o nome no estado do modal
    } catch (error) {
      console.error('Erro ao buscar dados do usuário:', error);
    }
  };

  // Carrega os dados do usuário quando o componente é montado
  useEffect(() => {
    fetchUserDataFromAPI();
  }, []);

  const handleUpdateName = async () => {
    try {
      await updateUserName(userId, newName);
      setModalVisible(false);
      await fetchUserDataFromAPI(); // Atualiza os dados após salvar
    } catch (error) {
      console.error('Erro ao atualizar o nome do usuário:', error);
    }
  };

  return (
    <ScrollView style={styles.scrollView} contentContainerStyle={styles.contentContainer}>
      <View style={styles.profileBox}>
        <Image source={require('../../../../assets/images/perfil/profile.jpg')} style={styles.profilePicture} />
        <View style={styles.textContainer}>
          <View style={styles.nameAndButtonContainer}>
            <Text style={styles.fullName}>{userData?.nome}</Text>
            <TouchableOpacity style={styles.editButton} onPress={() => setModalVisible(true)}>
              <Image source={require('../../../../assets/images/perfil/editar.png')} style={styles.editButtonIcon} />
            </TouchableOpacity>
          </View>
          <Text style={styles.userInfo}>Idade: 24</Text>
          <Text style={styles.userInfo}>Gênero: Masculino</Text>
          <View style={styles.horizontalContainer}>
            <Text style={styles.username}>@{userData?.username}</Text> 
          </View>
        </View>
      </View>
      <View style={styles.profileBox}>
        <Image source={require('../../../../assets/images/perfil/logo.jpg')} style={styles.logoPicture} />
        <View style={styles.textContainer}>
          <Text style={styles.university}>Universidade Federal Rural de Pernambuco</Text>
          <View style={styles.horizontalContainer}>
            <Text style={styles.cityName}>Unidade: Belo Jardim</Text>
          </View>
        </View>
      </View>
      <View style={styles.profileBox}>
        <Image source={require('../../../../assets/images/perfil/computação.jpg')} style={styles.coursePicture} />
        <View style={styles.textContainer}>
          <Text style={styles.course}>Engenharia da Computação</Text>
          <View style={styles.horizontalContainer}>
            <Text style={styles.courseType}>Horário: Integral</Text>
          </View>
        </View>
      </View>
      <View style={styles.profileBox}>
        <Image source={require('../../../../assets/images/perfil/rotina.jpg')} style={styles.typePicture} />
        <View style={styles.textContainer}>
          <Text style={styles.userType}>Tipo de usuário: {userData?.tipo}</Text>
          <Text style={styles.turnoLivre}>Turno livre: {userData?.turno_livre}</Text>
        </View>
      </View>
      
      {/* Modal para editar nome */}
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Editar Nome</Text>
            <TextInput
              style={styles.input}
              value={newName}
              onChangeText={setNewName}
            />
            <Button title="Salvar" onPress={handleUpdateName} />
            <Button title="Cancelar" onPress={() => setModalVisible(false)} color="red" />
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

export default Perfil;