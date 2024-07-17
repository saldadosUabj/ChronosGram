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
      loginPosition:{
       alignItems:'flex-start',
      },
      loginText:{
        color:'#fff',
        marginBottom:20,
        fontSize: 25,
        width:'80%',
        marginLeft:15,
        bottom:5,
        left:3
      },
      loginForm:{
        marginBottom:0,
        padding:6,
        width:'85%',
        marginLeft: 10,
        left:20,
      },
      // checkBoxView:{
      //   backgroundColor:'#16041B',
      //   borderWidth:0,
      //   padding:10,
      //   width:200,
      //   height:100,
      // },
      // checkBox:{
      //     backgroundColor:'transparent'
      // },
      input:{
        backgroundColor:'#E6E7ED',
        marginBottom:17,
        borderRadius:17,
        borderWidth:1,
        borderColor:'#E0E0E0',
        padding:10,
      },
      forgetView:{
        width:'90%',
        alignItems:'flex-end',
        left:10,
        bottom:10,
      },
      forgetText:{
        color:'#B075FF',
        fontSize:12
      },
      buttonEntrar:{
        marginTop:25,
        alignItems:'center',
      },
      textoEntrar:{
          color:'#fff',
          backgroundColor:'#9D67E3',
          fontSize:25,
          borderRadius:20,
          width: 200,
          height:40,
          paddingLeft:65
      },
      registerConteiner:{
        alignItems:'flex-end',
        marginTop:65,
        paddingRight:70,
        flexDirection:'row'
      },
      registerText:{
        color:'#B075FF'
      },
      registerText2:{
        color:'#fff',
        paddingRight:5,
        paddingLeft:80
      },
      continueWith:{
      marginTop:50,
      paddingLeft:60,
      flexDirection:'row'
      },
      continueText:{
        color:'#9D67E3',
        paddingLeft:5,
        paddingRight:5
      },
      retanguleWith:{
        backgroundColor:'#fff',
        width:80,
        height:1,
        marginTop:10,
        paddingLeft:10
      },
      retanguleWith2:{
        backgroundColor:'#fff',
        width:80,
        height:1,
        marginTop:10
      },
      circulosSocial: {
        paddingLeft:30,
        flexDirection:'row'
      },
      facebookImage: {
        width: 50,
        height:50,
        marginTop:20
      },
      circuloFace: {
        backgroundColor: '#707070',
        width: 55,
        height: 55,
        borderRadius: 30,
        opacity:0.3,
        position:'absolute',
        top:20,
        left:30,
        zIndex: -1
      },
      instagramImage: {
        width:50,
        height:50,
        left:90,
        top: 20,
      },
      circuloInsta: {
        backgroundColor: '#707070',
        width: 55,
        height: 55,
        borderRadius: 30,
        opacity:0.3,
        position:'absolute',
        top:20,
        left:170,
        zIndex: -1
      },
      gmailImage:{
        width:60,
        height:60,
        left:160,
        top:15
      },
      circuloGmail: {
        backgroundColor: '#707070',
        width: 55,
        height: 55,
        borderRadius: 30,
        opacity:0.3,
        position:'absolute',
        top:19,
        left:295,
        zIndex: -1
      },
  });




export default styles