import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity,Image, ScrollView, Text, ActivityIndicator, TextInput } from 'react-native';
import styles from './style';
import { useNavigation , useRoute} from '@react-navigation/native';
import { MultipleSelectList, SelectList } from 'react-native-dropdown-select-list';
import Modal from 'react-native-modal';


export default function Metas() {

    const navigation = useNavigation();
    const route = useRoute();
    
    const disciplinas = route.params?.disciplinas
    const [selectedDisc, setSelectedDisc] =  useState(null);
    const [NomeMetas, setNomeMetas] = useState(null);
    const [date, setDate] = useState(null);
    const [activityIndicator, setActivityIndicator] = useState(false);
    const [isModalVisible, setModalVisible] = useState(false);

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
            setModalVisible(true)

            setSelectedDisc(null);
            setNomeMetas(null);
            setDate(null);
        }, 2000);
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

            <Modal isVisible={isModalVisible} animationType="slide" transparent={true}>
                <View style={styles.modalContainer}>

                    <Text style={styles.text}>Você Deseja Adicionar outra meta?</Text>

                    <View style={{marginVertical: 10,flexDirection: 'row'}}>

                        <TouchableOpacity style={{backgroundColor: '#259D55', padding: 8, borderRadius: 10, marginHorizontal: 10,}} onPress={() =>                        setModalVisible(false)}>
                            <Text style={{fontFamily:'Josefins-Sans-Bold', marginHorizontal: 40}}>SIM</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{backgroundColor: '#BB1D1D', padding: 8, borderRadius: 10,
                                          marginHorizontal: 10,}} onPress={() => navigation.navigate('TelaPrincipal')}>
                            <Text style={{fontFamily:'Josefins-Sans-Bold', marginHorizontal: 40}}>NÃO</Text>
                        </TouchableOpacity>

                    </View>

                </View>
            </Modal>

        </View>

      </View>
    );
  }