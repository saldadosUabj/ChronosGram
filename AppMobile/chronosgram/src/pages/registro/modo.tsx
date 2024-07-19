import { StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import { useNavigation} from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import styles from './modosytle';
import Checkbox from 'expo-checkbox';
import { useState } from 'react';


export default function Modo() {

    const navigation = useNavigation();
    const [isChecked, setChecked] = useState(false);
    const [isChecked2, setChecked2] = useState(false);
    const [isChecked3, setChecked3] = useState(false);
  return (
    <View style={styles.container}>

    <View style = {styles.viewImage}>
     <Image style = {styles.imageLogo} source={require("../../../assets/images/logo.png")}></Image>
    </View>


      <View style = {styles.modoPosition}>

      <Text style = {styles.modoText} > Tempo De Estudo </Text>
      <Text style = {styles.modoText2}> Qual vai ser sua meta diária de estudos ?</Text>


      </View>

      <View style = {styles.modoConteiner}>

      <TouchableOpacity>
      <Checkbox  
        style = {styles.checkboxCasual}
        value={isChecked} 
        onValueChange={setChecked} /> 
      </TouchableOpacity>

        <Image style = {styles.imageCasual}source={require('../../../assets/images/nivel1.png')}></Image>

        <Text style = {styles.conteinerText}> Casual </Text>
      
      <TouchableOpacity>

       <Checkbox
        style = {styles.checkboxIntensa}
         value={isChecked2} 
         onValueChange={setChecked2}/>

      </TouchableOpacity>

      <Image style = {styles.imageCasual}source={require('../../../assets/images/nivel2.png')}></Image>

      <Text style = {styles.conteinerText}> Intensa</Text>

        <TouchableOpacity>

          <Checkbox
           style = {styles.checkboxPuxada}
           value={isChecked3} 
           onValueChange={setChecked3}/>

        </TouchableOpacity>

      <Image style = {styles.imageCasual}source={require('../../../assets/images/nivel3.png')}></Image>
        
      <Text style = {styles.conteinerText}> Puxada</Text>
      
      <View  style = {styles.backgroundCasual}>
            <Text style = {styles.textCasual}> 30 minutos</Text>
      </View>

      <View style = {styles.backgroundIntensa}> 
        <Text style = {styles.textIntensa}> 1-2 horas </Text>
      </View>

      <View style = {styles.backgroundPuxada}>
        <Text style = {styles.textPuxada}> 2 horas + </Text>
      </View>

      </View>



      <View style = {styles.viewContinuar}>

      <TouchableOpacity onPress={() => navigation.navigate("registro_universidade" as never)}>
        <Text style = {styles.textContinuar}>
          Continuar
        </Text>
      </TouchableOpacity>

      </View>

    </View>
  );
}
