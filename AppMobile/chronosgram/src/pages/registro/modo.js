import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { AuthContext } from '../../contexts/auth'; // Ajuste o caminho conforme necessário
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import styles from './modosytle'; // Ajuste o caminho conforme necessário
import BotaoContinuar from '../../elementos/botaoContinuar/botaoContinuar'; // Ajuste o caminho conforme necessário
import CardOpcao from '../../elementos/cardOpcao/cardOpcao'; // Ajuste o caminho conforme necessário

export default function Modo() {
  const navigation = useNavigation();
  const { user, db } = useContext(AuthContext); // Pega o user e db do contexto
  const [selectedMode, setSelectedMode] = useState(null);

  // Função para salvar o modo de estudo selecionado no Firestore
  async function saveStudyMode() {
    if (user?.uid && selectedMode) { // Verifica se o usuário está logado e selecionou um modo
      try {
        await setDoc(doc(db, "users", user.uid), {
          studyMode: selectedMode,
        }, { merge: true });

        console.log('Modo de estudo salvo com sucesso');
      } catch (error) {
        console.error("Erro ao salvar modo de estudo:", error);
      }
    }
  }

  // Função para continuar para a próxima tela
  function handleContinue() {
    saveStudyMode().then(() => navigation.navigate("registro_universidade"));
  }

  // Dados das opções de estudo
  const CardOpcaoData = [
    {
      key: 'casual',
      label: 'Casual',
      icon: 'coffee', // Nome do ícone
      timeRange: '30 minutos',
    },
    {
      key: 'intensa',
      label: 'Intensa',
      icon: 'bolt', // Nome do ícone
      timeRange: '1-2 horas',
    },
    {
      key: 'puxada',
      label: 'Puxada',
      icon: 'fire', // Nome do ícone
      timeRange: '2 horas +',
    },
  ];

  // Função para definir o modo de estudo selecionado
  const handlePress = (key) => {
    setSelectedMode(key);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.viewImage}>
        <Image style={styles.imageLogo} source={require('../../../assets/images/logo.png')} />
      </View>

      <View style={styles.modoPosition}>
        <Text style={styles.modoText}>Tempo De Estudo</Text>
        <Text style={styles.modoText2}>Qual vai ser sua meta diária de estudos?</Text>
      </View>

      <View style={styles.modoConteiner}>
        {CardOpcaoData.map(opcao => (
          <CardOpcao
            key={opcao.key}
            data={opcao}
            isSelected={selectedMode === opcao.key}
            onPress={handlePress}
          />
        ))}
      </View>

      <BotaoContinuar
        onPress={handleContinue}
        text="Continuar"
      />
    </View>
  );
}