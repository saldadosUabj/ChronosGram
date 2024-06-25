import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text:{
        fontFamily: 'Josefins-Sans-Bold',
        alignItems: 'flex-start',
        marginLeft: 48,
        fontSize: 25,
        color: 'white',
        marginTop: 40,
        marginBottom: 20,
    },
    retangulo: {
        alignSelf: 'center',
        width: 300,        // Largura do retângulo
        height: 180,       // Altura do retângulo
        backgroundColor: '#73628A',  // Cor de fundo do retângulo
        borderRadius: 15,    // Cor da borda (opcional)
      },
    textStyle:{
        fontFamily: 'Josefins-Sans-Bold',
        color: "white",
    },
    inputSelectdBox: {
        color: 'white',
        width: '80%',
        height: 'auto',
        alignSelf: 'center',
        backgroundColor: '#73628A',
        marginTop: 15,
        marginHorizontal: 10,
        padding: 20,
      },
    inputBox: {
        width: '85%',
        height: 'auto',
        alignSelf: 'center',
        borderRadius: 15,
        backgroundColor: '#73628A',
        marginTop: 18,
        marginHorizontal: 10,
        padding: 15,
    },
    buttonEntrar:{
        width:'70%' , 
        backgroundColor: '#73628A',
        alignSelf: 'center',
        alignItems: 'center',
        marginTop: 200,
        borderRadius: 8,
        padding: 5,
    },
    buttonText:{
        color:'#fff',
        fontFamily: 'Josefins-Sans-Bold',
        fontSize:20,
        padding:10,
    },
});

export default styles
