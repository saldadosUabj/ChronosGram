import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';

import tela_login from '../../pages/login/login'
import tela_registro from '../../pages/registro/registro'

const Stack = createStackNavigator();

export default function StackRoutes(){
    return(
        <Stack.Navigator initialRouteName="login" screenOptions={{ headerShown: false }}>
            <Stack.Screen name='login' component={tela_login}/>
            <Stack.Screen name='registro' component={tela_registro}/>
        </Stack.Navigator>
    )
}