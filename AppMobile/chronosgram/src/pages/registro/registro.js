import React, { useState, useContext } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { TextInput } from 'react-native-paper';
import { Feather } from '@expo/vector-icons';
import { getFirestore, doc, getDoc } from 'firebase/firestore'; // Para Firestore
import styles from './style';
import BotaoContinuar from '../../elementos/botaoContinuar/botaoContinuar';
import { AuthContext } from "../../contexts/auth";
import { auth } from '../../firebase/firebase';

export default function App() {
  const navigation = useNavigation();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { register } = useContext(AuthContext);

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


  function validateForm(){
    if (!username) {
      Alert.alert('Erro', 'Por favor, insira um username.');
      return false;
    }
    if (!email) {
      Alert.alert('Erro', 'Por favor, insira um email.');
      return false;
    }    
    if (!emailRegex.test(email)) {
      Alert.alert('Erro', 'Por favor, insira um email válido.');
      return false;
    }
    if (!password) {
      Alert.alert('Erro', 'Por favor, insira uma senha.');
      return false;
    }
    if (password.length < 6) {
      Alert.alert('Erro', 'A senha deve ter pelo menos 6 caracteres.');
      return false;
    }
    if (password !== passwordConfirm) {
      Alert.alert('Erro', 'As senhas não coincidem.');
      return false;
    }
    return true;
  };

  async function handleRegister(){
    try {
      await register(email, password, username);
      Alert.alert("Sucesso", "Usuário registrado com sucesso!");
      navigation.navigate('registro_tempo', {username, email, password});
    } catch (error) {
      Alert.alert("Erro", error.message);
    }
  };

  const handleContinue = () => {
    if (validateForm()) {
      handleRegister();
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.viewImage}>
        <Image source={require('../../../assets/images/logo.png')} style={styles.imageLogo} />
      </View>

      <View style={styles.registerForm}>
        <TextInput 
          style={styles.input} 
          placeholder='Username' 
          mode="outlined" 
          placeholderTextColor="#999" 
          outlineColor="#E0E0E0" 
          activeOutlineColor="#9D67E3" 
          value={username}
          onChangeText={setUsername}
        />

        <TextInput 
          style={styles.input} 
          placeholder='Email' 
          mode="outlined" 
          placeholderTextColor="#999" 
          outlineColor="#E0E0E0" 
          activeOutlineColor="#9D67E3" 
          value={email}
          onChangeText={setEmail}
        />

        <View style={styles.passwordContainer}>
          <TextInput 
            style={styles.input} 
            placeholder='Senha' 
            secureTextEntry={!showPassword} 
            mode="outlined" 
            placeholderTextColor="#999" 
            outlineColor="#E0E0E0" 
            activeOutlineColor="#9D67E3" 
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity 
            style={styles.toggleIcon} 
            onPress={() => setShowPassword(!showPassword)}>
            <Feather 
              name={showPassword ? "eye-off" : "eye"} 
              size={20} 
              color="black" 
            />
          </TouchableOpacity>
        </View>

        <View style={styles.passwordContainer}>
          <TextInput 
            style={styles.input} 
            placeholder='Confirmar Senha' 
            secureTextEntry={!showConfirmPassword} 
            mode="outlined" 
            placeholderTextColor="#999" 
            outlineColor="#E0E0E0" 
            activeOutlineColor="#9D67E3" 
            value={passwordConfirm}
            onChangeText={setPasswordConfirm}
          />
          <TouchableOpacity 
            style={styles.toggleIcon} 
            onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
            <Feather 
              name={showConfirmPassword ? "eye-off" : "eye"} 
              size={20} 
              color="black" 
            />
          </TouchableOpacity>
        </View>
      </View>

      <BotaoContinuar
        onPress={handleContinue}
        text="Continuar"
      />

      <View style={styles.loginConteiner}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.loginTouchable}>
          <Text style={styles.textoLogin}>Já tem uma conta?  
            <Text style={styles.textoLogin2}> Log in</Text> 
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
