import { StyleSheet } from "react-native";
import { white } from "react-native-paper/lib/typescript/styles/themes/v2/colors";

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#16041B',


  },
  FirstView: {
    marginTop: 50
  },
  imgMyRoutine: {
    width: 60,
    height: 50,
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10
  },
  imgChooseRoutine: {
    width: 51,
    height: 53
  },
  imgElipse: {
    width: 5,
    height: 5,
    marginTop: 8,
    marginLeft: 10
  },
  imgPerfil: {
    width: 10,
    height: 10,
    marginTop: 5
  },
  Traco: {
    backgroundColor: "white",
    justifyContent: "space-between",
    height: 2,
    marginTop: 10
  },
  TituloRotina: {
    color: "white",
    marginLeft: 10,
    marginRight: 10
  },
  allOfOneRoutine: {
    width: 350,
    height: 100,
    marginTop: 10,
    backgroundColor: "#8663B4",
    justifyContent: "space-between",
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "black",
    borderStyle: "solid",
    borderRadius: 10,
    alignItems: "center",
    marginLeft: 5,
    padding: 15

  },
  PartOfOneRoutineRow: {
    flexDirection: "row",

  },
  PartOfOneRoutineColumn: {
    flexDirection: "column",
    width: 160,
    maxHeight: 40,
    marginBottom: 10
  },
  By: {
    paddingLeft: 5
  },
  myRoutines: {
    justifyContent: "space-between",
    marginLeft: 10

  },
  TitleMyRoutines: {
    color: "white",
    textAlign: "center",

  },
  ChooseRoutine: {
    marginTop: 10,
    justifyContent: "space-between",
    alignItems: "center"


  },
  Button: {
    backgroundColor: "#B8B8B8",
    width: 65,
    height: 40,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    textAlign: "center",
    padding: 10,

  }


});

export default styles