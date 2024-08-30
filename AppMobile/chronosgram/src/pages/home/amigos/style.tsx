import { StyleSheet } from "react-native";

const primaria = "#121212"; // Cor de fundo escura
const card = "#1E1E1E"; // Cor de fundo do card
const cinza = "#B0B0B0"; // Cinza mais claro

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: primaria,
    paddingLeft:30,
  },
  cardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 10,
    
  },
  card: {
    height: 220,
    width: '48%', // Ajusta a largura dos cards para se ajustarem na tela
    backgroundColor: card,
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: 15,
    marginVertical: 10,
    padding: 10,
  },
});

export default styles;
