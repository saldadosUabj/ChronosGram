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
        width:302,
        height:170,
        left:50,
        marginTop:90,
        borderRadius:13,
      },
      imageManha:{
            left:195,
            top:32,
      },
      conteinerText: {
        color:'#202020',
        padding:15,
        alignItems:'center',
        left:115,
        fontSize:15,
        fontWeight:'bold'
      }
    });

    
export default styles