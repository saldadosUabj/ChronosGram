import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from './styles';

import Main from '../../pages/home/main/main';
import Config from '../../pages/home/config/config';
import Comunidade from '../../pages/home/comunidade/comunidade';
import Perfil from '../../pages/home/perfil/perfil';
import Rotinas from '../../pages/home/rotinas/rotinas';
import TopTabRoutes from '../topTab/topTabRoutes';
import TopTabAtividades from '../topTabAtividades/topTabatividades';

const Tab = createMaterialBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Tab.Navigator
      initialRouteName="Main"
      backBehavior="initialRoute"
      shifting={true}
      barStyle={styles.tabBar}
      labeled={false}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName: keyof typeof MaterialCommunityIcons.glyphMap; // Ajuste para garantir a tipagem correta
          let iconColor = focused ? '#4B0082' : '#A9A9A9'; // Roxo escuro quando selecionado, cinza quando não

          if (route.name === 'Main') {
            iconName = 'home';
          } else if (route.name === 'Rotinas') {
            iconName = 'calendar';
          } else if (route.name === 'Perfil') {
            iconName = 'cog';
          } // Adicione mais condições se tiver outras telas

          return (
            <MaterialCommunityIcons
              name={iconName}
              color={iconColor}
              size={26}/>
          );
        },
      })}
    >
      <Tab.Screen 
        name="Main" 
        component={TopTabRoutes} 
        options={{
          tabBarLabel: 'Main',
        }} 
      />

      <Tab.Screen 
        name="Rotinas" 
        component={TopTabAtividades} 
        options={{
          tabBarLabel: 'Rotinas',
        }} 
      />
          
      <Tab.Screen 
        name="Perfil" 
        component={Perfil} 
        options={{
          tabBarLabel: 'perfil',
        }} 
      />
    </Tab.Navigator>
  );
}
