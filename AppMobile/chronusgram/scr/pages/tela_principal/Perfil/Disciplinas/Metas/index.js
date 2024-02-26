import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity,Image, ScrollView, Text, ActivityIndicator, TextInput } from 'react-native';
import styles from './style';
import { useNavigation , useRoute} from '@react-navigation/native';
import { MultipleSelectList, SelectList } from 'react-native-dropdown-select-list'


export default function Metas() {

    const route = useRoute();
    
    const disciplinas = route.params?.disciplinas
    const [selectedDisc, setSelectedDisc] =  useState(null);
    const [NomeMetas, setNomeMetas] = useState(null);
    const [date, setDate] = useState(null);
    const [activityIndicator, setActivityIndicator] = useState(false);  
    
    const dataToSave = {
        selectedDisc: selectedDisc,
        NomeMetas: NomeMetas,
        Date: date
    };
  
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
  
    function AttBanco() {
        console.log(dataToSave)
        setActivityIndicator(true);
        setTimeout(() => {
            const jsonData = JSON.stringify(dataToSave);

            console.log(jsonData);

            setActivityIndicator(false);

            setSelectedDisc(null);
            setNomeMetas(null);
            setDate(null);
        }, 2000); // Tempo de simulação (substitua pelo tempo real da operação)
    }
  
    return (
      <View style={styles.container}>

        <Image style={styles.logo} source={require('../../../../../../assets/meta.png')} />
        <Text style={styles.titulo}> Metas </Text>
  
        <View style={styles.BoxDisciplinas}>

            <SelectList
                    boxStyles={styles.inputSelectdBox}
                    dropdownStyles={styles.inputSelectdBoxDropdown}
                    data={disciplinas}
                    setSelected={setSelectedDisc}
                    value={selectedDisc}
                    placeholder='Selecione a Cadeira'/>
                
            <TextInput
                style={styles.inputBox}
                onChangeText={setNomeMetas}
                value={NomeMetas}
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