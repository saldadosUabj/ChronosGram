import { ScrollView ,StyleSheet, Text, TouchableOpacity, View, Image, ImageBackground } from 'react-native';
import React, { useContext, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import styles from './style';

import { AuthContext } from '../../../../../contexts/auth';

export default function Card() {

  const { nome } = useContext<any>(AuthContext)
  var [keystatus, setKeyStatus] = useState<any>('')
  const tempo  = '30 min';
  const titulo = 'Prova de Calculo 1';
  const coins = '120 coins';
  const status = 'Em dia';
  const instrucao = 'Primeira parte Lista'

  const navigation = useNavigation();

  return (
    <View style={styles.container}>

        <View style={styles.containerHorizontal}>
          <ImageBackground style= {styles.backgroung} imageStyle={styles.backgroundImage}source={require('../../../../../../assets/images/header-card.jpg')} resizeMode='cover'>

            <View style={styles.containerHorizontal}>
              
              <Image style={styles.relogio} source={require('../../../../../../assets/images/relogio.png')}/>
              <Text style={styles.textoSecundario}> {tempo} </Text>
              <Text style={styles.textoPrimario}> {titulo} </Text>
              <Image style={styles.moeda} source={require('../../../../../../assets/images/moeda.png')}/>
              <Text style={styles.textoSecundario}> {coins} </Text>
              
            </View>

          </ImageBackground>             
        </View>

        <View>
          <View style={styles.constainerStatus}>
            <Text style={[styles.textoSecundario,{alignSelf: 'center'}]}> {status} </Text>
          </View>
        </View>

        <View style={{justifyContent: 'flex-start', flexDirection: 'row', padding: 10}}>

          <Image style={styles.trofeu} source={require('../../../../../../assets/images/trofeu.png')}/>
          <Text style={[styles.textoPrimario,{margin: 2, marginVertical: 5}]}> {instrucao} </Text>

        </View>

        <View style={{flex:1 ,flexDirection: 'row', justifyContent: 'space-between'}}>

        <View style={{flexDirection: 'row', alignSelf: 'center'}}>

          

        </View>

          <View style={{flexDirection: 'row', alignSelf: 'center', margin: 5}}>

            <Image style={styles.miniaturas} source={require('../../../../../../assets/images/joinha.png')}/>
            <Image style={styles.miniaturas} source={require('../../../../../../assets/images/negativo.png')}/>
            <Image style={styles.miniaturas} source={require('../../../../../../assets/images/comentario.png')}/>

          </View>


        </View>

    </View>
  );
}