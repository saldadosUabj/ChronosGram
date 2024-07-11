import { ScrollView ,StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import styles from './style';

import { AuthContext } from '../../../../../contexts/auth';

export default function Ofensiva() {

  const { nome } = useContext<any>(AuthContext)
  const navigation = useNavigation();

  return (
    <View>

    </View>
  );
}