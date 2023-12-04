import React, { useState } from 'react';
import {Text, TextInput, View, Image, TouchableOpacity, Alert, Vibration} from 'react-native';
import styles from './style';
import { useNavigation} from '@react-navigation/native';
import UserAPI from '../../../services/userAPI';


export default function Form(){

    const userApi = new UserAPI()
    const navigation = useNavigation();
    const [email, setEmail] = useState(null)
    const [senha, setSenha] = useState(null)

    async function validation(){
        try{
            const user = await userApi.getUserById(1)
            if(email == null || senha == null){
                Vibration.vibrate()
                Alert.alert('Preencha todos os campos')
                return
            }
            else if(email == user.email && senha == user.senha){
                navigation.navigate('TelaDeRegistro')
                setEmail(null)
                setSenha(null)
                return
            }
            Vibration.vibrate()
            setEmail(null)
            setSenha(null)
            Alert.alert("Usuário Inválido, tente novamente!")            
        }catch(error){
            Vibration.vibrate()
            Alert.alert(error)
        }
    }  
    
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