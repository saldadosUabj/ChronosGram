import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import Logo from './scr/components/logo/index'
import Form from './scr/components/Form/index'

export default function App() {
  return (
    <View style={styles.container}>
      <Logo/>
      <Form/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#16041B',
  },
});
