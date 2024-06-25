// Dependências //
import React, { useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import {Text, View, TouchableOpacity, ScrollView, Alert, Vibration, ActivityIndicator} from 'react-native';
import { SelectList, MultipleSelectList  } from 'react-native-dropdown-select-list'
import styles from './style';
import UserAPI from '../../../services/userAPI'

// Função de renderização
export default function Form(){

    // Declaração de varíaveis //
    const userApi = new UserAPI();
    const navigation = useNavigation();
    const route = useRoute();
    const [activityIndicator, setActivityIndicator] = useState(false);
    
    const nome = route.params?.nome
    const email = route.params?.email
    const senha = route.params?.senha
    const curso = route.params?.curso
    const turno = route.params?.turno
    
    const [horario_livre, setHorarioLivre] = useState('')
    const [freeTimeStyle, setFreeTimeStyle] = useState(null)
    
    const dataUser = {
        id: 5,
        nome: nome,
        email: email,
        senha: senha,
        turno_livre: turno, // precisa modificar na api para receber horario_livre
    }
    
    const data_freeTime = [
        { key: 'equilibrada', value: 'Equilibrada' },
        { key: 'variada', value: 'Variada' },
        { key: 'intensa', value: 'Intensa' },
    ]

    const data_horario = [
        { key: 'manhã', value: 'Manhã' },
        { key: 'tarde', value: 'Tarde' },
        { key: 'noite', value: 'Noite' },
    ]

    // Funções auxiliares //     
    async function RegisterSend() {
        try {
            
            // LÓGICA DE REGISTRO (Firebase e servidor)
            
            navigation.navigate('TelaPrincipal')
        } catch (error) {
            console.error(error);
            Alert.alert('Erro ao registrar usuário:', error.message);
            Vibration.vibrate();
        }
    }
    
    function handlerValidation() {
        setActivityIndicator(true);
        setTimeout(() => {
          try{
            RegisterSend()
            setActivityIndicator(false);
          }catch(error){
            console.log(error)
          }
        }, 2000);
    }
    
    function getData(turno) {
        const horarios = {
          matutino: [
            { key: '12-14', value: '12h - 14h' },
            { key: '14-16', value: '14h - 16h' },
            { key: '16-18', value: '16h - 18h' },
            { key: '18-20', value: '18h - 20h' },
            { key: '20-22', value: '20h - 22h' },
            { key: '22-24', value: '22h - 24h' },
          ],
          vespetino: [
            { key: '6-8', value: '6h - 8h' },
            { key: '8-10', value: '8h - 10h' },
            { key: '10-12', value: '10h - 12h' },
            { key: '18-20', value: '18h - 20h' },
            { key: '20-22', value: '20h - 22h' },
            { key: '22-24', value: '22h - 24h' },
          ],
          integral: [
            { key: '6-8', value: '6h - 8h' },
            { key: '8-10', value: '8h - 10h' },
            { key: '10-12', value: '10h - 12h' },
            { key: '12-14', value: '12h - 14h' },
            { key: '14-16', value: '14h - 16h' },
            { key: '16-18', value: '16h - 18h' },
            { key: '18-20', value: '18h - 20h' },
            { key: '20-22', value: '20h - 22h' },
            { key: '22-24', value: '22h - 24h' },
          ],
        };
      return horarios[turno] || horarios.integral;
    }
      
    
    // Renderização
    return(
        <ScrollView>

            <View style={styles.boxTop}>

                <Text style={styles.Login}> Informações Adicionais </Text>
                
                <MultipleSelectList
                    boxStyles={styles.inputSelectdBox}
                    dropdownStyles={styles.inputBox}
                    data={getData(turno)}
                    setSelected={(val) => setHorarioLivre(val)}
                    value={horario_livre}
                    placeholder='Horário Livre'/>

                <SelectList
                    boxStyles={styles.inputSelectdBox}
                    dropdownStyles={styles.inputBox}
                    data={data_freeTime}
                    setSelected={setFreeTimeStyle}
                    value={freeTimeStyle}
                    placeholder='Free Time Style'/>
                
                <TouchableOpacity style={styles.buttonEntrar} onPress={() => handlerValidation()}>

                    { activityIndicator?                
                    (<ActivityIndicator size="large" color="#CBC5EA"/>) : 
                    <Text style={styles.buttonText}> Registrar </Text>
                    }

                </TouchableOpacity>

            </View>

            <View style={styles.boxBottom}>

                <Text style={styles.comment}>Já possui uma conta?</Text>

                <Text style={styles.registrar} onPress={() => navigation.navigate('TelaDeLogin')}> Entrar </Text>

           </View>

        </ScrollView>
    )
}