import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#16041B',
        justifyContent: 'center',
        alignItems: 'center',  
    },
    Text: {
        fontFamily: 'Josefins-Sans-Bold',
        fontSize: 20,
        bottom: 100,
    },
    calendario: {
        bottom: 70,
        backgroundColor: '#73628A',
        maxWidth: 400,
        height: 'auto',
        borderWidth: 2,
        borderRadius: 30,
        padding: 10,
    },
    button:{
        backgroundColor: '#73628A',
        alignItems: 'center', 
        justifyContent:'center',  
        width:"70%",
        padding: 20,
        borderRadius: 8,
        bottom: 30,
    },
    alerts: {
        backgroundColor: '#B0A8CB',
        width: "80%",
        height: 70,
        marginTop: 10,
        borderRadius: 10,
        flexDirection: 'row',
    },
    pngAlert: {
        width: '17%',
        height: 50,
        marginTop: 9,
        marginLeft: 10,
    },
    textAlert: {
        fontSize: 22,
        fontFamily: 'Josefins-Sans-Bold',
        alignSelf: 'center',
        marginLeft: 10,
    },
    textDate:{
        fontSize: 25,
        fontFamily: 'Josefins-Sans-Bold',
        alignSelf: 'center',
        marginLeft: 67,
        bottom: 2,
    }
});

export default styles
