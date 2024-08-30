import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { TextInput } from 'react-native-paper';
import { Feather } from '@expo/vector-icons';
import styles from './style';
import BotaoContinuar from '../../elementos/botaoContinuar/botaoContinuar';

export default function App() {
  const navigation = useNavigation();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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
        />

        <TextInput 
          style={styles.input} 
          placeholder='Email' 
          mode="outlined" 
          placeholderTextColor="#999" 
          outlineColor="#E0E0E0" 
          activeOutlineColor="#9D67E3" 
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
        onPress={() => navigation.navigate("registro_tempo" as never)}
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
