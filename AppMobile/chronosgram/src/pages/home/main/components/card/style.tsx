import { StyleSheet } from 'react-native';

const fontePrimaria = 'Josefins-Sans-Bold';
const fundo = '#16041B';
const card = '#2D2D3A';
const secundaria = '#3F3F5A';
const cinza = '#D9D9D9';

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    width: 328,
    height: 200,
    borderRadius: 20,
    backgroundColor: card,
  },
  background: {
    flex: 1,
    overflow: 'hidden',
  },
  backgroundImage: {
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  overlay: { // Novo estilo para a sobreposição escura
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fundo preto com opacidade
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerHorizontal: {
    justifyContent: 'center',
    borderRadius: 20,
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerStatus: {
    backgroundColor: secundaria,
    borderBottomRightRadius: 20,
    width: 150,
    justifyContent: 'flex-start',
    padding: 5,
  },
  instrucaoContainer: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
  },
  footerContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  containerCheckBox: {
    alignSelf: 'center',
    marginLeft: 17,
    width: 30,
    height: 30,
    borderRadius: 8,
    backgroundColor: cinza,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    alignSelf: 'center',
  },
  iconCheck: {
    alignSelf: 'center',
  },
  iconAction: {
    margin: 10,
  },
  actionIconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  imagensMiniaturas: {
    backgroundColor: cinza,
    alignSelf: 'center',
    width: 30,
    height: 30,
    borderRadius: 12,
  },
  textoPrimario: {
    fontFamily: fontePrimaria,
    color: 'white',
    fontSize: 16,
    marginVertical: 15,
    marginHorizontal: 8,
  },
  textoSecundario: {
    fontFamily: fontePrimaria,
    color: 'white',
    alignSelf: 'center',
    fontSize: 14,
  },
});

export default styles;
