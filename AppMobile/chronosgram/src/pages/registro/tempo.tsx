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

        <Image  style ={styles.imageTarde} source={require("./tarde.png")}></Image>

        <Text style = {styles.conteinerText}> Tarde</Text>

      <Image style = {styles.imageNoite} source={require("./noite.png")}></Image>

        <Text style = {styles.conteinerText}> Noite</Text>

        <View style = {styles.backgroundManha}>
          <Text style = {styles.manhaText}>8:00 à 12:00</Text>
        </View>
        <View style = {styles.backgroundTarde}>
          <Text style = {styles.tardeText}>14:00 à 18:00</Text>
        </View>
        <View style = {styles.backgroundNoite}>
          <Text style = {styles.noiteText}>19:00 à 23:00</Text>
        </View>

      </View>











      <View style = {styles.continuarButton}>

      <TouchableOpacity onPress={() => navigation.navigate("registro_modo" as never)}>
        <Text style = {styles.continuarTextButton}>
          Continuar
        </Text>
      </TouchableOpacity>

      </View>
      
    </View>
  );
}
