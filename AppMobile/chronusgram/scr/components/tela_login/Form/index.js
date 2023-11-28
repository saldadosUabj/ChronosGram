import React, { useState } from 'react';
import {Text, TextInput, View, Image, TouchableOpacity} from 'react-native';
import styles from './style';

export default function Form(){
    
    const [email, setEmail] = useState(null)
    const [senha, setSenha] = useState(null)    
    
    return(
        <View>
           <View style={styles.boxTop}>
            <Text style={styles.Login}> Login </Text>
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
            <TouchableOpacity style={styles.buttonEntrar}>
                <Text style={styles.buttonText}> Entrar </Text>
            </TouchableOpacity>            
            </View>
            <View style={styles.boxBottom}>
                <Text style={styles.comment}>Ainda não possui uma conta?</Text>
                <Text style={styles.registrar}> Registrar-se </Text>
           </View>
        </View>
    )
}