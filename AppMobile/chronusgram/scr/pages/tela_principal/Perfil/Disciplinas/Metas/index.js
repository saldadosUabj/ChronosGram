import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity,Image, ScrollView, Text, ActivityIndicator, TextInput } from 'react-native';
import styles from './style';
import { useNavigation} from '@react-navigation/native';
import { MultipleSelectList } from 'react-native-dropdown-select-list'


export default function Metas() {
    const [metas, setMetas] = useState(null);
    const [date, setDate] = useState(null);
    const [activityIndicator, setActivityIndicator] = useState(false);
  
    const handleDateChange = (text) => {
      // Remove caracteres não numéricos
      const newText = text.replace(/[^\d]/g, '');
  
      // Adiciona barras conforme o usuário digita
      if (newText.length <= 2) {
        setDate(newText);
      } else if (newText.length <= 4) {
        setDate(`${newText.substring(0, 2)}/${newText.substring(2)}`);
      } else {
        setDate(`${newText.substring(0, 2)}/${newText.substring(2, 4)}/${newText.substring(4, 6)}`);
      }
    };
  
    // Função para enviar as atualizações para o banco
    function AttBanco() {
      // Ative o indicador de atividade
      setActivityIndicator(true);
  
      // Simule uma operação assíncrona (por exemplo, uma chamada à API)
      setTimeout(() => {
        // Faça a lógica de atualização do banco aqui
  
        // Desative o indicador de atividade após a conclusão da operação
        setActivityIndicator(false);
      }, 2000); // Tempo de simulação (substitua pelo tempo real da operação)
    }
  
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={require('../../../../../../assets/meta.png')} />
        <Text style={styles.titulo}> Metas </Text>
  
        <View style={styles.BoxDisciplinas}>
            
          <TextInput
            style={styles.inputBox}
            onChangeText={setMetas}
            value={metas}
            placeholder='Meta'
            keyboardType='default'
          />
  
          <TextInput
            style={styles.inputBox}
            onChangeText={handleDateChange}
            value={date}
            placeholder='Data (DD/MM/AA)'
            keyboardType='number-pad'
          />
  
          <TouchableOpacity style={styles.button} onPress={() => AttBanco()}>
            {activityIndicator ? (
              <ActivityIndicator size="large" color="#16041B" />
            ) : (
              <Text style={{ fontSize: 40, fontWeight: 'bold', bottom: 4 }}>
                {'>'}
              </Text>
            )}
          </TouchableOpacity>

        </View>

      </View>
    );
  }