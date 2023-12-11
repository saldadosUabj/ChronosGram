import React, { useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import {Text, TextInput, View, TouchableOpacity, ScrollView, Alert, Vibration} from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list'
import styles from './style';
import UserAPI from '../../../services/userAPI'

export default function Form(){

    const userApi = new UserAPI();
    const navigation = useNavigation();
    const route = useRoute();

    const nome = route.params?.nome
    const email = route.params?.email
    const senha = route.params?.senha
    const curso = route.params?.curso
    const turno = route.params?.turno
    
    const [horario_livre, setHorarioLivre] = useState(null)
    const [freeTimeStyle, setFreeTimeStyle] = useState(null)

    const dataUser = {
        id: 5,
        nome: nome,
        email: email,
        senha: senha,
        turno_livre: turno,
    }

    async function RegisterSend() {
        try {
            if (!horario_livre || !freeTimeStyle) {
                Vibration.vibrate()
                Alert.alert('Por favor, preencha todos os campos.')
                throw new Error('Por favor, preencha todos os campos.');
            }else{
                const response = await userApi.addUser(dataUser);
                console.log(response.status)
                console.log(response.data)
                if(response.status == 200){
                    navigation.navigate('TelaPrePrincipal')
                }else{
                    throw new Error('Erro ao registrar usuário');
                }
            }
        } catch (error) {
            console.error(error);
            Alert.alert('Erro ao registrar usuário:', error.message);
            Vibration.vibrate();
        }
    }   
    
    const data_horario = [
        { key: 'manhã', value: 'Manhã' },
        { key: 'tarde', value: 'Tarde' },
        { key: 'noite', value: 'Noite' },
    ]

    const data_freeTime = [
        { key: 'equilibrada', value: 'Equilibrada' },
        { key: 'variada', value: 'Variada' },
        { key: 'intensa', value: 'Intensa' },
    ]
    
    return(
        <ScrollView>
           <View style={styles.boxTop}>
            <Text style={styles.Login}> Informações Adicionais </Text>
            <SelectList 
                boxStyles={styles.inputSelectdBox}
                dropdownStyles={styles.inputBox}
                data={data_horario}
                setSelected={setHorarioLivre}
                value={horario_livre}
                placeholder='Horário Livre'/>
            <SelectList
                boxStyles={styles.inputSelectdBox}
                dropdownStyles={styles.inputBox}
                data={data_freeTime}
                setSelected={setFreeTimeStyle}
                value={freeTimeStyle}
                placeholder='Free Time Style'/>
            <TouchableOpacity style={styles.buttonEntrar} onPress={() => RegisterSend()}>
                <Text style={styles.buttonText}> Registrar </Text>
            </TouchableOpacity>            
            </View>
            <View style={styles.boxBottom}>
                <Text style={styles.comment}>Já possui uma conta?</Text>
                <Text style={styles.registrar} onPress={() => navigation.navigate('TelaDeLogin')}> Entrar </Text>
           </View>
        </ScrollView>
    )
}

// navigation.navigate('TelaPrePrincipal')