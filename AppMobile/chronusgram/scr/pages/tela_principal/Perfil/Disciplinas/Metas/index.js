import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity,Image, ScrollView, Text, ActivityIndicator } from 'react-native';
import styles from './style';
import { useNavigation} from '@react-navigation/native';
import { MultipleSelectList } from 'react-native-dropdown-select-list'


export default function Metas() {

    const navigation = useNavigation();
    const[metas, setMetas] = useState();
    const [activityIndicator, setActivityIndicator] = useState(false);


   // Função para enviar as atualizações para o banco
    function AttBanco() {
        // Ative o indicador de atividade
        setActivityIndicator(true);

        // Simule uma operação assíncrona (por exemplo, uma chamada à API)
        setTimeout(() => {
            // Faça a lógica de atualização do banco aqui

            // Desative o indicador de atividade após a conclusão da operação
            setActivityIndicator(false);
        }, 2000); // Tempo de simulação (substitua pelo tempo real da operação)
    }

    return (
        <View style={styles.container}>

            

        </View>
                
    )
}