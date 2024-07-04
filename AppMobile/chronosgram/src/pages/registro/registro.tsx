import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation} from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

export default function App() {

    const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text> Registro </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
