import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity,Image } from 'react-native';
import styles from './style';
import { useNavigation} from '@react-navigation/native';


export default function Header() {

    const navigation = useNavigation();

    return (
        <View style={styles.header}>
            <Text>
                oi
            </Text>
        </View>
                
    )
}
