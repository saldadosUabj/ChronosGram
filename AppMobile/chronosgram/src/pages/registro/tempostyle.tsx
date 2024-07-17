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
      tempoPosition: {
       alignItems:'center',
       bottom:10
      },
      tempoText: {
        color:'#fff',
        fontSize:25,
        fontFamily:'Roboto'
      },
      tempoPosition2: {
        alignItems:'center',
      },
      tempoText2: {
        color:'#737373',
        fontSize:13
      },
      tempoConteiner: {
        backgroundColor:'#E6E7ED',
        width:320,
        height:170,
        left:50,
        marginTop:90,
        borderRadius:13,
      },
      imageManha:{
            left:182,
            top:22,
      },
      conteinerText: {
        color:'#202020',
        padding:5,
        alignItems:'center',
        left:115,
        fontSize:15,
        fontWeight:'bold'
      },
      imageTarde: {
        left:180,
        top:25
      },
      imageNoite: {
        left:180,
        top:25
      },
      continuarButton:{
        backgroundColor:"#9D67E3",
        top:190,
        width:300,
        height:60,
        borderRadius:30,
        alignItems:"center",
        justifyContent:"center",
        alignSelf:"center"
      },
      continuarTextButton:{
        fontSize: 25,
        color:"#E6E7ED",
      },
      backgroundManha: {
        backgroundColor:"#929292",
        width:100,
        height:30,
        borderRadius:20,
        alignSelf:"flex-end",
        bottom:132,
        right:4
      },
      backgroundTarde: {
        backgroundColor:"#929292",
        width:105,
        height:30,
        borderRadius:20,
        alignSelf:"flex-end",
        bottom:110,
        right:4
      },
      backgroundNoite: {
        backgroundColor:"#929292",
        width:105,
        height:30,
        borderRadius:20,
        alignSelf:"flex-end",
        bottom:90,
        right:3
      },
      manhaText:{
        fontSize:15,
        fontWeight:"bold",
        alignSelf:"center",
        top:4
      },
      tardeText:{
        fontSize:15,
        fontWeight:"bold",
        alignSelf:"center",
        top:3
      },
      noiteText:{
        fontSize:15,
        fontWeight:"bold",
        alignSelf:"center",
        top:3
      }
    });

    
export default styles