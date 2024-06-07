import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#16041B',
        justifyContent: 'center',
        alignItems: 'center',  
    },
    BoxDisciplinas:{
        width: 350,
        minHeight: 200,
        height: 'auto',
        backgroundColor: '#73628A',
        alignItems: 'center',
        borderRadius: 30,
        shadowColor: '#FFFF', // Sombra branca para modo escuro
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 10, // Somente para Android
    },
    titulo: {
        color: 'white',
        fontFamily: 'Josefins-Sans-Bold',
        fontSize: 16,
        marginBottom: 20,
    },
    text: {
        fontFamily: 'Josefins-Sans-Bold',
        fontSize: 14,
        marginBottom: 10,
    },
    logo: {
        width: 250,
        height: 250,
        marginBottom: -60,
        marginTop: -100,
    },
    inputBox:{
        width: '85%',
        height: 'auto',
        textAlign: 'center',
        borderRadius: 15,
        backgroundColor: '#E6E7ED',
        marginTop: 30,
        marginHorizontal: 10,
        padding: 15,
    },
    button:{
        backgroundColor: '#CBC5EA',
        alignItems: 'center', 
        justifyContent:'center',
        width: 48,
        height: 48,
        borderRadius: 10,
        marginVertical: 20,
  },
    inputSelectdBox: {
        width: 300,
        height: 'auto',
        marginTop: 30,
        borderColor: '#CBC5EA',
        borderWidth: 2,
        alignSelf: 'center',       
    },
    inputSelectdBoxDropdown: {
        maxWidth: 'auto',
        height: 'auto',
        borderColor: '#CBC5EA',
        borderWidth: 2,
    },
    modalContainer: {
        margin: 20,
        backgroundColor: '#CBC5EA',
        borderRadius: 20,
        padding: 20,
        alignItems: 'center',
        shadowColor: '#ffff',
        shadowOffset: {
        width: 0,
        height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalGreenButton:{
        backgroundColor: "#69f",
    }
});

export default styles
