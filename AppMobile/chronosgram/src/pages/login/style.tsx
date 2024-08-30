import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#16041B',
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewImage: {
    marginBottom: Platform.OS === 'android' ? '15%' : '20%',
    alignItems: 'center',
  },
  imageLogo: {
    width: 190,
    height: 90,
  },
  googleLoginContainer: {
    marginBottom: 20,
    width: '85%',
    alignItems: 'center',
  },
  googleLoginButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',  // Fundo branco
    borderRadius: 8,
    padding: 10,
    width: '100%',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#DDDDDD', // Borda cinza claro
  },
  googleLogo: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  googleLoginText: {
    color: '#707070',
    fontSize: 16,
  },
  loginForm: {
    width: '85%',
    marginTop: 20,
  },
  input: {
    backgroundColor: '#E6E7ED',
    marginBottom: 17,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    padding: 15,
    width: '100%',
  },
  checkBox: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
  },
  checkBox2: {
    width: 15,
    height: 15,
  },
  checkboxText: {
    color: '#B075FF',
    fontSize: 15,
    marginLeft: 5,
  },
  buttonEntrar: {
    marginTop: 25,
    alignItems: 'center',
    padding :1,
    height: 100,
  },
  textoEntrar: {
    paddingBottom :1,
    color: '#fff',
    backgroundColor: '#9D67E3',
    fontSize: 25,
    borderRadius: 8,
    width: 350,
    height: 50,
    textAlign: 'center',
    lineHeight: 45,
  },
  registerConteiner: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  registerText2: {
    color: '#fff',
    paddingRight: 5,
  },
  registerText: {
    color: '#B075FF',
  },
});

export default styles;
