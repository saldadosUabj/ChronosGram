import { StyleSheet } from "react-native";

const fundo = "#16041B"
const secundaria = "#"

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: 140,
        height: 120,
        borderRadius: 15,
      },
    titulo: {
      color: 'black',
      fontFamily: 'Josefins-Sans-Bold',
      fontSize: 20,
      marginTop: 5,
      marginLeft: 10,
    },
    numero: {
      fontSize: 40,
      bottom: 7,
      marginLeft: 3,
      color: '#A6A8B5',
      fontFamily: 'Josefins-Sans-Bold'
    },
    porcentagem: {
      color: 'red',
      fontSize: 18,
      marginLeft: 30,
    },
    fogo:{
      bottom: 23,
      marginLeft: 6,
    }
  });

export default styles