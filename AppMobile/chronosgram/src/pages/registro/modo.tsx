import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation} from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import styles from './style';

export default function Modo() {

    const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text> Modo </Text>
      <TouchableOpacity onPress={() => navigation.navigate("registro_universidade" as never)}>
        <Text>
          Continuar
        </Text>
      </TouchableOpacity>
    </View>
  );
}
