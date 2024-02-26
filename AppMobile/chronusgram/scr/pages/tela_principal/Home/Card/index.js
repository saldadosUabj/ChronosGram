import React from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import styles from './style';
import { useNavigation} from '@react-navigation/native';


export default function Card( {cadeira , horario, coins, onOpenModal, onRemove}) {

    const navigation = useNavigation();

    return (
        <View>

            <View style ={styles.Card}>

                <TouchableOpacity>
                    <Text style={styles.NomeCadeira}> {cadeira} </Text>
                </TouchableOpacity>

                <Text style={styles.HorarioPNG}>
                    <Image style= {styles.Relojo} source={require('../../../../../assets/relojo.png')}/>  {horario}
                </Text>

                <Text style={styles.Coins}> {coins} coins</Text>

            </View>

            <View style = {styles.BoxButtons}>
                <TouchableOpacity onPress={onRemove}>
                   <Image style= {styles.Confirma} source={require('../../../../../assets/confirm.png')}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={onOpenModal}>
                    <Image style= {styles.Advert} source={require('../../../../../assets/adv.png')}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={onRemove}>
                    <Image style= {styles.X} source={require('../../../../../assets/xis.png')}/>
                </TouchableOpacity>
            </View>   

        </View>
                
    )
}