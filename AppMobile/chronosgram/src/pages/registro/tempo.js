// Tempo.tsx
import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { AuthContext } from '../../contexts/auth';
import { useNavigation } from '@react-navigation/native';
import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore';
import { StatusBar } from 'expo-status-bar';
import { CardOpcaoData } from '../../elementos/cardOpcao/types'; // Ajuste o caminho conforme necessário
import styles from './tempostyle'; // Ajuste o caminho conforme necessário
import BotaoContinuar from '../../elementos/botaoContinuar/botaoContinuar'; // Ajuste o caminho conforme necessário
import CardOpcao from '../../elementos/cardOpcao/cardOpcao'; // Ajuste o caminho conforme necessário

function Tempo(){
  const navigation = useNavigation();
  const { user, db } = useContext(AuthContext);
  const [selectedTime, setSelectedTime] = useState('');

  async function saveDate(){
    if (user?.uid && selectedTime) { // Confirma que usuário e tempo foram selecionados
      try {
        await setDoc(doc(db, "users", user.uid), {
          selectedTime: selectedTime,
        }, { merge: true });

        console.log('Tempo selecionado salvo com sucesso');
      } catch (error) {
        console.error("Erro ao salvar tempo selecionado:", error);
      }
    }
  }

  function handlerContinue(){
    saveDate().then(() => navigation.navigate('registro_modo'))
  }

  const CardOpcaoData = [
    {
      key: 'manha',
      label: 'Manhã',
      icon: 'sun-o', 
      timeRange: '8:00 à 12:00',
    },
    {
      key: 'tarde',
      label: 'Tarde',
      icon: 'moon-o', 
      timeRange: '14:00 à 18:00',
    },
    {
      key: 'noite',
      label: 'Noite',
      icon: 'moon-o', 
      timeRange: '19:00 à 23:00',
    },
  ];

  const handlePress = (key) => {
    setSelectedTime(key);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.viewImage}>
        <Image style={styles.imageLogo} source={require('../../../assets/images/logo.png')} />
      </View>

      <View style={styles.tempoPosition}>
        <Text style={styles.tempoText}>Tempo Livre</Text>
      </View>

      <View style={styles.tempoPosition2}>
        <Text style={styles.tempoText2}>Qual a parte do dia você é mais disponível?</Text>
      </View>

      <View style={styles.tempoConteiner}>
        {CardOpcaoData.map((item) => (
          <CardOpcao
            key={item.key}
            data={item}
            isSelected={selectedTime === item.key}
            onPress={handlePress}
          />
        ))}
      </View>

      <BotaoContinuar
        onPress={() => handlerContinue()}
        text="Continuar"
      />
    </View>
  );
}

export default Tempo;
