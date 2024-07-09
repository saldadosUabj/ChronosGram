import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import styles from './style';

export default function App() {

  const navigation = useNavigation();

  return (
    
    <View style={styles.container}>
     
      <TouchableOpacity onPress={() => navigation.navigate('home' as never)}> 
        <Text>  Login  </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('registro' as never)}> 
        <Text>  Registrar-se  </Text>
      </TouchableOpacity>

      
    </View>
  );
}