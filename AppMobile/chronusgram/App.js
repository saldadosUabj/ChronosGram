import { Image, StyleSheet,  View } from 'react-native';
import { useFonts } from 'expo-font';
import Routes from './scr/Routers';

export default function App() {

  
  const [fontsLoaded] = useFonts({
    "Nunito-Sans": require("./assets/fonts/NunitoSans.ttf"),
    "Nunito-Sans-Italic": require("./assets/fonts/NunitoSans-Italic.ttf"),
    "Josefins-Sans": require("./assets/fonts/JosefinsSans.ttf"),
    "Josefins-Sans-Italic": require("./assets/fonts/JosefinSans-Italic.ttf"),
    "Josefins-Sans-Bold": require("./assets/fonts/JosefinSans-Bold.ttf"),
  })

  if (!fontsLoaded) {
    <View style={styles.container}>
       <Image style={styles.logo} source={require('./assets/logo.png')}/>
    </View>
    return;
  }
  
  return (
    <View style={styles.container}>
      <Routes />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#16041B',
  },
  logo:{
    alignContent: 'center',
    alignSelf: 'center',
    marginVertical: 280
  }
});
