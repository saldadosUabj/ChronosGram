import React from 'react';
import { ScrollView, StyleSheet, Text, Image, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const urlUserPicture = '../../../../../assets/images/rotinas/user.png';
const urlLike = '../../../../../assets/images/rotinas/like.png';
const urlComment = '../../../../../assets/images/rotinas/comment.png';
const urlMore = '../../../../../assets/images/rotinas/more.png';
const primaria = "#16041B";

const dataUsuario = {
  id: 1,
  picture: urlUserPicture,
  nome: "João da Silva",
  conteudo: "Marcou uma meta",
};

export default function Feed() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.profileImage} source={require(urlUserPicture)} />
        <Text style={styles.nomeUsuario}>{dataUsuario.nome}</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.texto}>{dataUsuario.conteudo}</Text>
      </View>
      <View style={styles.viewBotao}>
        <TouchableOpacity style={styles.botao}>
          <Image style={styles.icon} source={require(urlLike)} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao}>
          <Image style={styles.icon} source={require(urlComment)} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao}>
          <Image style={styles.icon} source={require(urlMore)} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    backgroundColor: '#1E1E1E', // Fundo escuro para o modo dark
    borderRadius: 10,
    margin: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  profileImage: {
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: '#333',
  },
  nomeUsuario: {
    fontFamily: 'JosefinSans-Bold',
    fontSize: 18,
    paddingLeft: 10,
    fontWeight: '600',
    color: '#E0E0E0', // Texto em cinza claro
  },
  content: {
    backgroundColor: '#2A2A2A', // Fundo do conteúdo um pouco mais claro
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
  },
  texto: {
    fontFamily: 'JosefinSans-Regular',
    color: '#E0E0E0', // Texto em cinza claro
  },
  viewBotao: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  botao: {
    height: 28,
    width: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    height: 24,
    width: 24,
  },
});
