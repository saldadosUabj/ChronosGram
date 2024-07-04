import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Main from '../../pages/home/main/main';
import Config from '../../pages/home/config/config';
import Comunidade from '../../pages/home/comunidade/comunidade';

const Tab = createMaterialBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Tab.Navigator initialRouteName='Main' backBehavior='initialRoute'>
      <Tab.Screen name="Config" component={Config} />
      <Tab.Screen name="Main" component={Main} />
      <Tab.Screen name="Comunidade" component={Comunidade} />
    </Tab.Navigator>
  );
}