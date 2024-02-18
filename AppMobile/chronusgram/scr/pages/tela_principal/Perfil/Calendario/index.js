import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity,Image, ScrollView, Text, ActivityIndicator } from 'react-native';
import styles from './style';
import { useNavigation} from '@react-navigation/native';


export default function Calendario() {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>

            <Text style={styles.Text}>
                Calendario
            </Text>

        </View>
                
    )
}
