import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Ou outro pacote de ícones

type CardOpcaoProps = {
  data: {
    key: string;
    label: string;
    icon: string; // Nome do ícone
    timeRange: string;
  };
  isSelected: boolean;
  onPress: (key: string) => void;
};

const CardOpcao: React.FC<CardOpcaoProps> = ({ data, isSelected, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.optionContainer, isSelected && styles.selectedOption]}
      onPress={() => onPress(data.key)}
    >
      <View style={styles.iconContainer}>
        <Text><Icon name={data.icon} size={30} color={isSelected ? '#fff' : '#000'} /> </Text>{/* Exemplo usando FontAwesome */}
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.optionText}>{data.label}</Text>
        <Text style={styles.optionTime}>{data.timeRange}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  optionContainer: {
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#F0F0F0',
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  selectedOption: {
    backgroundColor: 'rgba(138, 103, 176, 0.8)', // Roxo mais claro com 50% de opacidade
  },
  iconContainer: {
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  optionText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  optionTime: {
    fontSize: 14,
    color: '#666',
  },
});

export default CardOpcao;
