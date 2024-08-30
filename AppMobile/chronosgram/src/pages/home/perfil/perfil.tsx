import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Modal, TextInput, Button } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Biblioteca de ícones
import { useUserData, updateUser } from './logic';
import styles from './style';

const userId = '5a0e161c-095c-490f-9a60-f7f1635118fe';

const Perfil = () => {
  const { userData, fetchUserData } = useUserData(userId);
  const [modalVisible, setModalVisible] = useState(false);
  const [editField, setEditField] = useState('');
  const [newValue, setNewValue] = useState('');

  useEffect(() => {
    if (userData && editField) {
      setNewValue(userData[editField]);
    }
  }, [userData, editField]);

  const handleUpdate = async () => {
    try {
      await updateUser(userId, { [editField]: newValue });
      setModalVisible(false);
      setEditField('');
      await fetchUserData(); // Atualiza os dados após salvar
    } catch (error) {
      console.error('Erro ao atualizar os dados do usuário:', error);
    }
  };

  const openEditModal = (field) => {
    setEditField(field);
    setModalVisible(true);
  };

  return (
    <ScrollView style={styles.scrollView} contentContainerStyle={styles.contentContainer}>
      <View style={styles.profileBox}>
        <Icon name="person" size={70} color="#BB86FC" style={styles.profileIcon} />
        <View style={styles.textContainer}>
          <Text style={styles.fullName}>{userData?.nome}</Text>
          <Text style={styles.userInfo}>Idade: 24</Text>
          <Text style={styles.userInfo}>Gênero: Masculino</Text>
          <View style={styles.horizontalContainer}>
            <Text style={styles.username}>@{userData?.username}</Text>
            <TouchableOpacity style={styles.editButton} onPress={() => openEditModal('nome')}>
              <Icon name="edit" size={20} color="#BB86FC" />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* ScrollView horizontal para as outras informações */}
      <ScrollView style={styles.horizontalScrollView} contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.cardContainer}>
          <TouchableOpacity style={styles.smallProfileBox} onPress={() => openEditModal('universidade')}>
            <Icon name="school" size={30} color="#BB86FC" style={styles.smallIcon} />
            <View style={styles.smallTextContainer}>
              <Text style={styles.cardTitle}>Universidade</Text>
              <Text style={styles.smallUniversity}>Universidade Federal Rural de Pernambuco</Text>
              <Text style={styles.smallCityName}>Unidade: Belo Jardim</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.smallProfileBox} onPress={() => openEditModal('curso')}>
            <Icon name="computer" size={30} color="#BB86FC" style={styles.smallIcon} />
            <View style={styles.smallTextContainer}>
              <Text style={styles.cardTitle}>Curso</Text>
              <Text style={styles.smallCourse}>Engenharia da Computação</Text>
              <Text style={styles.smallCourseType}>Horário: Integral</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.smallProfileBox} onPress={() => openEditModal('tipo')}>
            <Icon name="person-pin" size={30} color="#BB86FC" style={styles.smallIcon} />
            <View style={styles.smallTextContainer}>
              <Text style={styles.cardTitle}>Tipo de Usuário</Text>
              <Text style={styles.smallUserType}>Tipo de usuário: {userData?.tipo}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.smallProfileBox} onPress={() => openEditModal('turno_livre')}>
            <Icon name="schedule" size={30} color="#BB86FC" style={styles.smallIcon} />
            <View style={styles.smallTextContainer}>
              <Text style={styles.cardTitle}>Turno Livre</Text>
              <Text style={styles.smallTurnoLivre}>Turno livre: {userData?.turno_livre}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Modal para editar nome, turno livre e tipo de usuário */}
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Editar {editField === 'nome' ? 'Nome' : editField === 'universidade' ? 'Universidade' : editField === 'curso' ? 'Curso' : editField === 'tipo' ? 'Tipo de Usuário' : 'Turno Livre'}</Text>
            <TextInput
              style={styles.input}
              value={newValue}
              onChangeText={setNewValue}
              placeholder={`Novo ${editField}`}
              placeholderTextColor="#888"
            />
            <View style={styles.buttonContainer}>
              <Button title="Salvar" onPress={handleUpdate} color="#03DAC6" />
              <Button title="Cancelar" onPress={() => setModalVisible(false)} color="#CF6679" />
            </View>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

export default Perfil;
