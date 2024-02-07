import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';


import Home from '../pages/tela_principal/Home/index';

const Tab = createMaterialTopTabNavigator();

export default function TabRoutes(){
    return(
        <Tab.Navigator screenOptions={{
            tabBarStyle: styles.containerStyle,
            tabBarIndicatorStyle: styles.indicator,
            firstRoute:"Home",
            inactiveColor: '#807575', //Cor da aba quando
        }}>
            <Tab.Screen name="Ajustes" component={Home}/>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Configuração" component={Home}/>
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
        paddingTop: Constants.statusBarHeight + 5, 
    },
    indicator:{
        backgroundColor: "#CBC5EA",
        position: 'absolute',
        zIndex: -1,
        bottom: '5%',
        height: '57%',
        borderRadius: 12,
    }
  });
  