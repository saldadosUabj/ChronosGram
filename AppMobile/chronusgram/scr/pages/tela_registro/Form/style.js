import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    buttonText:{
        color:'#fff',
        fontFamily:'Nunito-Sans',
        fontWeight:'bold',
        fontSize:20,
        padding:10,
    },
    buttonEntrar:{
        backgroundColor: '#73628A',
        alignContent: 'center',
        alignItems: 'center',
        marginTop: 50,
        borderRadius: 30,
        marginRight: 50,
        marginLeft: 15,
        padding: 10,
    },
    boxTop:{
        width:'100%',
        height:'auto',
        // backgroundColor:'#A3A8C9',
        marginHorizontal: 20,        
    },
    boxBottom:{
        // backgroundColor:'#fff',
        marginVertical: 40,
        marginHorizontal: 50,
        alignItems: 'center',
        padding: 10,
    },
    comment:{
        color:'#ffff',
        fontFamily:'Nunito-Sans',
    },
    registrar:{
        color:'#73628A',
        fontFamily:'Nunito-Sans',
        fontWeight:'bold',
        fontSize: 20,
    },
    Login:{
        fontSize: 30,
        fontFamily:'Nunito-Sans',
        fontWeight:'bold',
        color:'#ffff'
    },
    inputBox:{
        width: '85%',
        height: 'auto',
        borderRadius: 15,
        backgroundColor: '#E6E7ED',
        marginTop: 15,
        marginHorizontal: 10,
        padding: 15,
    },
    inputBoxWithvalue: {
        width: '85%',
        height: 'auto',
        borderRadius: 15,
        backgroundColor: '#E6E7ED',
        marginTop: 15,
        marginHorizontal: 10,
        padding: 15,
        borderColor: 'black', 
        borderWidth: 1, 
      },
      inputSelectdBox:{
        width: '85%',
        height: 'auto',
        backgroundColor: '#E6E7ED',
        marginTop: 15,
        marginHorizontal: 10,
        padding: 10,
      },
      inputSelectdBoxDropdown: {
        width: '85%',
        height: 'auto',
        backgroundColor: '#E6E7ED',
      },                
  });

export default styles