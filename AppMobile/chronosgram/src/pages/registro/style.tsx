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
      registerPosition:{
        alignItems:'flex-start',
       },
       registerText:{
         color:'#fff',
         marginBottom:20,
         fontSize: 25,
         width:'80%',
         marginLeft:15,
         bottom:5,
         left:3
       },
       registerForm:{
        marginBottom:0,
        padding:2,
        width:'85%',
        marginLeft: 10,
        left:20,
      },
      input:{
        backgroundColor:'#E6E7ED',
        marginBottom:20,
        borderRadius:13,
        borderWidth:1,
        opacity:0.9
      },
      viewContinuar:{
        alignItems:'center',
        top:110,
      },
      textoContinuar:{
        backgroundColor:'#9D67E3',
        color:'#FFFFFF',
        fontSize:25,
        width: 250,
        height:60,
        borderRadius:20,
        paddingLeft:65,
        paddingTop:10
      },
      loginConteiner:{
        alignItems:'flex-end',
        top:120,
        left:100,
        flexDirection:'row',
        paddingLeft:10
      },
      textoLogin:{
        color:'#fff'
      },
      textoLogin2:{
        color:'#B075FF',
        left:130,
        bottom:19
      }
  });

export default styles