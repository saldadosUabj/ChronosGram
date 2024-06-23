// Dependências //
import React, { useState } from 'react';
import { View, TouchableOpacity, Image, Text, ActivityIndicator } from 'react-native';
import { MultipleSelectList } from 'react-native-dropdown-select-list'
import { useNavigation} from '@react-navigation/native';
import styles from './style';

// Função de renderização
export default function Disciplinas() {

    // Declaração de variáveis 
    const navigation = useNavigation();
    const[disciplinas, setDisciplinas] = useState([]);
    const [activityIndicator, setActivityIndicator] = useState(false);

    const disciplinas_array = [
        { label: 'Física 3', value: 'Física 3' },
        { label: 'Física 2', value: 'Física 2' },
        { label: 'Física 1', value: 'Física 1' },
        { label: 'Cálculo 3', value: 'Cálculo 3' },
        { label: 'Cálculo 2', value: 'Cálculo 2' },
        { label: 'Cálculo 1', value: 'Cálculo 1' },
        { label: 'Sistemas Digitais', value: 'Sistemas Digitais' },
        { label: 'Algoritmo', value: 'Algoritmo' },
        { label: 'Arquitetura de Computadores', value: 'Arquitetura de Computadores' },
    ]

   // Funções auxiliares
    function AttBanco() {
        setActivityIndicator(true);
        setTimeout(() => {
            // lógica de atualização do banco aqui
            navigation.navigate('metas',{disciplinas})
            setActivityIndicator(false);
        }, 2000);
    }

    // Renderização
    return (
        <View style={styles.container}>

            <Image style={styles.logo} source={require('../../../../../assets/Book.png')}/>

            <Text style={styles.text}> Adicione ou remova as disciplinas </Text>

            <View style={styles.BoxDisciplinas}>
                                
                <MultipleSelectList 
                    boxStyles={styles.inputSelectdBox}
                    dropdownStyles={styles.inputSelectdBoxDropdown}
                    dropdownTextStyles={{color: 'white', fontFamily: 'Josefins-Sans-Bold',}}
                    inputStyles={{color: "white", fontFamily: 'Josefins-Sans-Bold',}}
                    data={disciplinas_array}
                    setSelected={setDisciplinas}
                    value={disciplinas}
                    placeholder='Disciplinas'/>

                <TouchableOpacity style={styles.button} onPress={() => AttBanco()}>

                    {activityIndicator ? 
                        (<ActivityIndicator size="large" color="#16041B" />) 
                        :
                        (<Text style={{ fontSize: 40, fontWeight: 'bold', bottom: 4 }}>
                            {'>'}
                         </Text>)}
                         
                </TouchableOpacity>

            </View>

        </View>
                
    )
}
