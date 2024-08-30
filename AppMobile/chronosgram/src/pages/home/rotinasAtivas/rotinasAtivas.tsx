import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './style'; // Arquivo de estilo externo
import CardRoutine from './components/CardRoutine'; // Componente de cartão atualizado

export default function RotinasAtivas() {
  const navigation = useNavigation();

  // Dados mock para exemplo com rotinas e informações adicionais
  const studyRoutines = [
    {
      id: '1',
      title: 'Matemática Básica',
      description: 'Aprenda os fundamentos da matemática.',
      icon: 'calculator',
      creator: 'João Silva',
      participants: 120,
      likes: 50,
    },
    {
      id: '2',
      title: 'História Geral',
      description: 'Explore os principais eventos históricos.',
      icon: 'book',
      creator: 'Maria Oliveira',
      participants: 85,
      likes: 40,
    },
    {
      id: '3',
      title: 'Programação em Python',
      description: 'Introdução ao Python e programação.',
      icon: 'code-tags',
      creator: 'Carlos Eduardo',
      participants: 200,
      likes: 150,
    },
    // Adicione mais rotinas conforme necessário
  ];

  return (
    <ScrollView style={styles.container}>
      {studyRoutines.map((routine) => (
        <View key={routine.id} style={localStyles.row}>
          <CardRoutine routine={routine} />
        </View>
      ))}
    </ScrollView>
  );
}

const localStyles = StyleSheet.create({
  row: {
    marginBottom: 20,
  },
});
