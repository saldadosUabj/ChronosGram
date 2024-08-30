import { StyleSheet } from "react-native";

const primaria = "#121212"; // Cor de fundo escura
const card = "#1E1E1E"; // Cor de fundo do card
const cinza = "#B0B0B0"; // Cinza mais claro
const branco = "#FFFFFF"; // Branco para texto
const destaque = "#BB86FC"; // Cor de destaque (roxo suave)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: primaria,
  },
  card: {
    width: '90%',
    backgroundColor: card,
    borderRadius: 15,
    marginVertical: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 4 },
    elevation: 5,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imagem: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  nome: {
    fontSize: 16,
    fontWeight: 'bold',
    color: branco,
  },
  subInfo: {
    fontSize: 12,
    color: cinza,
  },
  moreIcon: {
    width: 20,
    height: 20,
    tintColor: branco,
  },
  content: {
    marginVertical: 10,
  },
  cursoText: {
    fontSize: 14,
    color: branco,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#333',
    paddingTop: 10,
  },
  sendButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sendIcon: {
    width: 20,
    height: 20,
    tintColor: destaque,
    marginRight: 5,
  },
  sendText: {
    fontSize: 14,
    color: destaque,
  },
});

export default styles;
