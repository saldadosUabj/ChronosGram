import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity,Image, ScrollView, Text } from 'react-native';
import styles from './style';
import UserApi from '../../../../services/userAPI'
import { useNavigation} from '@react-navigation/native';

export default function Form() {

    const navigation = useNavigation();
    const userApi = new UserApi()
    const [dados,setDados] = useState(null)

    return (

        <View style={styles.container}>

            <Text style={styles.text}>
                Turno Livre
            </Text>

            <View style={styles.retangulo}>

            </View>

            <Text style={styles.text}>
                Free Time Style
            </Text>

            <View style={styles.retangulo}>

            </View>            

        </View>
                
    )
}