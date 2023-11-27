import React from 'react';
import {Text,TextInput, View, Image} from 'react-native';
import styles from './style';

export default function Form(){
    return(
        <View>
           <View style={styles.box}>
            <Text style={styles.Login}> Login </Text>
            <TextInput
                placeholder='Email'
                keyboardType='default'/>
           </View>
        </View>
    )
}