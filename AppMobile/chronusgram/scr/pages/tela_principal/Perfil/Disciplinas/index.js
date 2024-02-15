import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity,Image, ScrollView, Text} from 'react-native';
import styles from './style';
import { useNavigation} from '@react-navigation/native';

export default function Disciplinas() {

    const navigation = useNavigation();

    function AddOptions(){
        return
    }

    return (
        <View style={styles.container}>

            <View style={styles.BoxDisciplinas}>



                <TouchableOpacity style={styles.button} onPress={() => AddOptions()}>
                    <Text style={{fontSize: 40,fontWeight:'bold',bottom:4}}>
                        +
                    </Text>
                </TouchableOpacity>

            </View>

        </View>
                
    )
}
