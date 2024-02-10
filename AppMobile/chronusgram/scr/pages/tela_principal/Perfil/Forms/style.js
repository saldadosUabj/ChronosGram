import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
      justifyContent: 'center',
      alignItems: 'center',  
    },
    button:{
      backgroundColor: '#73628A',
      alignItems: 'center', 
      justifyContent:'center',  
      width:"70%",
      padding: 20,
      borderRadius: 8,
      marginBottom: 25,
  },
    perfil:{
      width: 135,
      height: 135,
      borderRadius: 135,
      marginBottom: 30,
      marginTop: 30,
    },
    text:{
      fontSize: 14,
    },
    Lasttext:{
      fontSize: 14,
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
