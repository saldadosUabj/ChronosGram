import { Image, StyleSheet, Text, View } from 'react-native';
import Logo from './logo/index'
import Form from './Form/index'

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
