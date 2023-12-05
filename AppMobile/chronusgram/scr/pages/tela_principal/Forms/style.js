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
    Caixabaixo: {
        width: 350,
        height: 220,
        top: 450,
        borderRadius:20,
        backgroundColor: '#73628A'
    },
    Titulo: {
        width:200,
        top: 24,
        left: 30,
        fontStyle:'italic',
        color: '#FFFBFF'
    },
    Titulo2:{
        width:200,
        bottom: 35,
        left: 30,
        fontStyle:'italic',
        color: '#1F2234'
    },
    Titulo3:{
        width:120,
        bottom: 35,
        fontSize: 45,
        left: 30,
        color: '#1F2234'
    },
    Titulo4: {
        width: 87,
        height: 30,
        top: 8,
        left: 15,
        color: '#E6E7ED'
    },
    Titulo5:{
        width: 118,
        height: 55,
        left: 40,
        fontSize: 45,
        color: '#25D26A'
    },
    Titulo6: {
        width:200,
        top: 5,
        left: 30,
        fontStyle:'italic',
        color: '#1F2234'
    },
    CaixaDentroEsquerda: {
        width: 159,
        height: 117,
        top: 68,
        left: 14,
        borderRadius: 15,
        backgroundColor:'#FFFFFF'

    },
    CaixaDentroDireita: {
        width: 159,
        height: 117,
        top: 316,
        left: 90,
        borderRadius: 15,
        backgroundColor:'#603F74'
    }
  });

export default styles