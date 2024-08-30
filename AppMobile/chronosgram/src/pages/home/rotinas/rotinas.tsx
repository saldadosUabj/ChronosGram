import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Feed from './components/feed';

export default function Rotinas() {
  return (
    <ScrollView style={styles.container}>
      <Feed />
      <Feed />
      <Feed />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#16041B', // Fundo escuro
  },
});
