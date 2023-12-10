import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {Text, TextInput, View, TouchableOpacity, ScrollView} from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list'
import styles from './style';

export default function Form(){

    const navigation = useNavigation();
    
    const [horario_livre, setHorarioLivre] = useState(null)
    const [freeTimeStyle, setFreeTimeStyle] = useState(null)

    const data_horario = [
        { key: 'manhã', value: 'Manhã' },
        { key: 'tarde', value: 'Tarde' },
        { key: 'noite', value: 'Noite' },
    ]

    const data_freeTime = [
        { key: 'equilibrada', value: 'Equilibrada' },
        { key: 'variada', value: 'Variada' },
        { key: 'intensa', value: 'Intensa' },
    ]
    
    return(
        <ScrollView>
           <View style={styles.boxTop}>
            <Text style={styles.Login}> Informações Adicionais </Text>
            <SelectList 
                boxStyles={styles.inputSelectdBox}
                dropdownStyles={styles.inputBox}
                data={data_horario}
                setSelected={setHorarioLivre}
                value={horario_livre}
                placeholder='Horário Livre'/>
            <SelectList
                boxStyles={styles.inputSelectdBox}
                dropdownStyles={styles.inputBox}
                data={data_freeTime}
                setSelected={setFreeTimeStyle}
                value={freeTimeStyle}
                placeholder='Free Time Style'/>
            <TouchableOpacity style={styles.buttonEntrar} onPress={() => navigation.navigate('TelaPrePrincipal')}>
                <Text style={styles.buttonText}> Registrar </Text>
            </TouchableOpacity>            
            </View>
            <View style={styles.boxBottom}>
                <Text style={styles.comment}>Já possui uma conta?</Text>
                <Text style={styles.registrar} onPress={() => navigation.navigate('TelaDeLogin')}> Entrar </Text>
           </View>
        </ScrollView>
    )
}