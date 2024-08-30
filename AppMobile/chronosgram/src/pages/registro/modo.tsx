import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import styles from './modosytle'; // Ajuste o caminho conforme necessário
import BotaoContinuar from '../../elementos/botaoContinuar/botaoContinuar'; // Ajuste o caminho conforme necessário
import CardOpcao from '../../elementos/cardOpcao/cardOpcao'; // Ajuste o caminho conforme necessário
import { CardOpcaoData } from '../../elementos/cardOpcao/types'; // Ajuste o caminho conforme necessário

export default function Modo() {
  const navigation = useNavigation();
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const handlePress = (key: string) => {
    setSelectedTime(key);
  };

  // Define a estrutura dos dados de opções
  const opcoes: CardOpcaoData[] = [
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
        {opcoes.map(opcao => (
          <CardOpcao
            key={opcao.key}
            data={opcao}
            isSelected={selectedTime === opcao.key}
            onPress={handlePress}
          />
        ))}
      </View>

      <BotaoContinuar
        onPress={() => navigation.navigate("registro_universidade" as never)}
        text="Continuar"
      />
    </View>
  );
}
