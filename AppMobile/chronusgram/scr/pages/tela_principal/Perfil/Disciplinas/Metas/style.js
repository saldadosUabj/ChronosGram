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
        fontFamily: 'Josefins-Sans-Bold',
        fontSize: 16,
        marginBottom: 20,
    },
    logo: {
        width: 100,
        height: 100,
        marginBottom: 20,
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
});

export default styles
