import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import Logo from './scr/components/tela_login/logo/index'
import Form from './scr/components/tela_login/Form/index'
import { useFonts } from 'expo-font'


export default function App() {
  
  const [fontsLoaded] = useFonts({
    "Nunito-Sans": require("./assets/fonts/NunitoSans.ttf"),
    "Nunito-Sans-Italic": require("./assets/fonts/NunitoSans-Italic.ttf"),
    "Josefins-Sans": require("./assets/fonts/JosefinsSans.ttf"),
    "Josefins-Sans-Italic": require("./assets/fonts/JosefinSans-Italic.ttf"),
  })
  
  return (
    <View style={styles.container}>
      <Logo/>
      <Form/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#16041B',
  },
});
