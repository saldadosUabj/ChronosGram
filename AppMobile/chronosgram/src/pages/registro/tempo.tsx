// Tempo.tsx
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { CardOpcaoData } from '../../elementos/cardOpcao/types'; // Ajuste o caminho conforme necessário
import styles from './tempostyle'; // Ajuste o caminho conforme necessário
import BotaoContinuar from '../../elementos/botaoContinuar/botaoContinuar'; // Ajuste o caminho conforme necessário
import CardOpcao from '../../elementos/cardOpcao/cardOpcao'; // Ajuste o caminho conforme necessário

const Tempo: React.FC = () => {
  const navigation = useNavigation();
  const [selectedTime, setSelectedTime] = useState<string>('');

  const data: CardOpcaoData[] = [
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

  const handlePress = (key: string) => {
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
        {data.map((item) => (
          <CardOpcao
            key={item.key}
            data={item}
            isSelected={selectedTime === item.key}
            onPress={handlePress}
          />
        ))}
      </View>

      <BotaoContinuar
        onPress={() => navigation.navigate("registro_modo" as never)}
        text="Continuar"
      />
    </View>
  );
}

export default Tempo;
