import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#222',
        
      },
    text: {
      color: 'white',
      fontFamily: 'Josefins-Sans-Bold'
    },
    containerHorizontal: {
      flex: 1,
      flexDirection: 'row',
      padding: 10,
      marginVertical: 30,

      justifyContent: 'space-around',
    },
    containerVertical: {
      flex: 1,
      marginHorizontal: 30,
      height:450,
    }
  });

export default styles