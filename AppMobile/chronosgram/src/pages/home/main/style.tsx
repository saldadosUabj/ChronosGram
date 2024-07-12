import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#16041B',
      },
    text: {
      color: 'white',
      fontFamily: 'Josefins-Sans-Bold'
    },
    containerHorizontal: {
      flex: 1,
      flexDirection: 'row',
      padding: 20,
      marginVertical: 30,
      justifyContent: 'space-around',
    },
    containerVertical: {
      flex: 1,
      marginHorizontal: 30,
    }
  });

export default styles