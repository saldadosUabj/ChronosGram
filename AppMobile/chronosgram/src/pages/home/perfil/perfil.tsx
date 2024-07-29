import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, Modal, TextInput, Button } from 'react-native';
import { useUserData, updateUser } from './logic';
import styles from './style';

const userId = '5a0e161c-095c-490f-9a60-f7f1635118fe';

const Perfil = () => {
  const { userData, fetchUserData } = useUserData(userId);
  const [modalVisible, setModalVisible] = useState(false);
  const [newName, setNewName] = useState('');
  const [newTurnoLivre, setNewTurnoLivre] = useState('');
  const [newTipoUsuario, setNewTipoUsuario] = useState('');

  useEffect(() => {
    if (userData) {
      setNewName(userData.nome);
      setNewTurnoLivre(userData.turno_livre);
      setNewTipoUsuario(userData.tipo);
    }
  }, [userData]);

  const handleUpdate = async () => {
    try {
      await updateUser(userId, { nome: newName, turno_livre: newTurnoLivre, tipo: newTipoUsuario });
      setModalVisible(false);
      await fetchUserData(); // Atualiza os dados após salvar
    } catch (error) {
      console.error('Erro ao atualizar os dados do usuário:', error);
    }
  };

  return (
    <ScrollView style={styles.scrollView} contentContainerStyle={styles.contentContainer}>
      <View style={styles.profileBox}>
        <Image source={require('../../../../assets/images/perfil/profile.jpg')} style={styles.profilePicture} />
        <View style={styles.textContainer}>
          <Text style={styles.fullName}>{userData?.nome}</Text>
          <Text style={styles.userInfo}>Idade: 24</Text>
          <Text style={styles.userInfo}>Gênero: Masculino</Text>
          <View style={styles.horizontalContainer}>
            <Text style={styles.username}>@{userData?.username}</Text>
            <TouchableOpacity style={styles.editButton} onPress={() => setModalVisible(true)}>
              <Image source={require('../../../../assets/images/perfil/editar.png')} style={styles.editButtonIcon} />
            </TouchableOpacity>
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
        </View>
      </View>
      <View style={styles.profileBox}>
        <Image source={require('../../../../assets/images/perfil/turno.png')} style={styles.typePicture} />
        <View style={styles.textContainer}>
          <Text style={styles.turnoLivre}>Turno livre: {userData?.turno_livre}</Text>
        </View>
      </View>

      {/* Modal para editar nome, turno livre e tipo de usuário */}
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Editar Dados</Text>
            <TextInput
              style={styles.input}
              value={newName}
              onChangeText={setNewName}
              placeholder="Nome"
            />
            <TextInput
              style={styles.input}
              value={newTurnoLivre}
              onChangeText={setNewTurnoLivre}
              placeholder="Turno Livre"
            />
            <TextInput
              style={styles.input}
              value={newTipoUsuario}
              onChangeText={setNewTipoUsuario}
              placeholder="Tipo de Usuário"
            />
            <Button title="Salvar" onPress={handleUpdate} />
            <Button title="Cancelar" onPress={() => setModalVisible(false)} color="red" />
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

export default Perfil;