import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import styles from './style';
import UserApi from '../../../../services/userAPI'


export default function UserDate() {

    const userApi = new UserApi()

    // async function getDados(){
    //     let dados = await userApi.getUserData();
    //     return dados
    // }

    // const dados = getDados()

    return (
        <View style={styles.container}>
            <View>
                {/* <Text>{dados.nome}</Text> */}
            </View>
        </View>
    )
}