import { createStackNavigator } from '@react-navigation/stack';
import TabRoutes from './tabRoutes';

import tela_login from '../pages/tela_login/index'
import tela_registro from '../pages/tela_registro/index'
import tela_registro_2 from '../pages/tela_registro_2/index'
import tela_pre_principal from '../pages/tela_pre_principal/index'
import resultados from '../pages/tela_principal_card/index'

const Stack = createStackNavigator();

export default function StackRoutes() {  
  
  return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='TelaDeLogin' component={tela_login}/>
        <Stack.Screen name='TelaDeRegistro' component={tela_registro}/>
        <Stack.Screen name='TelaDeRegistro2' component={tela_registro_2}/>
        <Stack.Screen name='TelaPrincipal' component={TabRoutes}/>
        <Stack.Screen name='TelaPrePrincipal' component={tela_pre_principal}/>
        <Stack.Screen name='resultados' component={resultados}/>
      </Stack.Navigator>      

  );
}
