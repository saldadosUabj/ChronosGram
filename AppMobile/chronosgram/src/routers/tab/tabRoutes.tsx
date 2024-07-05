import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import styles from './styles';

import Main from '../../pages/home/main/main';
import Config from '../../pages/home/config/config';
import Comunidade from '../../pages/home/comunidade/comunidade'
import Perfil from '../../pages/home/perfil/perfil'
import Rotinas from '../../pages/home/rotinas/rotinas';

const Tab = createMaterialBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Tab.Navigator initialRouteName='Main' backBehavior='initialRoute' shifting={false}>
      <Tab.Screen name="Perfil" component={Perfil}/>
      <Tab.Screen name="Main" component={Main} />
      <Tab.Screen name="Rotinas" component={Rotinas} />
      <Tab.Screen name="Comunidade" component={Comunidade} />
      <Tab.Screen name="Config" component={Config} />
    </Tab.Navigator>
  );
}