import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import styles from './style';
import { useNavigation} from '@react-navigation/native';



export default function Form() {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('TelaPrincipal')}>
                <Text> +  </Text>
            </TouchableOpacity>
        </View>
    )
}