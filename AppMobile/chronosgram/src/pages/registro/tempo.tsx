import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation} from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import styles from './style';

export default function Tempo() {

    const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text> Tempo Livre </Text>
      <TouchableOpacity onPress={() => navigation.navigate("registro_modo" as never)}>
        <Text>
          Continuar
        </Text>
      </TouchableOpacity>
    </View>
  );
}
