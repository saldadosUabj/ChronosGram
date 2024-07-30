import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Main from '../../pages/home/main/main';
import Rotinas from '../../pages/home/rotinas/rotinas';

const Tab = createMaterialTopTabNavigator();


export default function TopTabRoutes(){
    return(
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Main} />
            <Tab.Screen name="Rotinas" component={Rotinas} />
        </Tab.Navigator>
    )
}