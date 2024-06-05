import React, { useState, useRef, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity,Image, ScrollView } from 'react-native';
import styles from './style';
import UserApi from '../../../../services/userAPI'
import { useNavigation} from '@react-navigation/native';
import { BlurView } from 'expo-blur';
import { Avatar, Button, Text } from 'react-native-paper';
import { Modalize } from 'react-native-modalize';
import Card from '../Card/index.js';


export default function Form({ NomeMetas, date }) {

    const navigation = useNavigation();
    const userApi = new UserApi();
    const [dados,setDados] = useState(null);
    const modalizeRef = useRef(null);
    const modalizeRefTrilha = useRef(null);
    const [infos, setInfos] = useState([]);
    const [nome, setNome] = useState('');
    const [assunto, setAssunto] = useState('');
    const [status, setStatus] = useState('');
    const [materialEstudo, setMaterialEstudo] = useState('');
    const [materia, setMateria] = useState('');
    const [tempoAteMeta, setTempoAteMeta] = useState('');
    const [tempoLivreEstudo, setTempoLivreEstudo] = useState('');
    const [tipoMaterial, setTipoMaterial] = useState('');
    const [nota, setNota] = useState('');
    const [tempoEstudado, setTempoEstudado] = useState('');
    const [data_inicio, setDataInicio] = useState('');
    const [recomendacao, setRecomendacao] = useState('');
    const [desgastes, setDesgastes] = useState('');
    const [saida, setSaida] = useState('');

    console.log(NomeMetas)
    console.log(date)

    const meta = 'prova';
    const dia = '10';
    const mes = '04';
    const ano = '2024';

    async function getMetas() {
        try {
        const response = await userApi.getMetas(meta, dia, mes, ano);
        const responseData = JSON.parse(response.data);
        setNome(responseData.nome[0]);
        setAssunto(responseData.assunto[0]);
        setStatus(responseData.status[0]);
        setDataInicio(responseData.data_meta[0]);
        setMaterialEstudo(responseData.material_estudo[0]);
        setMateria(responseData.materia[0]);
        setTempoAteMeta(responseData.tempo_ate_meta[0]);
        setTempoLivreEstudo(responseData.tempo_livre_estudo[0]);
        setTipoMaterial(responseData.tipo_material[0]);
        setNota(responseData.nota[0]);
        setTempoEstudado(responseData.tempo_estudado[0]);
        setRecomendacao(responseData.recomendacao[0]);
        setDesgastes(responseData.desgastes[0]);
        setSaida(responseData.saida[0]);

        setInfos([responseData]);
        return responseData;
        } catch (error) {
        console.error(`${error}`);
        }
    }
    


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

      const openModalFromCard = async () => {
        await getMetas(); // Aguarda a conclusão da chamada da API
        modalizeRef.current?.open();
    };

    useEffect(() => {getDados(); setInfos(userApi.getInfo())}, []);

    const [inforCards, setInforCards] = useState([
            { nomeCadeira: 'Exercício 14-25 - 1º Lei Termodinâmica' , horario: '30 - Min' , coins: '20'},
            { nomeCadeira: 'Vídeo Aula' , horario: '40 - Min' , coins: '20'},
            // { nomeCadeira: 'Exercício 20-35' , horario: '30 - Min' , coins: '20'},
            // { nomeCadeira: 'Resumo' , horario: '15 - Min' , coins: '20'},
        ]) 

    const removeCard = (nomeCadeira) => {
        setInforCards((prevCards) => prevCards.filter((card) => card.nomeCadeira !== nomeCadeira));
      };
        

    return (
        <View>

            <ScrollView style={styles.container}>

                {inforCards.map( (inforCards) => (<Card
                                                    key={inforCards.nomeCadeira}
                                                    cadeira={inforCards.nomeCadeira}
                                                    horario={inforCards.horario}
                                                    coins={inforCards.coins}
                                                    onOpenModal={openModalFromCard}
                                                    onRemove={() => removeCard(inforCards.nomeCadeira)}/>))}

            </ScrollView>

            {/* Modalize das informações da cadeira */}

            <Modalize
                ref={modalizeRef}
                adjustToContentHeight={true}
                snapPoint={180}
                handleStyle={{ backgroundColor: '#73628A' }}
                modalStyle={styles.Mobilize}
                >
                <View>
                    {infos && (
                    <View style={styles.Mobilize}>
                        <Text style={styles.text}>Cadeira {materia}</Text>
                        <Text style={styles.text}>Nome: {nome}</Text>
                        <Text style={styles.text}>Status: {status}</Text>
                        <Text style={styles.text}>Assunto: {assunto}</Text>
                        <Text style={styles.text}>Material de Estudo: {materialEstudo}</Text>
                        <Text style={styles.text}>Meta: {meta}</Text>
                        <Text style={styles.text}>Recomendações: {recomendacao}</Text>
                        <Text style={styles.text}>Pontuação: {recomendacao}</Text>
                        <Text style={styles.text}>Horário: 20:00</Text>
                        <Text style={styles.text}>Prioridade: {saida}</Text>
                        <Text style={styles.text}>Data Início: {data_inicio}</Text>
                        <Text style={styles.text}>Tempo Estudado: {tempoEstudado}</Text>
                        <Text style={styles.text}>Tempo Livre: {tempoLivreEstudo}</Text>
                        <Text style={styles.text}>Tempo Estimado: {tempoAteMeta}</Text>
                        <Text style={styles.text}>Nota: {nota}</Text>
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