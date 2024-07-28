import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView, Alert } from 'react-native';
import axios from 'axios';
import styles from './style';

const Perfil = () => {
  const [fullName, setFullName] = useState('');
  const [turnoLivre, setTurnoLivre] = useState('');
  const userId = '5a0e161c-095c-490f-9a60-f7f1635118fe'; // ID do usuário
  const baseUrl = 'https://fast-api-x5fr.onrender.com'; // URL do servidor

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`${baseUrl}/users/${userId}`);
        const data = response.data;
        setFullName(data.nome);
        setTurnoLivre(data.turno_livre); // Atualiza o turno livre com o valor do banco de dados
      } catch (error) {
        console.error('Erro ao buscar dados do usuário: ', error);
        Alert.alert('Erro', 'Não foi possível buscar os dados do usuário.');
      }
    };

    fetchUserData();
  }, []);

  return (
    <ScrollView style={styles.scrollView} contentContainerStyle={styles.contentContainer}>
      <View style={styles.profileBox}>
        <Image source={require('../../../../assets/images/perfil/profile.jpg')} style={styles.profilePicture} />
        <View style={styles.textContainer}>
          <Text style={styles.fullName}>{fullName || 'Carregando...'}</Text>
          <Text style={styles.userInfo}>Idade: 24</Text>
          <Text style={styles.userInfo}>Gênero: Masculino</Text>
          <View style={styles.horizontalContainer}>
            <Text style={styles.username}>@Matth</Text>
          </View>
        </View>
      </View>
      <View style={styles.profileBox}>
        <Image source={require('../../../../assets/images/perfil/logo.jpg')} style={styles.logoPicture} />
        <View style={styles.textContainer}>
          <Text style={styles.university}>Universidade Federal Rural de Pernambuco</Text>
          <View style={styles.horizontalContainer}>
            <Text style={styles.cityName}>Unidade: Belo jardim</Text>
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
          <Text style={styles.userType}>Intensivo</Text>
          <Text style={styles.turnoLivre}>Turno Livre: {turnoLivre || 'Carregando...'}</Text> 
        </View>
      </View>
    </ScrollView>
  );
};

export default Perfil;