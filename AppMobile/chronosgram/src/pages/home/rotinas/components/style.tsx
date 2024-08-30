import { Dimensions, StyleSheet } from "react-native";

const screenWidth = Dimensions.get('window').width

const fonte = "Josefins-Sans-Bold"
const primaria = "#16041B"
const card = "#73628A"
const secundaria = "#603F74"
const verde = "#52FF00"
const cinza = "#D9D9D9"

const styles = StyleSheet.create({
    container: {
      marginTop: 10, 
      backgroundColor: '#603F74',
      borderRadius: 10,
      margin: 10,
    },
    header: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        marginBottom: 2,
      },
    profileImage:{
        height: 30,
        width: 30,
        borderRadius: 15,
    },
    nomeUsuario:{
        fontFamily: fonte,
        fontSize: 16,
        paddingLeft: 10,
        fontWeight: '600',
        color: 'white'
    },
    content:{
        height: 350,
        width: screenWidth,
        backgroundColor: primaria,
        alignItems: 'center',
        justifyContent: 'center',
    },
    texto:{
        fontFamily: fonte,
        flexDirection: 'column',
        color: 'white',
    },
    viewBotao:{
      flexDirection: 'row',
      padding: 10,
      justifyContent: 'space-around'
    },
    botao:{
        height: 28,
        width: 28,
    }   
  });

export default styles