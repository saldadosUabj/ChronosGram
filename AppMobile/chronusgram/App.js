import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import Logo from './scr/pages/tela_login/logo/index'
import Form from './scr/pages/tela_login/Form/index'
import { useFonts } from 'expo-font'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import tela_login from './scr/pages/tela_login/index'
import tela_registro from './scr/pages/tela_registro/index'

const Stack = createStackNavigator();


export default function App() {
  
  const [fontsLoaded] = useFonts({
    "Nunito-Sans": require("./assets/fonts/NunitoSans.ttf"),
    "Nunito-Sans-Italic": require("./assets/fonts/NunitoSans-Italic.ttf"),
    "Josefins-Sans": require("./assets/fonts/JosefinsSans.ttf"),
    "Josefins-Sans-Italic": require("./assets/fonts/JosefinSans-Italic.ttf"),
  })
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='TelaDeLogin' component={tela_login} options={{ headerShown: false }}/>
        <Stack.Screen name='TelaDeRegistro' component={tela_registro} options={{ headerShown: false }}/>
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
});
