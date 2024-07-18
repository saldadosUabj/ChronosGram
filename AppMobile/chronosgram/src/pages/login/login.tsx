import { StyleSheet, Text, TouchableOpacity, View, TextInput, Image, Platform} from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import styles from './style';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Checkbox from 'expo-checkbox';



export default function App() {

  const navigation = useNavigation();
  const [isChecked, setChecked] = useState(false);

  return (
 

    <View style={styles.container}>
    
    <View style = {styles.viewImage}>
    <Image style = {styles.imageLogo} source={require('../login/logo.png')}></Image>
    </View>

      <View style = {styles.loginPosition}>

      <TouchableOpacity onPress={() => navigation.navigate('home' as never)}> 
        <Text style = {styles.loginText}> Login  </Text>
      </TouchableOpacity>
      </View>

      <View style = {styles.loginForm}>
      <TextInput placeholder='Email'
        style = {styles.input}>
      </TextInput>

      <TextInput placeholder='Senha'
        style = {styles.input}>
      </TextInput>
      </View>

   <View>
    <TouchableOpacity style = {styles.checkBox}>
    <Checkbox  
      style = {styles.checkBox2}
      value={isChecked} 
      onValueChange={setChecked} />
    <Text style = {styles.checkboxText}> Mantenha-me Conectado</Text>
    </TouchableOpacity>
    </View>

    <View style = {styles.forgetView}>
    <TouchableOpacity>
    <Text style = {styles.forgetText}>Esqueceu a senha?</Text>
    </TouchableOpacity>
    </View>
    
    <View style = {styles.buttonEntrar}>

    <TouchableOpacity>
    <Text style = {styles.textoEntrar}> Entrar </Text>
    </TouchableOpacity>
    </View>
    
    
      <View style = {styles.registerConteiner}>
      <Text style = {styles.registerText2}> Não possui uma conta?</Text>
      <TouchableOpacity onPress={() => navigation.navigate('registro' as never)}> 
        <Text style = {styles.registerText}>Registrar-se </Text>
      </TouchableOpacity>
      </View>
      

    <View style = {styles.continueWith}>
        <Text style = {styles.retanguleWith}></Text>
        <Text style = {styles.continueText}> ou continue com</Text>
        <Text style = {styles.retanguleWith2}></Text>
    </View>


    <View style = {styles.circulosSocial}>

        <Image style = {styles.facebookImage} source={require('../login/facebook.png')}></Image>
        <Text style = {styles.circuloFace}></Text>

        <Image style = {styles.instagramImage} source={require('../login/instagram.png')}></Image>
        <Text style = {styles.circuloInsta}></Text>

        <Image style = {styles.gmailImage} source={require('../login/gmail.png')}></Image>
        <Text style = {styles.circuloGmail}></Text>
    </View>

    

    </View>


  );
}