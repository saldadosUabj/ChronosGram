import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation} from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import styles from './style';

export default function App() {

    const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text> Registro </Text>
      <TouchableOpacity onPress={() => navigation.navigate("" as never)}>
        <Text>
          Continuar
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>
          Login
        </Text>
      </TouchableOpacity>
    </View>
  );
}
