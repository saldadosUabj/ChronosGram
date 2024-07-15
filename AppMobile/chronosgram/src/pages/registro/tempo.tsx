import { StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import { useNavigation} from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import styles from './tempostyle';

export default function Tempo() {

    const navigation = useNavigation();

  return (
    <View style={styles.container}>

    <View style = {styles.viewImage}>
    
    <Image  style = {styles.imageLogo} source={require('./logo.png')}>

    </Image>
    </View>

      <View style = {styles.tempoPosition}>

      <Text style = {styles.tempoText}> Tempo Livre </Text>
      </View>

      <View style = {styles.tempoPosition2}>
        <Text style = {styles.tempoText2}> Qual a parte do dia você é mais disponível?</Text>
      </View>


      <View style = {styles.tempoConteiner}>

        <Image style = {styles.imageManha}source={require('./manha.png')}></Image>

        <Text style = {styles.conteinerText}> Manhã</Text>


        <Text style = {styles.conteinerText}> Tarde</Text>
        <Text style = {styles.conteinerText}> Noite</Text>
        

      </View>








      <TouchableOpacity onPress={() => navigation.navigate("registro_modo" as never)}>
        <Text>
          Continuar
        </Text>
      </TouchableOpacity>
    </View>
  );
}
