import { StyleSheet } from "react-native";
import Constants from 'expo-constants';

const fontePrimaria = 'Josefins-Sans-Bold'
const fundo = "#16041B"
const card = "#76618D"
const secundaria = "#603F74"
const verde = "#52FF00"
const cinza = "#D9D9D9"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#16041B',
      },
      containerStyle:{
        backgroundColor: fundo, 
        paddingTop: Constants.statusBarHeight + 10,
    },
    indicator:{
        backgroundColor: card,
        position: 'absolute',
    },
  });

export default styles