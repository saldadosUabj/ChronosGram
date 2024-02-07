import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../pages/tela_principal/Home/index';

const Tab = createBottomTabNavigator();

export default function TabRoutes(){
    return(
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Config" component={Home}/>
        </Tab.Navigator>
    )
}