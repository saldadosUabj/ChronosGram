import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {Text, TextInput, View, TouchableOpacity, ScrollView} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import styles from './style';

export default function Form(){

    const navigation = useNavigation();
    
    const [horario, setHorario] = useState(null)
    const [freeTimeStyle, setFreeTimeStyle] = useState(null)   
    // const [turno, setTurnoValue] = useState('Matutino')

    
    return(
        <ScrollView>
           <View style={styles.boxTop}>
            <Text style={styles.Login}> Informações Adicionais </Text>
            <TextInput
                style={styles.inputBox}
                onChangeText={setHorario}
                value={horario}
                placeholder='Horário Livre'
                keyboardType='default'/>
            <TextInput
                style={styles.inputBox}
                onChangeText={setFreeTimeStyle}
                value={freeTimeStyle}
                placeholder='Free Time Style'
                keyboardType='default'/>
            <TouchableOpacity style={styles.buttonEntrar}>
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