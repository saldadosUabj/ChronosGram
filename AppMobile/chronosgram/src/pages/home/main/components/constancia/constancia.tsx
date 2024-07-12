import { ScrollView ,StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import React, { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import styles from './style';

import { AuthContext } from '../../../../../contexts/auth';

export default function Constancia() {

  const { nome } = useContext<any>(AuthContext)
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
        <Text style={styles.titulo}>Constância</Text>
        <Text style={styles.numero}> 70 </Text> 
        <Text style={styles.porcentagem}> 12%</Text>
        <Image  style={styles.focus}source={require('../../../../../../assets/images/Polygon_verde.png')}/>
    </View>
  );
}