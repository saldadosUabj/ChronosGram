import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 'auto',
        // backgroundColor:'#fff',
        alignContent: 'center',
        alignItems: 'center',
        marginTop: 120,
        marginBottom: 40,
    },
    Logo:{
        width: 200,
        height: 100,
    },
    Button:{
        width: 50,
        height: 45,
        paddingHorizontal: 10,
        top: 300,
        left:150,
        flexShrink: 0,
        backgroundColor: '#73628A',
        borderRadius: 10
    },
    TextInputBox:{
        backgroundColor: '#E6E7ED',
        marginVertical: 10,
        width: 200,
        height: 40,
        paddingLeft: 10,
        borderRadius: 10,
    },
    TextButton:{
        color:'#FFFF',
        fontWeight:'bold',
        fontSize: 30,
        alignItems: 'center'
    },
    TextButtonBox:{
        color:'#73628A',
        fontWeight:'bold',
        fontSize: 40,
        paddingHorizontal: 2,
        alignItems: 'center'
    },
    TextBox:{
        color: '#FFFF',
        textAlign: 'center',
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 20,
    },
    buttonBox:{
        top: 30,
        backgroundColor: '#cbc5ea',
        borderRadius: 10,
        paddingHorizontal: 12,
    },
    box: {
        alignContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        top: 100,
        borderRadius: 30,
        bottom: 0,
        width: 290,
        minHeight: 300,
        maxHeight: 'auto',
        backgroundColor: '#73628a'
    },
  });

export default styles