import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {Text, TextInput, View, TouchableOpacity, ScrollView, Alert, Vibration} from 'react-native';
import api from '../../../services/Api';
import styles from './style';
import { SelectList } from 'react-native-dropdown-select-list'

export default function Form(){

    // async function register(){
        
    //     const userData = {
    //     nome: 'Generic',
    //     email: email,
    //     senha: senha,
    //     turno_livre: turno,
    //    }
       
    //     try{
    //         if(email != null && senha != null && confirm != null &&
    //            curso != null && turno != null)
    //            {                
    //                 const response = api.post('/user', userData)
    //                 navigation.navigate('TelaDeLogin')
    //            }
            
    //     }catch(error){
    //         Vibration.vibrate()
    //         Alert.alert('Erro' + error)
    //     }
    // }

    const navigation = useNavigation();
    
    const [email, setEmail] = useState(null)
    const [senha, setSenha] = useState(null)   
    const [confirm, setConfirmSenha] = useState(null)
    const [curso, setCurso] = useState(null)
    const [turno, setTurno] = useState(null)

    const data_turno = [
        { key: 'matutino', value: 'Matutino' },
        { key: 'vespetino', value: 'Vespetino' },
        { key: 'integral', value: 'Integral' },
    ]
    
    return(
        <ScrollView>
           <View style={styles.boxTop}>
            <Text style={styles.Login}> Criar uma conta nova </Text>
            <TextInput
                style={styles.inputBox}
                onChangeText={setEmail}
                value={email}
                placeholder='Email'
                keyboardType='default'/>
            <TextInput
                style={styles.inputBox}
                onChangeText={setSenha}
                value={senha}
                secureTextEntry={true}
                placeholder='Password'
                keyboardType='default'/>
            <TextInput
                style={styles.inputBox}
                onChangeText={setConfirmSenha}
                value={confirm}
                secureTextEntry={true}
                placeholder='Confirm Password'
                keyboardType='default'/>
            <TextInput
                style={styles.inputBox}
                onChangeText={setCurso}
                value={curso}
                placeholder='Curso'
                keyboardType='default'/>
            <SelectList 
                boxStyles={styles.inputSelectdBox}
                dropdownStyles={styles.inputBox}
                data={data_turno}
                setSelected={setTurno}
                value={turno}
                placeholder='Turno'/>
            <TouchableOpacity style={styles.buttonEntrar}
             onPress={() => navigation.navigate('TelaDeRegistro2', { email: email, senha: senha, curso: curso, turno: turno })}>

                <Text style={styles.buttonText}> Continuar </Text>
                
            </TouchableOpacity>            
            </View>
            <View style={styles.boxBottom}>
                <Text style={styles.comment}>Já possui uma conta?</Text>
                <Text style={styles.registrar} onPress={() => navigation.navigate('TelaDeLogin')}> Entrar </Text>
           </View>
        </ScrollView>
    )
}