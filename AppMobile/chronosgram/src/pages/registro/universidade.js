import React, { useState, useContext } from 'react';
import { Text, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { AuthContext } from '../../contexts/auth'; // Certifique-se de que o caminho está correto
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import styles from './universidadestyle'; // Ajuste o caminho conforme necessário
import { Picker } from '@react-native-picker/picker';
import BotaoContinuar from '../../elementos/botaoContinuar/botaoContinuar'; // Ajuste o caminho conforme necessário

export default function Universidade() {
  const navigation = useNavigation();
  const { user, db } = useContext(AuthContext); // Obtenha o usuário e o Firestore do contexto
  const [selectedUniversity, setSelectedUniversity] = useState(undefined);
  const [selectedCourse, setSelectedCourse] = useState(undefined);

  // Dados das universidades e cursos
  const universities = [
    'Universidade Federal Rural de Pernambuco (UFRPE)',
    'Universidade Federal de Pernambuco (UFPE)',
    'Universidade de São Paulo (USP)',
    // Adicione mais universidades conforme necessário
  ];

  const courses = [
    'Engenharia da Computação',
    'Administração',
    'Medicina',
    // Adicione mais cursos conforme necessário
  ];

  // Função para salvar universidade e curso no Firestore
  async function saveUniversityAndCourse() {
    if (user?.uid && selectedUniversity && selectedCourse) {
      try {
        const userRef = doc(db, "users", user.uid);

        // Atualiza o documento do usuário com as informações de universidade e curso
        await setDoc(userRef, {
          university: selectedUniversity,
          course: selectedCourse,
        }, { merge: true });

        console.log('Universidade e curso salvos com sucesso');
      } catch (error) {
        console.error("Erro ao salvar universidade e curso:", error);
      }
    }
  }

  // Função para continuar para a próxima tela
  function handleContinue() {
    saveUniversityAndCourse().then(() => navigation.navigate("home"));
  }

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.viewImage}>
        <Image style={styles.imageLogo} source={require('../../../assets/images/logo.png')} />
      </View>

      <View style={styles.universidadePosition}>
        <Text style={styles.universidadeText}>Universidade</Text>
        <Text style={styles.universidadeText2}>Qual a universidade que você faz parte?</Text>
      </View>

      <View style={styles.viewUni}>
        <Picker
          selectedValue={selectedUniversity}
          style={styles.picker}
          onValueChange={(itemValue) => setSelectedUniversity(itemValue)}
        >
          <Picker.Item label="Selecione uma universidade" value={undefined} />
          {universities.map((uni, index) => (
            <Picker.Item key={index} label={uni} value={uni} />
          ))}
        </Picker>
      </View>

      <View style={styles.cursoPosition}>
        <Text style={styles.cursoText}>Curso</Text>
        <Text style={styles.cursoText2}>Qual o curso você faz na universidade?</Text>
      </View>

      <View style={styles.viewCurso}>
        <Picker
          selectedValue={selectedCourse}
          style={styles.picker}
          onValueChange={(itemValue) => setSelectedCourse(itemValue)}
        >
          <Picker.Item label="Selecione um curso" value={undefined} />
          {courses.map((course, index) => (
            <Picker.Item key={index} label={course} value={course} />
          ))}
        </Picker>
      </View>

      <BotaoContinuar
        onPress={handleContinue}
        text="Continuar"
      />
    </View>
  );
}