import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet, GestureResponderEvent } from 'react-native';

type BotaoContinuarProps = {
  onPress: (event: GestureResponderEvent) => void;
  text: string;
};

const BotaoContinuar: React.FC<BotaoContinuarProps> = ({ onPress, text }) => {
  return (
    <View style={styles.viewContinuar}>
      <TouchableOpacity onPress={onPress} style={styles.touchable}>
        <Text style={styles.textoContinuar}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  viewContinuar: {
    marginTop: 20,
    alignItems: 'center',
    width: '100%',
  },
  touchable: {
    backgroundColor: '#9D67E3',
    width: '90%',
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textoContinuar: {
    color: '#FFFFFF',
    fontSize: 20, // Ajuste no tamanho da fonte
  },
});

export default BotaoContinuar;
