import { StyleSheet } from "react-native";

const fontePrimaria = 'Josefins-Sans-Bold'
const fundo = "#16041B"
const card = "#73628A"
const secundaria = "#603F74"
const verde = "#52FF00"

const styles = StyleSheet.create({
    container: {
        width: 328,
        height: 200,
        borderRadius: 20,
        backgroundColor: card,
      },
    backgroung: {
        flex: 1,
        overflow: 'hidden'
      },
    backgroundImage:{
        borderTopRightRadius: 20, 
        borderTopLeftRadius: 20
    },
    containerHorizontal: {
      justifyContent: 'center',    
      borderRadius: 20,
      height: 60,
      flexDirection: "row",
    },
    constainerStatus:{
      backgroundColor: verde,
      borderBottomRightRadius: 20,
      width: 150,
      justifyContent: 'flex-start',
    },
    fundo:{
        flex: 1,
    },
    relogio:{
      width: 25,
      height: 25,
      alignSelf: 'center',
    },
    moeda:{
      marginVertical: 18,
      alignSelf: 'center',
    },
    trofeu:{
      alignSelf: 'center',
      marginLeft: 15,
    },
    miniaturas:{
      margin:10,
    },
    textoPrimario:{
      alignSelf: 'center',
      fontFamily: fontePrimaria,
      color: 'white',
      fontSize: 18,
      marginVertical: 15,
      marginHorizontal: 8,
    },
    textoSecundario:{
      fontFamily: fontePrimaria,
      color: 'white',
      alignSelf: 'center',
      fontSize: 12,
    }
  });

export default styles