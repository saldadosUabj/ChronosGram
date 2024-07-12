import { ScrollView ,StyleSheet, Text, TouchableOpacity, View, Image, ImageBackground } from 'react-native';
import React, { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import styles from './style';

import { AuthContext } from '../../../../../contexts/auth';

export default function Card() {

  const { nome } = useContext<any>(AuthContext)
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
        <View style={styles.containerHorizontal}>
          <ImageBackground style= {styles.backgroung} imageStyle={styles.backgroundImage}source={require('../../../../../../assets/images/header-card.jpg')}/>                 
        </View>
    </View>
  );
}