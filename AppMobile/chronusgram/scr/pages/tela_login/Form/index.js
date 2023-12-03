import React, { useState } from 'react';
import {Text, TextInput, View, Image, TouchableOpacity, Alert, Vibration} from 'react-native';
import styles from './style';
import { useNavigation} from '@react-navigation/native';
import api from '../../../services/api';


export default function Form(){

    async function validation(){
        try{
            const response = await api.get(`/user/${1}`)
            if(email == response.data.email && senha == response.data.senha){
                navigation.navigate('TelaDeRegistro')
                return
            }
            Vibration.vibrate()
            Alert.alert("Usuário Inválido, tente novamente!")            
        }catch(error){
            Vibration.vibrate()
            Alert.alert(error)
        }
    }

    const navigation = useNavigation();

    const [email, setEmail] = useState(null)
    const [senha, setSenha] = useState(null)
    
    return(
        <View>
           <View style={styles.boxTop}>
            <Text style={styles.Login}> Login </Text>
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
                placeholder='Password'
                secureTextEntry={true}
                keyboardType='default'/>
            <TouchableOpacity style={styles.buttonEntrar}  onPress={() => validation()} >
                <Text style={styles.buttonText}> Entrar </Text>
            </TouchableOpacity>            
            </View>
            <View style={styles.boxBottom}>
                <Text style={styles.comment}>Ainda não possui uma conta?</Text>
                <Text style={styles.registrar} 
                onPress={() => navigation.navigate('TelaDeRegistro')}> Registrar-se </Text>
                <Text style={styles.comment_2}>Esqueceu a senha?</Text>
                <Text style={styles.registrar} 
                // onPress={() => validation()}
                > Clique aqui </Text>
           </View>
        </View>
    )
}