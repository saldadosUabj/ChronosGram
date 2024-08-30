import { StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#16041B',
    padding: 20,
    justifyContent: 'center', // Centraliza verticalmente
  },
  viewImage: {
    marginBottom: 20,
    alignItems: 'center',
  },
  imageLogo: {
    width: 190,
    height: 90,
  },
  universidadePosition: {
    alignItems: 'center',
    marginBottom: 10,
  },
  universidadeText: {
    color: '#fff',
    fontSize: 25,
    fontFamily: 'Roboto',
    marginBottom: 4,
  },
  universidadeText2: {
    color: '#737373',
    fontSize: 13,
    marginTop: 2,
  },
  viewUni: {
    marginBottom: 20,
    alignItems: 'center',
  },
  picker: {
    color: "#6A6A6A",
    backgroundColor: "#E6E7ED",
    width: "100%",
    borderRadius: 8,
    height: 50,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  cursoPosition: {
    marginBottom: 20,
    alignItems: 'center',
  },
  cursoText: {
    color: '#fff',
    fontSize: 25,
    fontFamily: 'Roboto',
    marginBottom: 4,
  },
  cursoText2: {
    color: '#737373',
    fontSize: 13,
    marginTop: 2,
  },
  viewCurso: {
    marginBottom: 20,
    alignItems: 'center',
  },
  viewContinuar: {
    backgroundColor: "#9D67E3",
    width: "100%",
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 30,
  },
  continuarText: {
    fontSize: 25,
    color: "#E6E7ED",
  },
});

export default styles;
