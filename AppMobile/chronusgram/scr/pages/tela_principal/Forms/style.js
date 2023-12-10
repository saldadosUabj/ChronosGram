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
    Confirma: {
        width: 20,
        height:20,
        top:20,
        left:40
    },

     Advert: {
         width: 20,
         height:20,
         top:1,
        left:100
     },
    X: {
        width: 20,
        height:20,
        bottom:19,
        left:170
    },
    Relojo: {
        width: 15,
        height:15,
        bottom:25,
        left:170
    },
    Perfil: {
        width: 20,
        height:20,
        top:13,
        left:40
    },
    Casa: {
        width: 50,
        height:30,
        bottom: 12.5,
        left:130
    },
    Config: {
        width: 20,
        height:20,
        bottom: 35,
        left:253
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
    Titulo7: {
        width: 94,
        height: 19,
        top: 51,
        left: 100,
        color: '#E6E7ED'
    },
    Titulo8: {
        width: 94,
        height: 19,
        left: 20,
        bottom:10,
        color: '#E6E7ED'
    },
    Titulo9: {
        width: 94,
        height: 19,
        left: 190,
        bottom: 30,
        color: '#E6E7ED'
    },
    CaixaPrimeiraDcima: {
        width: 320,
        height: 45,
        bottom: 600,
        borderRadius: 10,
        backgroundColor:'#73628A',
        zIndex:2,
    },
    CaixaDeCima: {
        width: 259,
        height: 117,
        bottom: 340,
        right:10,
        borderRadius: 8,
        backgroundColor:'#73628A',
        zIndex:2,
    },
    CaixaAbaixoDcima: {
        width: 219,
        height: 55,
        bottom: 355,
        right:10,
        borderRadius: 20,
        backgroundColor:'#B0A8CB',
        zIndex: 1,
        
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