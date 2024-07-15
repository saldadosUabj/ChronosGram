import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { useNavigation} from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import styles from './style';
import { TextInput } from 'react-native-paper';

export default function App() {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>

    <View style = {styles.viewImage}>

    <Image source={require('../registro/logo.png')} style = {styles.imageLogo}></Image>

    </View>


      <View style = {styles.registerPosition}>

      <Text style = {styles.registerText}> Registre-se </Text>
  
      </View>

    <View style = {styles.registerForm}>

    <TextInput style = {styles.input} placeholder='Username'/>

    <TextInput style = {styles.input} placeholder='Email'/>

    <TextInput style = {styles.input} placeholder='Senha' />
    
    <TextInput style = {styles.input} placeholder='Confirmar Senha' />
    </View>
   

    <View style = {styles.viewContinuar}>


      <TouchableOpacity onPress={() => navigation.navigate("registro_tempo" as never)}>
        <Text style = {styles.textoContinuar}>
          Continuar
        </Text>
      </TouchableOpacity>
    </View>

      <View style = {styles.loginConteiner}>

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style = {styles.textoLogin}>Já tem uma conta?</Text>
        <Text style = {styles.textoLogin2}>
          Log in
        </Text>
      </TouchableOpacity>

      </View>
    </View>
  );
}
