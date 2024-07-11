import { ScrollView ,StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import styles from './style';

import { AuthContext } from '../../../contexts/auth'

export default function Main() {

  const { nome } = useContext<any>(AuthContext)
  const navigation = useNavigation();

  return (
    
    <ScrollView style={styles.container}>
     
      <Text style={{color: "white"}}> Main </Text>
      <Text> {nome} </Text>
      
    </ScrollView>
  );
}