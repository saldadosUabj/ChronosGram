import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Home from '../pages/tela_principal/Home/index';

const Tab = createMaterialTopTabNavigator();

export default function TabRoutes(){
    return(
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Config" component={Home}/>
        </Tab.Navigator>
    )
}