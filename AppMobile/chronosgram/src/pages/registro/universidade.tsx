import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { useNavigation} from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import styles from './universidadestyle';
import { TextInput } from 'react-native-paper';

export default function Universidade() {

    const navigation = useNavigation();

  return (
    <View style={styles.container}>

      <View style = {styles.viewImage}>
       
        <Image style = {styles.imageLogo} source={require("../../../assets/images/logo.png")}></Image>
      </View>

      <View style = {styles.universidadePosition}>

      <Text style = {styles.universidadeText}> Universidade </Text>
      <Text style = {styles.universidadeText2}>Qual a universidade que você faz parte ?</Text>

      </View>

      <View style = {styles.viewUni}>

        <TextInput  placeholder= "Ex: Universidade Federal Rural de Penambuco (UFRPE) "  style = {styles.inputUni}>
        </TextInput>

      </View>


      <View style = {styles.cursoPosition}>

      <Text style = {styles.cursoText}> Curso </Text>
      <Text style = {styles.cursoText2}> Qual o curso você faz na universidade? ?</Text>

      </View>


      <View style = {styles.viewCurso}>
        
      <TextInput placeholder='Ex: Engenharia da Computação' style = {styles.cursotextHolder}>

      </TextInput>

      </View>





      <View style = {styles.viewContinuar}>

      <TouchableOpacity onPress={() => navigation.navigate("home" as never)}>
        <Text style = {styles.continuarText}>
          Continuar
        </Text>
      </TouchableOpacity>

      </View>
    </View>
  );
}
