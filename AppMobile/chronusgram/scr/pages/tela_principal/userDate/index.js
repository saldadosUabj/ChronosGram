import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import styles from './style';
import UserApi from '../../../services/userAPI'


export default function UserDate() {

    const userApi = new UserApi()

    async function getDados(){
        let dados = await userApi.getUserData();
    }

    return (
        <View style={styles.container}>
            <Text>
                teste
            </Text>
        </View>
    )
}