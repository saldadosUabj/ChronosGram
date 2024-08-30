import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#16041B',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  viewImage: {
    marginBottom: Platform.OS === 'android' ? 20 : 30,
    alignItems: 'center',
  },
  imageLogo: {
    width: 190,
    height: 90,
  },
  registerForm: {
    width: '100%',
    marginTop: 20,
  },
  input: {
    backgroundColor: '#E6E7ED',
    marginBottom: 15,
    borderRadius: 8,
    paddingVertical: 5,  // Ajuste de padding vertical
    paddingHorizontal: 1, // Ajuste de padding horizontal
    
  },
  passwordContainer: {
    position: 'relative',
    width: '100%',
  },
  toggleIcon: {
    position: 'absolute',
    right: 10,
    top: 25,
  },
  viewContinuar: {
    marginTop: 20,
    alignItems: 'center',
    backgroundColor: '#9D67E3',
    width: '100%',
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
  },
  textoContinuar: {
    color: '#FFFFFF',
    fontSize: 20, // Ajuste no tamanho da fonte
  },
  loginConteiner: {
    marginTop: 30,
    alignItems: 'center',
  },
  loginTouchable: {
    width: '100%', // Ajusta a área de clique
    alignItems: 'center',
  },
  textoLogin: {
    color: '#fff',
    marginBottom: 5,
    textAlign: 'center',
  },
  textoLogin2: {
    color: '#B075FF',
  },
});

export default styles;
