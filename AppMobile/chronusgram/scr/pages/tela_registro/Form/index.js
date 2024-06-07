// Dependências //
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { SelectList } from 'react-native-dropdown-select-list'
import {Text, TextInput, View, TouchableOpacity, ScrollView, Alert, Vibration} from 'react-native';
import Logo from '../logo/index';
import styles from './style';

// Função de renderização //
export default function Form(){    

    // Declaração de variáveis //
    const navigation = useNavigation();    
    const [nome, setNome] = useState(null)
    const [email, setEmail] = useState(null)
    const [senha, setSenha] = useState(null)   
    const [confirm, setConfirmSenha] = useState(null)
    const [curso, setCurso] = useState(null)
    const [turno, setTurno] = useState(null)
    
    const data_turno = [
        { key: 'matutino', value: 'Matutino' },
        { key: 'vespetino', value: 'Vespetino' },
        { key: 'integral', value: 'Integral' },
    ]

    // Funções auxiliares //
    function validarCampos(){
        if (!nome || !email || !senha || !confirm || !curso || !turno) {
            Vibration.vibrate()
            Alert.alert('Por favor, preencha todos os campos.');
            return false;
        }
        if (senha !== confirm) {
            Vibration.vibrate()
            Alert.alert('As senhas não correspondem.');
            return false;
        }
        return true;
    };

    function continuarRegistro(){
        const camposValidos = validarCampos();
        if (camposValidos) {
            navigation.navigate('TelaDeRegistro2', {
                nome: nome,
                email: email,
                senha: senha,
                curso: curso,
                turno: turno,
            });
        }
    };

    // Renderização //    
    return(
        <ScrollView>

            <Logo/>

            <View style={styles.boxTop}>

                <Text style={styles.Login}> Criar uma conta nova </Text>

                <TextInput
                    style={styles.inputBox}
                    onChangeText={setNome}
                    value={nome}
                    placeholder='Nome'
                    keyboardType='default'/>

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
                    secureTextEntry={true}
                    placeholder='Password'
                    keyboardType='default'/>

                <TextInput
                    style={styles.inputBox}
                    onChangeText={setConfirmSenha}
                    value={confirm}
                    secureTextEntry={true}
                    placeholder='Confirm Password'
                    keyboardType='default'/>

                <TextInput
                    style={styles.inputBox}
                    onChangeText={setCurso}
                    value={curso}
                    placeholder='Curso'
                    keyboardType='default'/>

                <SelectList 
                    boxStyles={styles.inputSelectdBox}
                    dropdownStyles={styles.inputBox}
                    data={data_turno}
                    setSelected={setTurno}
                    value={turno}
                    placeholder='Turno'/>

                <TouchableOpacity style={styles.buttonEntrar} onPress={() => continuarRegistro()}>

                    <Text style={styles.buttonText} onPress={() => navigation.navigate('TelaDeRegistro2', turno)}> Continuar </Text>
                    
                </TouchableOpacity>  

            </View>

            <View style={styles.boxBottom}>

                <Text style={styles.comment}>Já possui uma conta?</Text>

                <Text style={styles.registrar} onPress={() => navigation.navigate('TelaDeLogin')}> Entrar </Text>

           </View>

        </ScrollView>
    )
}