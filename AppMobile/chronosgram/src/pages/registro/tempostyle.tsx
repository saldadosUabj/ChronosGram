import { StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#16041B',
    paddingHorizontal: 20,
  },
  viewImage: {
    marginBottom: '15%',
    marginTop: '15%',
    alignItems: 'center',
  },
  imageLogo: {
    width: 190,
    height: 90,
  },
  tempoPosition: {
    alignItems: 'center',
    marginBottom: 10,
  },
  tempoText: {
    color: '#FFFFFF',
    fontSize: 28,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
  },
  tempoPosition2: {
    alignItems: 'center',
    marginBottom: 20,
  },
  tempoText2: {
    color: '#A1A1A1',
    fontSize: 15,
    fontFamily: 'Roboto',
    textAlign: 'center',
    paddingHorizontal: 10,
  },
  tempoConteiner: {
    backgroundColor: '#F5F5F5',
    width: '100%',
    borderRadius: 16,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    padding: 10,
    borderRadius: 10,
  },
  selectedOption: {
    backgroundColor: '#D1C4E9',
  },
  imageOption: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    marginRight: 10,
  },
  optionText: {
    color: '#202020',
    fontSize: 16,
    fontWeight: 'bold',
    flex: 1,
  },
  optionTime: {
    color: '#929292',
    fontSize: 13,
    fontWeight: 'bold',
  },
  continuarButton: {
    backgroundColor: "#9D67E3",
    marginTop: 40,
    width: '100%',
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  continuarTextButton: {
    fontSize: 20,
    color: "#E6E7ED",
    fontWeight: 'bold',
  },
});

export default styles;
