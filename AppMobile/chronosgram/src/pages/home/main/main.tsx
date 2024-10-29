import { ScrollView , StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import React, { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import styles from './style';

import Ofensiva from './components/ofensiva/ofensiva';
import Constancia from './components/constancia/constancia';
import Card from './components/card/card';
import TopTabRoutes from '../../../routers/topTab/topTabRoutes';

import { AuthContext } from '../../../contexts/auth'

export default function Main() {

  const { user } = useContext<any>(AuthContext)
  const navigation = useNavigation();

  console.log(user?.username)

  return (    
    <ScrollView style={styles.container}>
      <View style={styles.containerHorizontal}>
        <Ofensiva/>
        <Constancia/>
      </View>
      <View style={styles.containerVertical}>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </View>
    </ScrollView>
  );
}