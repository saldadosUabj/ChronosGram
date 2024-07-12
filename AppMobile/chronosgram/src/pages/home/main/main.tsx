import { ScrollView , StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import React, { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import styles from './style';

import Ofensiva from './components/ofensiva/ofensiva';
import Constancia from './components/constancia/constancia';
import Card from './components/card/card';

import { AuthContext } from '../../../contexts/auth'

export default function Main() {

  const { nome } = useContext<any>(AuthContext)
  const navigation = useNavigation();

  return (
    
    <ScrollView style={styles.container}>
      <View style={styles.containerHorizontal}>
        <Ofensiva/>
        <Constancia/>
      </View>
      <View style={styles.containerVertical}>
        <Card/>
      </View>
    </ScrollView>
  );
}