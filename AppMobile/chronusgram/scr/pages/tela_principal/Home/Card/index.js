import React, { useState, useRef, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity,Image, ScrollView } from 'react-native';
import styles from './style';
import UserApi from '../../../../services/userAPI'
import { useNavigation} from '@react-navigation/native';
import { BlurView } from 'expo-blur';
import { Avatar, Button, Text } from 'react-native-paper';
import { Modalize } from 'react-native-modalize';


export default function Card( {cadeira , horario, coins}) {

    const navigation = useNavigation();
    const userApi = new UserApi();
    const [dados,setDados] = useState(null);
    const modalizeRef = useRef(null);
    const modalizeRefTrilha = useRef(null);
    const [infos, setInfos] = useState(null);


    async function getDados(){
        let response = await userApi.getInfo();
        setDados(response)
    }

    const onOpen = () => {
        modalizeRef.current?.open();
      };

    const onOpenTrilha = () => {
        modalizeRefTrilha.current?.open();
      };

    useEffect(() => {setInfos(userApi.getInfo())}, []);
        

    return (
        <View>

            <View style ={styles.Card}>

                <TouchableOpacity onPress={onOpen}>
                    <Text style={styles.NomeCadeira}> {cadeira} </Text>
                </TouchableOpacity>

                <Text style={styles.HorarioPNG}>
                    <Image style= {styles.Relojo} source={require('../../../../../assets/relojo.png')}/>  {horario}
                </Text>
                <Text style={styles.Coins}> {coins} coins</Text>

            </View>

            <View style = {styles.BoxButtons}>
                <Image style= {styles.Confirma} source={require('../../../../../assets/confirm.png')}/>
                <Image style= {styles.Advert} source={require('../../../../../assets/adv.png')}/>
                <Image style= {styles.X} source={require('../../../../../assets/xis.png')}/>
            </View>   


            {/* Modalize das informações da cadeira */}

            <Modalize ref={modalizeRef}
                      adjustToContentHeight={true}
                      snapPoint={180}
                      handleStyle={{backgroundColor: '#73628A'}}
                      modalStyle={styles.Mobilize}>
                    <View>
                    {infos && (
                        <View style={styles.Mobilize}>
                            <Text style={styles.text}>Nome: {infos.Nome}</Text>
                            <Text style={styles.text}>Status: {infos.Status}</Text>
                            <Text style={styles.text}>Assunto: {infos.Assunto}</Text>
                            <Text style={styles.text}>Material de Estudo: {infos['Material de Estudo']}</Text>
                            <Text style={styles.text}>Tipo: {infos.Tipo}</Text>
                            <Text style={styles.text}>Recomendações: {infos.Recomendações}</Text>
                            <Text style={styles.text}>Qualidade: {infos.Qualidade}</Text>
                            <Text style={styles.text}>Pontuação: {infos.Pontuação}</Text>
                            <Text style={styles.text}>Horário: {infos['Horário']}</Text>
                            <Text style={styles.text}>Prioridade: {infos.Prioridade}</Text>
                            <Text style={styles.text}>Data Início: {infos['Data Início']}</Text>
                            <Text style={styles.text}>Data Final: {infos['Data Final']}</Text>
                            <Text style={styles.text}>Tempo Estimado: {infos['Tempo Estimado']}</Text>
                            <Text style={styles.text}>Posição: {infos.posição}</Text>          
                        </View>
                    )}
                    </View>
                </Modalize>

        </View>
                
    )
}