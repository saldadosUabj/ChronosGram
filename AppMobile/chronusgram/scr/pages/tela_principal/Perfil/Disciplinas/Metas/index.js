import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity,Image, ScrollView, Text, ActivityIndicator, TextInput, Alert } from 'react-native';
import styles from './style';
import { useNavigation , useRoute} from '@react-navigation/native';
import { MultipleSelectList, SelectList } from 'react-native-dropdown-select-list';
import Modal from 'react-native-modal';
import UserAPI from '../../../../../services/userAPI';
import * as Notifications from 'expo-notifications'

Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: true,
    }),
  });


export default function Metas() {

    const navigation = useNavigation();
    const route = useRoute();
    const userApi = new UserAPI()
    
    const disciplinas = route.params?.disciplinas
    const [selectedDisc, setSelectedDisc] =  useState(null);
    const [NomeMetas, setNomeMetas] = useState(null);
    const [date, setDate] = useState(null);
    const [activityIndicator, setActivityIndicator] = useState(false);
    const [isModalVisible, setModalVisible] = useState(false);


    const handleCallNotifications = async () => {

        const{ status } = await Notifications.getPermissionsAsync();

        if(status !== 'granted'){
            console.log('Notificações não disponíveis')

            return;
        }

        await Notifications.scheduleNotificationAsync({
            content: {
              title: 'ChronusGram',
              body: `A meta ${NomeMetas} foi adicionada para ${selectedDisc} na data ${date} por um usuário relacionado ao seu... Clique aqui para ver`,
              color: '#73628A',  // Cor da notificação (pode não ser suportada em todas as plataformas)
              sound: true,       // Valor booleano indicando se deve reproduzir um som ou não
            },
            trigger: {
              seconds: 1,
            },
          });
          
    }    
  
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

    async function envia(json){
      try{
          let response = await userApi.insertTarefas(json);
          console.log("foi")
      }catch(error){
          console.log(error)
      }
    }

    function updateDados(){
      const objeto = {
        selectedDisc: selectedDisc,
        NomeMetas: NomeMetas,
        Date: date
    };
      const dadosJSON = JSON.stringify(objeto,null,2)
      envia(dadosJSON)
    }
  
    function handlerDados() {
        setActivityIndicator(true);
        setTimeout(() => {
          try{
            updateDados()
            handleCallNotifications()
            setActivityIndicator(false);
            setModalVisible(true)  
          }catch(error){
            console.log(error)
          }
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
    
            <TouchableOpacity style={styles.button} onPress={() => handlerDados()}>
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
                                          marginHorizontal: 10,}} onPress={() => navigation.navigate('TelaPrincipal',{NomeMetas,date})}>
                            <Text style={{fontFamily:'Josefins-Sans-Bold', marginHorizontal: 40}}>NÃO</Text>
                        </TouchableOpacity>

                    </View>

                </View>
            </Modal>

        </View>

      </View>
    );
  }