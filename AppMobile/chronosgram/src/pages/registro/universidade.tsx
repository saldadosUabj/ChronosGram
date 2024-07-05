import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation} from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import styles from './style';

export default function Universidade() {

    const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text> Universidade </Text>
      <TouchableOpacity onPress={() => navigation.navigate("home" as never)}>
        <Text>
          Continuar
        </Text>
      </TouchableOpacity>
    </View>
  );
}
