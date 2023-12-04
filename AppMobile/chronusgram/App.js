import { Image, StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import tela_login from './scr/pages/tela_login/index'
import tela_registro from './scr/pages/tela_registro/index'
import tela_registro_2 from './scr/pages/tela_registro_2/index'
import tela_principal from './scr/pages/tela_principal/index'
import tela_pre_principal from './scr/pages/tela_pre_principal/index'

const Stack = createStackNavigator();


export default function App() {
  
  const [fontsLoaded] = useFonts({
    "Nunito-Sans": require("./assets/fonts/NunitoSans.ttf"),
    "Nunito-Sans-Italic": require("./assets/fonts/NunitoSans-Italic.ttf"),
    "Josefins-Sans": require("./assets/fonts/JosefinsSans.ttf"),
    "Josefins-Sans-Italic": require("./assets/fonts/JosefinSans-Italic.ttf"),
  })

  if (!fontsLoaded) {
    <View style={styles.container}>
       <Image style={styles.logo} source={require('./assets/logo.png')}/>
    </View>
    return;
  }
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='TelaDeLogin' component={tela_login} options={{ headerShown: false }}/>
        <Stack.Screen name='TelaDeRegistro' component={tela_registro} options={{ headerShown: false }}/>
        <Stack.Screen name='TelaDeRegistro2' component={tela_registro_2} options={{ headerShown: false }}/>
        <Stack.Screen name='TelaPrincipal' component={tela_principal} options={{ headerShown: false }}/>
        <Stack.Screen name='TelaPrePrincipal' component={tela_pre_principal} options={{ headerShown: false }}/>
      </Stack.Navigator>      
    </NavigationContainer>
    // <View style={styles.container}>
    //   <Logo/>
    //   <Form/>
    // </View>
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
