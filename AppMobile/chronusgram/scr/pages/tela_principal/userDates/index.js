import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styles from './style';
import UserAPI from '../../../services/userAPI';


export default function Dados() {
    
    const userApi = new UserAPI()

    async function getDados(){
        const user = await userApi.getUserById(1)
        return user
    }
    
    const user = getDados()

    const[nome,setNome] = useState(user.email)
    const[assunto, setAssunto] = useState(null)
    const[horario, setHorario] = useState(null)
    const[status, setStatus] = useState(null)


    return (
        <View style={styles.container}>
            <Text> {nome} </Text>
        </View>
    )
}