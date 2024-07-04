import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function Registro() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Registro</Text>
    </View>
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
