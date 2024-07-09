import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';
import Layout from './(routes)/stackroutes/_layout';

export default function Index() {
  return (
    <Layout/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#16041B',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    color: '#fff',
  }
});