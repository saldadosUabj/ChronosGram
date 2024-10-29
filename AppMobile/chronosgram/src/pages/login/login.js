import { StyleSheet, Text, TouchableOpacity, View, TextInput, Image, Alert } from 'react-native';
import React, { useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../contexts/auth';
import Checkbox from 'expo-checkbox';
import styles from './style';

export default function App() {
  const navigation = useNavigation();
  const { login } = useContext(AuthContext);
  const [isChecked, setChecked] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function validateForm(){
    if(email === '' || password === ''){
      Alert.alert('Preencha todos os campos')
      return false
    }
    return true
  }

  async function handlerLogin(){
    if(validateForm()){
      await login(email, password).then(console.log(navigation.navigate('home')))
    }
  }

  return (
    <View style={styles.container}>

      <View style={styles.viewImage}>
        <Image style={styles.imageLogo} source={require('../../../assets/images/logo.png')} />
      </View>

      {/* Caixa para Login com Google */}
      <View style={styles.googleLoginContainer}>
        <TouchableOpacity style={styles.googleLoginButton} onPress={() => console.log('Login com Google')}>
          <Image style={styles.googleLogo} source={require('../../../assets/images/gmail.png')} />
          <Text style={styles.googleLoginText}>Login com Google</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.loginForm}>
        <TextInput 
          placeholder='Email'
          onChangeText={setEmail} 
          style={styles.input} 
        />

        <TextInput 
          placeholder='Senha'
          secureTextEntry
          onChangeText={setPassword} 
          style={styles.input} 
        />
      </View>
      <View style={styles.registerConteiner}>
        <Text style={styles.registerText2}>Não possui uma conta?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('registro')}> 
          <Text style={styles.registerText}>Registrar-se</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity style={styles.checkBox}>
          <Checkbox  
            style={styles.checkBox2}
            value={isChecked} 
            onValueChange={setChecked} 
          />
          <Text style={styles.checkboxText}>Mantenha-me Conectado</Text>
        </TouchableOpacity>
      </View>
    

      <View style={styles.buttonEntrar}>
        <TouchableOpacity onPress={() => handlerLogin()}>
          <Text style={styles.textoEntrar}>Entrar</Text>
        </TouchableOpacity>
      </View>


      
    </View>
  );
}
