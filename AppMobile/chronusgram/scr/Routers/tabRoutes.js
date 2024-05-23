import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { StyleSheet, Image } from 'react-native';
import Constants from 'expo-constants';
import { useRoute } from '@react-navigation/native';


import Home from '../pages/tela_principal/Home/index';
import Configuracao from '../pages/tela_principal/Configuracao';
import Perfil from '../pages/tela_principal/Perfil';

const Tab = createMaterialTopTabNavigator();

export default function TabRoutes(){

  const route = useRoute();
  const NomeMetas = route.params?.NomeMetas
  const date = route.params?.date

  console.log(NomeMetas)

    return(
        <Tab.Navigator 
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
          return <Image source={iconName} style={styles.icon} />;
        },
      })}
    >
            <Tab.Screen
              name="Perfil"
              component={Perfil}
              initialParams={{ NomeMetas, date }}
            />
            <Tab.Screen
              name="Home"
              component={Home}
              initialParams={{ NomeMetas, date }}
            />
            <Tab.Screen
              name="Configuração"
              component={Configuracao}
              initialParams={{ NomeMetas, date }}
            />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    containerStyle:{
        margin:2,
        padding: 3,
        backgroundColor: "#76618D", 
        borderRadius: 12,
        elevation: 5,
        paddingTop: Constants.statusBarHeight + 10,
        paddingBottom: 8
    },
    indicator:{
        backgroundColor: "#CBC5EA",
        position: 'absolute',
        zIndex: -1,
        right: '5%',
        bottom: '5%',
        height: '52%',
        borderRadius: 12,
    },
    icon:{
        alignContent:"center",
        alignItems:'center' , 
        justifyContent: 'flex-start',   
        width:30,
        height: 30,  
    }
  });
  