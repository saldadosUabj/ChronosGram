import React, { useState } from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import styles from './style';
import { useNavigation} from '@react-navigation/native';
import UserAPI from '../../../../services/userAPI';


export default function Card( {cadeira , horario, coins, onOpenModal, onRemove}) {

    const [status, setStatus] = useState(null)
    const navigation = useNavigation();
    const userApi = new UserAPI();

    async function envia(json){
        try{
            let response = await userApi.insertNeuralData(json);
            console.log("foi")
        }catch(error){
            console.log(error)
        }
    }


    function updateDados(status){
        const objeto={
            cadeira: cadeira,
            horario: horario,
            coins: coins,
            status: status
        }
        const dadosJSON = JSON.stringify(objeto,null,2)
        envia(dadosJSON)
    }

    function handlerDados( bolleano ){
        setStatus(bolleano)
        updateDados(status)
        onRemove()
        setStatus(null)
    }

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
                <TouchableOpacity onPress={() => handlerDados(true)}>
                   <Image style= {styles.Confirma} source={require('../../../../../assets/confirm.png')}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={onOpenModal}>
                    <Image style= {styles.Advert} source={require('../../../../../assets/adv.png')}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handlerDados(false)}>
                    <Image style= {styles.X} source={require('../../../../../assets/xis.png')}/>
                </TouchableOpacity>
            </View>   

        </View>
                
    )
}