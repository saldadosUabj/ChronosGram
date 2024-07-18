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
        padding:6,
        width:'85%',
        marginLeft:10,
        left:20,
     
      },
      input:{
        backgroundColor:'#E6E7ED',
        marginBottom:20,
        borderRadius:17,
        borderTopEndRadius:17,
        borderTopLeftRadius:17,
        padding:2,
        bottom:10,
      
      },
      textEmail:{
        color:"#000000",
        fontWeight:"bold",
        bottom:55,
        alignSelf:"flex-start",
        left:10
      },
      senhaInfo:{
        alignSelf:"flex-end",
        bottom:70,
        right:20
      },
      viewContinuar:{
        alignItems:'center',
        top:90,
        alignSelf:"center",
        backgroundColor:'#9D67E3',
        width:300,
        height:60,
        borderRadius:30,
      },
      textoContinuar:{ 
        color:'#FFFFFF',
        fontSize:25,
        top:10
      },
      loginConteiner:{
        alignItems:'flex-end',
        top:100,
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