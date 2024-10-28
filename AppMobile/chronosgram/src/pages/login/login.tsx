import { StyleSheet, Text, TouchableOpacity, View, TextInput, Image } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Checkbox from 'expo-checkbox';
import styles from './style';

export default function App() {
  const navigation = useNavigation();
  const [isChecked, setChecked] = useState(false);

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
          style={styles.input} 
        />

        <TextInput 
          placeholder='Senha'
          secureTextEntry 
          style={styles.input} 
        />
      </View>
      <View style={styles.registerConteiner}>
        <Text style={styles.registerText2}>Não possui uma conta?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('registro' as never)}> 
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
        <TouchableOpacity onPress={() => console.log('oi')}>
          <Text style={styles.textoEntrar}>Entrar</Text>
        </TouchableOpacity>
      </View>


      
    </View>
  );
}
