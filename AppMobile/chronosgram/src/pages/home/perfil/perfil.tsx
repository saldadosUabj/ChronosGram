import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import styles from './style';

export default function Perfil() {

  const navigation = useNavigation();

  return (
    
    <View style={styles.container}>
     
      <Text> Perfil </Text>
      
    </View>
  );
}