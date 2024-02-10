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
        <ScrollView>

            <View style={styles.container}>

                <Text style={styles.text}>
                    Turno Livre
                </Text>

                <Text style={styles.text}>
                    Free Time Style
                </Text>

            </View>            

        </ScrollView>
                
    )
}