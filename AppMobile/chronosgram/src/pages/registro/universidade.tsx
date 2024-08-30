import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import styles from './universidadestyle';
import { Picker } from '@react-native-picker/picker';
import BotaoContinuar from '../../elementos/botaoContinuar/botaoContinuar';

export default function Universidade() {
  const navigation = useNavigation();
  
  const [selectedUniversity, setSelectedUniversity] = useState<string | undefined>(undefined);
  const [selectedCourse, setSelectedCourse] = useState<string | undefined>(undefined);

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
        onPress={() => navigation.navigate("home" as never)}
        text="Continuar"
      />
    </View>
  );
}
