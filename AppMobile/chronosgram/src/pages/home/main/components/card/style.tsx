import { StyleSheet } from "react-native";

const fundo = "#16041B"
const card = "#73628A"
const secundaria = "#603F74"
const verde = "#52FF00"

const styles = StyleSheet.create({
    container: {
        width: 328,
        height: 200,
        borderRadius: 20,
        backgroundColor: card,
      },
    backgroung: {
        flex: 1,
        overflow: 'hidden'
      },
    backgroundImage:{
        borderTopRightRadius: 20, 
        borderTopLeftRadius: 20
    },
    containerHorizontal: {
        borderRadius: 20,
        height: 60,
        flexDirection: "row",
    },
    fundo:{
        flex: 1,
    }
  });

export default styles