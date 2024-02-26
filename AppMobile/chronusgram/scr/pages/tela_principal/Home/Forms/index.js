import React, { useState, useRef, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity,Image, ScrollView } from 'react-native';
import styles from './style';
import UserApi from '../../../../services/userAPI'
import { useNavigation} from '@react-navigation/native';
import { BlurView } from 'expo-blur';
import { Avatar, Button, Text } from 'react-native-paper';
import { Modalize } from 'react-native-modalize';
import Card from '../Card/index.js';


export default function Form() {

    const navigation = useNavigation();
    const userApi = new UserApi();
    const [dados,setDados] = useState(null);
    const modalizeRef = useRef(null);
    const modalizeRefTrilha = useRef(null);
    const [infos, setInfos] = useState(null);


    async function getDados(){
        let response = await userApi.getInfo(1);
        setDados(response)
    }

    const onOpen = () => {
        modalizeRef.current?.open();
      };

    const onOpenTrilha = () => {
        modalizeRefTrilha.current?.open();
      };

    const openModalFromCard = () => {
        modalizeRef.current?.open();
      };

    useEffect(() => {setInfos(userApi.getInfo())}, []);

    const inforCards = [
        { nomeCadeira: 'Calculo 3' , horario: '20:00' , coins: '20'},
    ]
        

    return (
        <View>

            <ScrollView style={styles.container}>

                {inforCards.map( (inforCards) => (<Card
                                                    key={inforCards.nomeCadeira}
                                                    cadeira={inforCards.nomeCadeira}
                                                    horario={inforCards.horario}
                                                    coins={inforCards.coins}
                                                    onOpenModal={openModalFromCard}/>))}

            </ScrollView>

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

            {/* Modalize das informações da trilha */}

                <Modalize ref={modalizeRefTrilha}
                          modalHeight={300} 
                          snapPoint={150}
                          handleStyle={{backgroundColor: '#73628A', width: 200}}
                          modalStyle={styles.MobilizeTrilha}
                          alwaysOpen={70}>

                    <Text style = {styles.Titulo}>Performance</Text>
                    
                    <View style={styles.View}>

                        <View style = {styles.CaixaDentroEsquerda}>

                            <Text style = {styles.Titulo2}> Ofensiva </Text>
                            <Text style = {styles.Numero}>15</Text>
                            <Image style= {styles.Fogo} source={require('../../../../../assets/Fogo.png')}/>
                            <Text style = {styles.porcentagem}>12%</Text>

                        </View>

                        <View style = {styles.CaixaDentroDireita}>

                            <Text style = {styles.Titulo2}> Constância </Text>
                            <Text style = {styles.NumeroContancia}>70</Text>
                            <Image style = {styles.Polygon} source={require('../../../../../assets/polygon.png')}></Image> 
                            <Text style = {styles.porcentagem}>24%</Text>

                        </View>

                    </View>

                </Modalize>

        </View>
                
    )
}