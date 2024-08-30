import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import styles from './style';

import Main from '../../pages/home/main/main';
import Rotinas from '../../pages/home/rotinas/rotinas';
import Metas from '../../pages/home/metas/metas';
import Atividades from '../../pages/home/atividades/atividade';
import RotinasAtivas from '../../pages/home/rotinasAtivas/rotinasAtivas';
import MinhaRotina from '../../pages/home/minhasRotinas/MinhaRotina';

const Tab = createMaterialTopTabNavigator();


export default function TopTabAtividades(){
    return(
        <Tab.Navigator
            screenOptions={({}) => ({
                tabBarStyle: styles.containerStyle,
                tabBarIndicatorStyle: styles.indicator,
                tabBarActiveTintColor: 'white',
            })}>
            <Tab.Screen name="Atividade" component={Atividades} />
            <Tab.Screen name="Metas" component={Metas} />
            <Tab.Screen name="Rotinas" component={MinhaRotina} />
            

        </Tab.Navigator>
    )
}