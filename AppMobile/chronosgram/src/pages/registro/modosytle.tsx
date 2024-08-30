import { StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create({ 
    container: {
        flex: 1,
        backgroundColor: '#16041B',
      },
      viewImage: {
        marginBottom: Platform.OS === 'android' ? '15%' : '20%',
        marginTop: Platform.OS === 'android' ? '15%' : '15%',
        alignItems:'center',
      },
      imageLogo: {
       width: 190,
       height: 90,
      },
      modoPosition: {
       alignItems:'center',
       bottom:10,
      },
      modoText: {
        color:'#fff',
        fontSize:25,
        fontFamily:'Roboto',
        marginBottom:4
      },
      modoText2: {
        color:'#737373',
        fontSize:13,
        marginTop:2
      },
      modoConteiner: {
        backgroundColor: '#F5F5F5',
        width: '90%',
        borderRadius: 16,
        padding: 15,
        shadowColor: "#000",
        margin:20,
      },
      checkboxCasual: {
        borderRadius:20,
        top:15,
        left:55,
     },
     checkboxIntensa: {
      borderRadius:20,
      left:55,
      top:14,
     },
     checkboxPuxada:{
      borderRadius:20,
        top:13,
        left:55,
     },
      imageCasual:{
        left:182,
       bottom:5
     },
     conteinerText: {
      color:'#202020',
      left:115,
      fontSize:15,
      fontWeight:'bold',
      bottom:23
    },
    backgroundCasual:{
      backgroundColor:"#929292",
        width:100,
        height:30,
        borderRadius:20,
        alignSelf:"flex-end",
        bottom:160,
        right:7
    },
    backgroundIntensa:{
      backgroundColor:"#929292",
        width:100,
        height:30,
        borderRadius:20,
        alignSelf:"flex-end",
        bottom:135,
        right:7
    },
    backgroundPuxada:{
      backgroundColor:"#929292",
        width:100,
        height:30,
        borderRadius:20,
        alignSelf:"flex-end",
        bottom:107,
        right:7
    },
    textCasual:{
      fontSize:15,
      fontWeight:"bold",
      alignSelf:"center",
      top:4
    },
    textIntensa:{
      fontSize:15,
      fontWeight:"bold",
      alignSelf:"center",
      top:4
    },
    textPuxada:{
      fontSize:15,
      fontWeight:"bold",
      alignSelf:"center",
      top:4
    },
    viewContinuar:{
      backgroundColor:"#9D67E3",
        top:190,
        width:300,
        height:60,
        borderRadius:30,
        alignItems:"center",
        justifyContent:"center",
        alignSelf:"center"
    },
    textContinuar:{
      fontSize: 25,
        color:"#E6E7ED",
    }
    







});

export default styles