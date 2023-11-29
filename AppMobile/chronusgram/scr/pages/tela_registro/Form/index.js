import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {Text, TextInput, View, Image, TouchableOpacity} from 'react-native';
import styles from './style';

export default function Form(){

    const navigation = useNavigation();
    
    const [email, setEmail] = useState(null)
    const [senha, setSenha] = useState(null)   
    const [confirm, setConfirmSenha] = useState(null)
    const [curso, setCurso] = useState(null)
    const [turno, setTurno] = useState(null)

    
    return(
        <View>
           <View style={styles.boxTop}>
            <Text style={styles.Login}> Criar uma conta nova </Text>
            <TextInput
                style={styles.inputBox}
                onChangeText={setEmail}
                value={email}
                placeholder='Email'
                keyboardType='default'/>
            <TextInput
                style={styles.inputBox}
                onChangeText={setSenha}
                value={senha}
                placeholder='Password'
                keyboardType='default'/>
            <TextInput
                style={styles.inputBox}
                onChangeText={setConfirmSenha}
                value={confirm}
                placeholder='Confirm Password'
                keyboardType='default'/>
            <TextInput
                style={styles.inputBox}
                onChangeText={setCurso}
                value={curso}
                placeholder='Curso'
                keyboardType='default'/>
            <TextInput
                style={styles.inputBox}
                onChangeText={setTurno}
                value={turno}
                placeholder='Turno'
                keyboardType='default'/>
            <TouchableOpacity style={styles.buttonEntrar}>
                <Text style={styles.buttonText}> Continuar </Text>
            </TouchableOpacity>            
            </View>
            <View style={styles.boxBottom}>
                <Text style={styles.comment}>Já possui uma conta?</Text>
                <Text style={styles.registrar} onPress={() => navigation.navigate('TelaDeLogin')}> Entrar </Text>
           </View>
        </View>
    )
}