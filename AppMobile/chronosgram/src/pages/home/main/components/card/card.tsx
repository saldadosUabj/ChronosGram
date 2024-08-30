import { ScrollView, StyleSheet, Text, TouchableOpacity, View, ImageBackground } from 'react-native';
import React, { useContext, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './style';

import { AuthContext } from '../../../../../contexts/auth';

export default function Card() {
  const { nome } = useContext<any>(AuthContext);
  var [keystatus, setKeyStatus] = useState<any>('');
  const tempo = '30 min';
  const titulo = 'Prova de Calculo 1';
  const coins = '120 coins';
  const status = 'Em dia';
  const instrucao = 'Primeira parte Lista';

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.containerHorizontal}>
        <ImageBackground
          style={styles.background}
          imageStyle={styles.backgroundImage}
          source={require('../../../../../../assets/images/header-card.jpg')}
          resizeMode="cover"
        >
          {/* Adicionando uma sobreposição escura */}
          <View style={styles.overlay}>
            <Icon name="clock-outline" style={styles.icon} size={24} color="#FFFFFF" />
            <Text style={styles.textoSecundario}> {tempo} </Text>
            <Text style={styles.textoPrimario}> {titulo} </Text>
            <Text style={styles.textoSecundario}> {coins} </Text>
          </View>
        </ImageBackground>
      </View>

      <View>
        <View style={styles.containerStatus}>
          <Text style={[styles.textoSecundario, { alignSelf: 'center' }]}> {status} </Text>
        </View>
      </View>

      <View style={styles.instrucaoContainer}>
        <Icon name="trophy-outline" style={styles.icon} size={24} color="#FFD700" />
        <Text style={[styles.textoPrimario, { margin: 2, marginVertical: 5 }]}> {instrucao} </Text>
      </View>

      <View style={styles.footerContainer}>
        <View style={styles.containerCheckBox}>
          <Icon name="check" style={styles.iconCheck} size={20} color="#FFFFFF" />
        </View>

        <View style={styles.imagensMiniaturas} />

        <View style={styles.actionIconsContainer}>
          <TouchableOpacity>
            <Icon name="thumb-up-outline" style={styles.iconAction} size={24} color="#FFFFFF" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="thumb-down-outline" style={styles.iconAction} size={24} color="#FFFFFF" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="comment-outline" style={styles.iconAction} size={24} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
