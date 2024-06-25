import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
      justifyContent: 'center',
      alignItems: 'center',  
    },
    button:{
      color: 'white',
      backgroundColor: '#73628A',
      alignItems: 'center', 
      justifyContent:'center',  
      width:"70%",
      padding: 20,
      borderRadius: 8,
      marginBottom: 25,
  },
  buttonText:{
    color: 'white',
    fontFamily: 'Josefins-Sans-Bold',
  },
    perfil:{
      width: 135,
      height: 135,
      borderRadius: 135,
      marginBottom: 30,
      marginTop: 30,
    },
    text:{
      color: 'white',
      fontFamily: 'Josefins-Sans-Bold',
      fontSize: 14,
    },
    textUniversidade:{
      color: 'white',
      fontSize: 14,
      fontFamily: 'Josefins-Sans-Bold',
      marginBottom: 40,
    },
    sair:{
      color:'#73628A',
      fontFamily:'Nunito-Sans',
      fontWeight:'bold',
      fontSize: 20,
      marginTop: 90,
  },
});

export default styles
