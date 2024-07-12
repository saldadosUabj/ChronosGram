import { StyleSheet } from "react-native";

const fundo = "#16041B"
const secundaria = "#603F74"
const verde = "#52FF00"

const styles = StyleSheet.create({
    container: {
        backgroundColor: secundaria,
        width: 140,
        height: 120,
        borderRadius: 15,
      },
    titulo: {
      color: '#E6E7ED',
      fontFamily: 'Josefins-Sans-Bold',
      fontSize: 20,
      marginTop: 5,
      marginLeft: 10,
    },
    numero: {
      fontSize: 40,
      bottom: 7,
      marginLeft: 3,
      color: verde,
      fontFamily: 'Josefins-Sans-Bold'
    },
    porcentagem: {
      color: verde,
      fontSize: 18,
      marginLeft: 30,
    },
    focus:{
      bottom: 17,
      marginLeft: 10,
      width: 15,
      height: 13,
    }
  });

export default styles