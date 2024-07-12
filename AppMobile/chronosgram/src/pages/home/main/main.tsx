import { ScrollView ,StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import React, { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import styles from './style';

import Ofensiva from './components/ofensiva/ofensiva';

import { AuthContext } from '../../../contexts/auth'

export default function Main() {

  const { nome } = useContext<any>(AuthContext)
  const navigation = useNavigation();

  return (
    
    <ScrollView style={styles.container}>
      <Ofensiva/>   
    </ScrollView>
  );
}