import { Image, StyleSheet, Text, View } from 'react-native';
import { useNavigation} from '@react-navigation/native';


export default function App() {

  return (
    <View style={styles.container}>
        <Text>
            Olá mundo! 
        </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#16041B',
  },
});
