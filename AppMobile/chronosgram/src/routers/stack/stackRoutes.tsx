import { createStackNavigator } from '@react-navigation/stack';

import tela_login from '../../pages/login/login'
import tela_registro from '../../pages/registro/registro'
import tabRoutes from '../tab/tabRoutes'
import tela_tempo from "../../pages/registro/tempo"
import tela_modo from "../../pages/registro/modo"
import tela_universidade from "../../pages/registro/universidade";

const Stack = createStackNavigator();

export default function StackRoutes(){
    return(
        <Stack.Navigator initialRouteName="login" screenOptions={{ headerShown: false }}>
            <Stack.Screen name='login' component={tela_login}/>
            <Stack.Screen name='registro' component={tela_registro}/>
            <Stack.Screen name='home' component={tabRoutes}/>
            <Stack.Screen name='registro_tempo' component={tela_tempo}/>
            <Stack.Screen name='registro_modo' component={tela_modo}/>
            <Stack.Screen name='registro_universidade' component={tela_universidade}/>
        </Stack.Navigator>
    )
}