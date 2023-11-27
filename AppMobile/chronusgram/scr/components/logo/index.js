import React from 'react';
import {View, Image} from 'react-native';
import styles from './style';

export default function Logo(){
    return(
        <View style={styles.container}>
            <Image style={styles.Logo} source={require('../../../assets/logo.png')}/>
        </View>
    )
}