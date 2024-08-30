import React from 'react';
import { ScrollView, StyleSheet, Text, Image, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

// Caminhos para imagens
const urlUserPicture = "../../../../../assets/images/rotinas/user.png";
const urlSendPicture = '../../../../../assets/images/rotinas/send.png';
const urlMorePicture = '../../../../../assets/images/rotinas/more.png';

const dataUsuario = {
  id: 1,
  nome: "Thiago Brito",
  faculdade: "UFRPE",
  curso: "Eng. Computação",
};

export default function CardUser() {
  const navigation = useNavigation();

  return (
    <View style={styles.card}>
      {/* Seção superior do card */}
      <View style={styles.header}>
        <View style={styles.userInfo}>
          <Image style={styles.imagem} source={require(urlUserPicture)} />
          <View>
            <Text style={styles.nome}>{dataUsuario.nome}</Text>
            <Text style={styles.subInfo}>{dataUsuario.faculdade}</Text>
          </View>
        </View>
        <TouchableOpacity>
          <Image style={styles.moreIcon} source={require(urlMorePicture)} />
        </TouchableOpacity>
      </View>

      {/* Conteúdo do card */}
      <View style={styles.content}>
        <Text style={styles.cursoText}>{dataUsuario.curso}</Text>
      </View>

      {/* Seção inferior do card */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.sendButton}>
          <Image style={styles.sendIcon} source={require(urlSendPicture)} />
          <Text style={styles.sendText}>Enviar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
