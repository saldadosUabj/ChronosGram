import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>O Chronosgram V2 Começou por aqui, que Deus nos abençoe</Text>
      <StatusBar style="auto" />
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
