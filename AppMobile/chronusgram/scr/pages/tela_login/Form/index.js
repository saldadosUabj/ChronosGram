// Dependências //
import React, { useState } from 'react';
import {Text, TextInput, View, TouchableOpacity, Alert, Vibration, ActivityIndicator } from 'react-native';
import styles from './style';
import { useNavigation} from '@react-navigation/native';
import UserAPI from '../../../services/userAPI';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../services/firebaseConfig';

// Função de renderização // 
export default function Form(){

    const userApi = new UserAPI()
    const navigation = useNavigation();
    const [email, setEmail] = useState()
    const [password, setSenha] = useState()
    const [activityIndicator, setActivityIndicator] = useState(false);

    async function validation(){
        const handleLogin = () => {
            signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        
        const user = userCredential.user;
        console.log("Login Realizado");        
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage)
      });
        }
    }

    // Renderização //    
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
                    value={password}
                    placeholder='Password'
                    secureTextEntry={true}
                    keyboardType='default'/>

                <TouchableOpacity style={styles.buttonEntrar}  onPress={() => validation()} >
                    <Text style={styles.buttonText} onPress={() => navigation.navigate('TelaPrincipal')}> Entrar </Text>
                </TouchableOpacity>

            </View>

            <View style={styles.boxBottom}>

                    <Text style={styles.comment}>Ainda não possui uma conta?</Text>

                    <Text style={styles.registrar} 
                    onPress={() => navigation.navigate('TelaDeRegistro')}> Registrar-se </Text>

                    <Text style={styles.comment_2}>Esqueceu a senha?</Text>

                    <Text style={styles.registrar}> Clique aqui </Text>

           </View>

        </View>
    )
}