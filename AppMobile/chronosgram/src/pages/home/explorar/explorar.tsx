import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './style';

export default function Explorar() {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
        <Text style={{color:'white'}}> Explorar </Text>
    </View>
  );
}