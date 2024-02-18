import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity,Image, ScrollView, Text} from 'react-native';
import styles from './style';
import { useNavigation} from '@react-navigation/native';
import { MultipleSelectList } from 'react-native-dropdown-select-list'


export default function Disciplinas() {

    const navigation = useNavigation();
    const[disciplinas, setDisciplinas] = useState([]);

    const disciplinas_array = [
        { label: 'Física 3', value: 'Física 3' },
        { label: 'Cálculo 2', value: 'Cálculo 2' },
        { label: 'Sistemas Digitais', value: 'Sistemas Digitais' },
    ]


    //Função para enviar as atualizações para o banco

    function AttBanco(){
        return
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
                    <Text style={{fontSize: 40,fontWeight:'bold',bottom:4}}>
                        {'>'}
                    </Text>
                </TouchableOpacity>

            </View>

        </View>
                
    )
}
