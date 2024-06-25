import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor:'#16041B',
        marginTop: 70,
    },
    Logo:{
        width: 200,
        height: 100,
    },
    Card: {
        width: 270,
        height: 130,
        borderRadius: 10,
        alignSelf: 'center',
        shadowColor: '#16041B',
        backgroundColor:'#73628A'
    },
    NomeCadeira: {
        fontFamily: 'Josefins-Sans-Bold',
        width: 94,
        height: 19,
        top: 55,
        left: 100,
        color: '#E6E7ED',
        fontSize: 15,
    },
    HorarioPNG: {
        fontFamily: 'Josefins-Sans-Bold',
        width: 94,
        height: 19,
        left: 20,
        bottom:15,
        color: '#E6E7ED'
    },
    Relojo: {
        width: 15,
        height:15,
        left:170
    },
    Coins: {
        fontFamily: 'Josefins-Sans-Bold',
        width: 94,
        height: 19,
        left: 190,
        bottom: 30,
        color: '#E6E7ED'
    },
    BoxButtons: {
        width: 225,
        height: 55,
        bottom: 20,
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        backgroundColor:'#B0A8CB',
  },
    Confirma: {
        width: 20,
        height:20,        
  },

  Advert: {
        width: 20,
        height:20,
        marginHorizontal: 50,
  },
  X: {
        width: 20,
        height:20,
  },
  Mobilize: {
        flex: 1,
        // backgroundColor: '#fffff', // Pra ficar transparente
        backgroundColor: '#73628A',
        padding: 20,
        borderRadius: 50,
  },
  MobilizeTrilha: {
        flex: 1,
        backgroundColor: '#73628A',
        padding: 10,
        borderRadius: 50,
  },
  View:{
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        margin: 5,
  },
  text: {
        fontSize: 15,
        padding: 5,
        marginVertical: 5,
        fontFamily:'Nunito-Sans',
        fontWeight:'bold',
  },
  Titulo: {
        marginTop: 15,
        // marginLeft: 25,
        alignSelf: 'center',
        fontSize: 30,
        fontStyle:'italic',
        fontWeight: 'bold',
    },
    Titulo2:{
        fontSize: 18,
        fontStyle:'italic',
        color: '#1F2234',
        marginTop: 5,
        marginLeft: 15,
    },
    CaixaDentroEsquerda: {
        width: 159,
        height: 120,
        margin: 15,
        borderRadius: 15,
        backgroundColor:'#FFFFFF'
    },
    CaixaDentroDireita: {
        width: 159,
        height: 120,
        borderRadius: 15,
        backgroundColor:'#603F74'
    },
    Numero:{
        marginLeft: 15,
        fontSize: 45,
        color: '#1F2234',
        fontWeight: 'bold',
        fontFamily: 'Nunito-Sans',
    },
    NumeroContancia:{
        marginLeft: 15,
        fontSize: 45,
        color: '#E6E7ED',
        fontWeight: 'bold',
        fontFamily: 'Nunito-Sans',
    },
    Fogo: {
        marginLeft: 15,
        width: 25,
    },
    Polygon: {
        marginTop: 5,
        marginLeft: 15,
        width: 18,
        height: 18,
    },
    porcentagem:{
        marginLeft: 45,
        bottom: 19,

    }
  });

export default styles