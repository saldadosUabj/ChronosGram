import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity,Image, ScrollView, Text} from 'react-native';
import styles from './style';
import UserApi from '../../../../services/userAPI'
import { useNavigation} from '@react-navigation/native';

export default function Form() {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.buttonEntrar} >
                <Text style={styles.buttonText} onPress={() => navigation.navigate('TelaPrincipal')}> Entrar </Text>
            </TouchableOpacity> 

        </View>
                
    )
}
