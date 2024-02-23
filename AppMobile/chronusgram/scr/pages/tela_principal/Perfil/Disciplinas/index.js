import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity,Image, ScrollView, Text, ActivityIndicator } from 'react-native';
import styles from './style';
import { useNavigation} from '@react-navigation/native';
import { MultipleSelectList } from 'react-native-dropdown-select-list'


export default function Disciplinas() {

    const navigation = useNavigation();
    const[disciplinas, setDisciplinas] = useState([]);
    const [activityIndicator, setActivityIndicator] = useState(false);

    const disciplinas_array = [
        { label: 'Física 3', value: 'Física 3' },
        { label: 'Cálculo 2', value: 'Cálculo 2' },
        { label: 'Sistemas Digitais', value: 'Sistemas Digitais' },
    ]


   // Função para enviar as atualizações para o banco
    function AttBanco() {
        // Ative o indicador de atividade
        setActivityIndicator(true);

        // Simule uma operação assíncrona (por exemplo, uma chamada à API)
        setTimeout(() => {
            // Faça a lógica de atualização do banco aqui

            // Desative o indicador de atividade após a conclusão da operação
            navigation.navigate('metas')
            setActivityIndicator(false);
        }, 2000); // Tempo de simulação (substitua pelo tempo real da operação)
    }

    return (
        <View style={styles.container}>

            <Image style={styles.logo} source={require('../../../../../assets/Book.png')}/>
            <Text style={styles.text}> Adicione ou remova as disciplinas </Text>

            <View style={styles.BoxDisciplinas}>
                                
                <MultipleSelectList 
                    boxStyles={styles.inputSelectdBox}
                    dropdownStyles={styles.inputSelectdBoxDropdown}
                    data={disciplinas_array}
                    setSelected={setDisciplinas}
                    value={disciplinas}
                    placeholder='Disciplinas'/>


                <TouchableOpacity style={styles.button} onPress={() => AttBanco()}>
                    {activityIndicator ? (
                        <ActivityIndicator size="large" color="#16041B" />
                    ) : (
                        <Text style={{ fontSize: 40, fontWeight: 'bold', bottom: 4 }}>
                            {'>'}
                        </Text>
                    )}
                </TouchableOpacity>

            </View>

        </View>
                
    )
}
