import { ScrollView ,StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import React, { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import styles from './style';

import { AuthContext } from '../../../../../contexts/auth';

export default function Ofensiva() {

  const { nome } = useContext<any>(AuthContext)
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
        <Text style={styles.titulo}>Ofensiva</Text>
        <Text style={styles.numero}> 15 </Text> 
        <Text style={styles.porcentagem}> 12%</Text>
        <Image  style={styles.fogo}source={require('../../../../../../assets/images/Fogo.png')}/>
    </View>
  );
}