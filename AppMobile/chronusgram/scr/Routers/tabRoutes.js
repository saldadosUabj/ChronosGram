// Dependencias //
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { StyleSheet, Image, View } from 'react-native';
import { useRoute } from '@react-navigation/native';
import styles from './styles';

// Importando Telas //
import Home from '../pages/tela_principal/Home/index';
import Configuracao from '../pages/tela_principal/Configuracao';
import Perfil from '../pages/tela_principal/Perfil';

// Função de Renderização
export default function TabRoutes(){

  // Declaração de variáveis //
  const Tab = createMaterialTopTabNavigator();
  const route = useRoute();
  const NomeMetas = route.params?.NomeMetas
  const date = route.params?.date

  console.log(NomeMetas)
  
  // Renderização
  return(
      <View style={styles.container}>

        <Tab.Navigator
          backgroundColor='#76618D'
          initialRouteName="Home" 
          screenOptions={({ route }) => ({
                          tabBarStyle: styles.containerStyle,
                          tabBarIndicatorStyle: styles.indicator,
                          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => {
                        let iconName;
                        if (route.name === 'Perfil') {
                          iconName = focused ? require('../../assets/perfil-de-usuario.png') : require('../../assets/perfil-de-usuario.png');
                        } else if (route.name === 'Home') {
                          iconName = focused ? require('../../assets/botao-home.png') : require('../../assets/botao-home.png');
                        } else if (route.name === 'Configuração') {
                          iconName = focused ? require('../../assets/configuracao.png') : require('../../assets/configuracao.png');
                        }
                        return <Image source={iconName} style={styles.icon} />}})}>

              <Tab.Screen
                name="Perfil"
                component={Perfil}
                initialParams={{ NomeMetas, date }}/>

              <Tab.Screen
                name="Home"
                component={Home}
                initialParams={{ NomeMetas, date }}/>

              <Tab.Screen
                name="Configuração"
                component={Configuracao}
                initialParams={{ NomeMetas, date }}/>

        </Tab.Navigator>

      </View>
    )
}  