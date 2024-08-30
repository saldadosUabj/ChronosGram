import { ScrollView, View } from 'react-native';
import styles from './style'; // Certifique-se de que o caminho para o arquivo de estilo está correto
import CardUser from './components/cardUser'; // Certifique-se de que o caminho para o componente CardUser está correto

export default function Amigos() {
  return (
    <ScrollView style={styles.container}>
      <View style={{ flexDirection: 'colounm', flexWrap: 'wrap' }}>
        <CardUser />
        <CardUser />
        <CardUser />
        <CardUser />
      </View>
    </ScrollView>
  );
}
