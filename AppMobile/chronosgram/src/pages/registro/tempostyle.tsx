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
       checkBox2: {
          borderRadius:20,
          top:20,
          left:55,
       },   
       checkBox3: {
        borderRadius:20,
        top:17,
        left:55,
     },
      checkBox4: {
      borderRadius:20,
      left:55,
      top:7,
    },
      imageManha:{
            left:182,
           bottom:5
      },
      conteinerText: {
        color:'#202020',
        left:115,
        fontSize:15,
        fontWeight:'bold',
        bottom:25
      },
      imageTarde: {
        left:180,
        bottom:5
      },
      imageNoite: {
        left:180,
        bottom:4
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
        bottom:170,
        right:6
      },
      backgroundTarde: {
        backgroundColor:"#929292",
        width:105,
        height:30,
        borderRadius:20,
        alignSelf:"flex-end",
        bottom:140,
        right:6
      },
      backgroundNoite: {
        backgroundColor:"#929292",
        width:105,
        height:30,
        borderRadius:20,
        alignSelf:"flex-end",
        bottom:110,
        right:6
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