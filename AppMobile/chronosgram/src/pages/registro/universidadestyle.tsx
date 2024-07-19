import { StyleSheet, Platform } from "react-native";
import Universidade from "./universidade";



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#16041B',
      },
    viewImage:{
        marginBottom: Platform.OS === 'android' ? '15%' : '20%',
        marginTop: Platform.OS === 'android' ? '15%' : '15%',
        alignItems:'center',
    },
    imageLogo:{
     width: 190,
     height: 90,
    },
    universidadePosition:{
        alignItems:'center',
       bottom:10,
    },
    universidadeText:{
        color:'#fff',
        fontSize:25,
        fontFamily:'Roboto',
        marginBottom:4
    },
    universidadeText2:{
        color:'#737373',
        fontSize:13,
        marginTop:2
    },
    viewUni:{
        alignSelf:"center"
    },
    inputUni:{
        color:"#6A6A6A",
        backgroundColor:"#E6E7ED",
        width:"85%",
        alignSelf:"center",
        borderRadius:20,
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        fontSize:11,
        fontWeight:"bold"
    },
    cursoPosition:{
        alignItems:'center',
        top:110
    },
    cursoText:{
        color:'#fff',
        fontSize:25,
        fontFamily:'Roboto',
    },
    cursoText2:{
        color:'#737373',
        fontSize:13,
        marginTop:2
    },
    viewCurso:{
    },
    cursotextHolder:{   
        color:"#6A6A6A",
        backgroundColor:"#E6E7ED",
        width:"85%",
        alignSelf:"center",
        borderRadius:20,
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        fontSize:11,
        fontWeight:"bold" ,
        top:130   
    },
    viewContinuar:{
        backgroundColor:"#9D67E3",
        top:290,
        width:300,
        height:60,
        borderRadius:30,
        alignItems:"center",
        justifyContent:"center",
        alignSelf:"center"
    },
    continuarText:{
        fontSize: 25,
        color:"#E6E7ED",
    },





    
    


    })

    export default styles