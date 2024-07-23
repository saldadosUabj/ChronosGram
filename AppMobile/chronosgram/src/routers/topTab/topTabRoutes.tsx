import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Main from '../../pages/home/main/main';

const Tab = createMaterialTopTabNavigator();


export default function TopTabRoutes(){
    return(
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Main} />
        </Tab.Navigator>
    )
}