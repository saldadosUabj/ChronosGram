import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from './styles';

import Main from '../../pages/home/main/main';
import Config from '../../pages/home/config/config';
import Comunidade from '../../pages/home/comunidade/comunidade'
import Perfil from '../../pages/home/perfil/perfil'
import Rotinas from '../../pages/home/rotinas/rotinas';

const Tab = createMaterialBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Tab.Navigator
        initialRouteName="Main"
        shifting={true}
        barStyle={styles.tabBar}
        labeled={true}>

        <Tab.Screen 
          name="Perfil" 
          component={Perfil} 
          options={{
            tabBarLabel: 'Perfil',
            tabBarIcon: () => (<MaterialCommunityIcons name="account" color={"white"} size={26} />),}}/>

        <Tab.Screen 
          name="Main" 
          component={Main} 
          options={{
            tabBarLabel: 'Main',
            tabBarIcon: () => (<MaterialCommunityIcons name="home" color={"white"} size={26}/>),}}/>

        <Tab.Screen 
          name="Rotinas" 
          component={Rotinas} 
          options={{
            tabBarLabel: 'Rotinas',
            tabBarIcon: () => (<MaterialCommunityIcons name="calendar" color={"white"} size={26}/>),}}/>

        <Tab.Screen 
          name="Comunidade" 
          component={Comunidade} 
          options={{
            tabBarLabel: 'Comunidade',
            tabBarIcon: () => (<MaterialCommunityIcons name="account-group" color={"white"} size={26}/>),}}/>
            
        <Tab.Screen 
          name="Config" 
          component={Config} 
          options={{
            tabBarLabel: 'Config',
            tabBarIcon: () => (<MaterialCommunityIcons name="cog" color={"white"} size={26}/>),}}/>
            
      </Tab.Navigator>
  );
}