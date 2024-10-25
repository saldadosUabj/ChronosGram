import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AdicionarAtividadeModal from './AdicionarAtividadeModal';
import DateTimePicker from '@react-native-community/datetimepicker';

const metasData = [
  { id: '1', name: 'Meta 1' },
  { id: '2', name: 'Meta 2' },
  { id: '3', name: 'Meta 3' },
  { id: '4', name: 'Meta 4' },
  { id: '5', name: 'Meta 5' },
  { id: '6', name: 'Meta 6' },
  { id: '7', name: 'Meta 7' },
  { id: '8', name: 'Meta 8' },
  { id: '9', name: 'Meta 9' },
  { id: '10', name: 'Meta 10' },
];

type Atividade = {
  id: string;
  name: string;
  metaId: string;
  endDate: string;
  status: string;
  materialType: string;
  bannerUri?: string;
};

export default function Atividades() {
  const [atividades, setAtividades] = useState<Atividade[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const addAtividade = (atividade: Atividade) => {
    setAtividades([...atividades, atividade]);
  };

  const handleComplete = (id: string) => {
    setAtividades(atividades.map(atividade =>
      atividade.id === id ? { ...atividade, status: 'completed' } : atividade
    ));
  };

  const onChangeDate = (event: any, selectedDate?: Date) => {
    const currentDate = selectedDate || new Date();
    setShowDatePicker(Platform.OS === 'ios');
    setSelectedDate(currentDate);
  };

  const isOverdue = (date: string) => {
    return new Date(date).getTime() < new Date().getTime();
  };

  const getPriorityColor = (difference: number) => {
    const days = Math.floor(difference / (1000 * 3600 * 24));
    if (days <= 1) return '#FF6F6F';
    if (days <= 3) return '#FFD54F';
    return '#81C784'; // Verde mais suave
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={atividades}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={[styles.metaItem, item.status === 'completed' && styles.completedMeta, isOverdue(item.endDate) && item.status !== 'completed' && styles.overdueMeta]}>
            <View style={[styles.priorityIndicator, { backgroundColor: getPriorityColor(new Date(item.endDate).getTime() - new Date().getTime()) }]} />
            <View style={styles.metaTextContainer}>
              <Text style={styles.metaName}>{item.name}</Text>
              <Text style={styles.metaDate}>
                Data Final: {item.endDate}
                {isOverdue(item.endDate) && item.status !== 'completed' && <Text style={styles.overdueText}> (Atrasado)</Text>}
              </Text>
              <Text style={styles.metaInfo}>Status: {item.status}</Text>
              <Text style={styles.metaInfo}>Tipo de Material: {item.materialType}</Text>
              {item.bannerUri && <Image source={{ uri: item.bannerUri }} style={styles.metaBanner} />}
            </View>
            {item.status !== 'completed' && (
              <TouchableOpacity style={styles.completeButton} onPress={() => handleComplete(item.id)}>
                <Icon name="check-circle" size={20} color="#fff" />
                <Text style={styles.completeButtonText}>Concluir</Text>
              </TouchableOpacity>
            )}
          </View>
        )}
      />

      <TouchableOpacity
        style={styles.floatingButton}
        onPress={() => setShowForm(true)}
      >
        <Icon name="add" size={24} color="#fff" />
      </TouchableOpacity>

      <AdicionarAtividadeModal
        metas={metasData}
        visible={showForm}
        onClose={() => setShowForm(false)}
        onAddAtividade={addAtividade}
      />

      {showDatePicker && (
        <View style={styles.datePickerContainer}>
          <DateTimePicker
            value={selectedDate}
            mode="date"
            display="default"
            onChange={onChangeDate}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212', // Fundo escuro
    padding: 10,
  },
  completeButtonText: {
    color: '#fff',
    marginLeft: 5,
  },
  metaItem: {
    flexDirection: 'row',
    backgroundColor: '#333',
    borderRadius: 8,
    marginBottom: 10,
    padding: 10,
    alignItems: 'center',
  },
  completedMeta: {
    backgroundColor: '#001600', // Verde mais suave para itens concluídos
  },
  overdueMeta: {
    backgroundColor: '#440011', // Cor para itens atrasados
  },
  priorityIndicator: {
    width: 10,
    height: 40,
    borderRadius: 5,
    marginRight: 10,
  },
  metaTextContainer: {
    flex: 1,
    marginLeft: 10,
  },
  metaName: {
    color: '#fff',
    fontSize: 16,
  },
  metaDate: {
    color: '#888',
  },
  overdueText: {
    color: '#FF6F6F',
    fontWeight: 'bold',
  },
  metaInfo: {
    color: '#888',
    fontSize: 14,
  },
  metaBanner: {
    width: '100%',
    height: 100,
    borderRadius: 8,
    marginTop: 10,
  },
  completeButton: {
    backgroundColor: '#668B11', // Verde mais suave
    padding: 10,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  floatingButton: {
    position: 'absolute',
    bottom: 20, // Ajuste a distância do fundo se necessário
    right: 20,    
    // backgroundColor: '#16041B', // Cor roxa mais clara
    backgroundColor: '#9C27B0', // Cor roxa mais clara
    borderRadius: 50,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
  },
  datePickerContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#fff',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 15,
    zIndex: 1000,
  },
});
