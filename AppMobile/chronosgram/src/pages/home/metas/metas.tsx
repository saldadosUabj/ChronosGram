import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AdicionarMetaModal from './adicionarMetaModal';

type Meta = {
  id: string;
  name: string;
  date: string;
  priority: number;
  completed: boolean;
  completedDate?: Date;
};

export default function Metas() {
  const [metas, setMetas] = useState<Meta[]>([]);
  const [showForm, setShowForm] = useState(false);

  const addMeta = (meta: Meta) => {
    const updatedMetas = [...metas, meta];
    updatedMetas.sort((a, b) => a.priority - b.priority);
    setMetas(updatedMetas);
  };

  const handleComplete = (id: string) => {
    const updatedMetas = metas.map(meta =>
      meta.id === id ? { ...meta, completed: true, completedDate: new Date() } : meta
    );
    setMetas(updatedMetas);
  };

  const getPriorityColor = (date: string) => {
    const today = new Date();
    const dueDate = new Date(date);
    const difference = dueDate.getTime() - today.getTime();
    const days = Math.floor(difference / (1000 * 3600 * 24));
    
    if (days <= 1) return '#FF6F6F'; // Vermelho
    if (days <= 3) return '#FFD54F'; // Amarelo
    return '#66BB6A'; // Verde
  };

  const isOverdue = (date: string) => {
    return new Date(date).getTime() < new Date().getTime();
  };

  const filterMetas = (metas: Meta[]) => {
    const oneMonthAgo = new Date();
    oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);
    
    return metas
      .filter(meta => !(meta.completed && meta.completedDate && meta.completedDate < oneMonthAgo))
      .sort((a, b) => a.priority - b.priority);
  };

  const filteredMetas = filterMetas(metas);

  return (
    <View style={styles.container}>
      <FlatList
        data={filteredMetas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={[styles.metaItem, item.completed && styles.completedMeta, isOverdue(item.date) && !item.completed && styles.overdueMeta]}>
            <View style={[styles.priorityIndicator, { backgroundColor: getPriorityColor(item.date) }]} />
            <View style={styles.metaTextContainer}>
              <Text style={styles.metaName}>{item.name}</Text>
              <Text style={[styles.metaDate, item.completed && styles.completedDate]}>
                Data Final: {item.date}
                {isOverdue(item.date) && !item.completed && <Text style={styles.overdueText}> (Atrasado)</Text>}
              </Text>
            </View>
            {!item.completed && (
              <TouchableOpacity style={styles.completeButton} onPress={() => handleComplete(item.id)}>
                <Icon name="check-circle" size={20} color="#fff" />
               
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

      <AdicionarMetaModal
        visible={showForm}
        onClose={() => setShowForm(false)}
        onAddMeta={addMeta}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212', // Fundo escuro
    padding: 10,
  },
  metaItem: {
    flexDirection: 'row',
    backgroundColor: '#333',
    borderRadius: 8,
    marginBottom: 10,
    padding: 10,
    alignItems: 'center',
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
  completedDate: {
    color: '#ccc', // Cor mais clara para texto quando concluído
  },
  priorityIndicator: {
    width: 10,
    height: 40,
    borderRadius: 5,
  },
  overdueMeta: {
    backgroundColor: '#FF6F6F', // Cor de fundo para itens atrasados
  },
  completedMeta: {
    backgroundColor: '#4CAF50', // Cor de fundo para itens concluídos
  },
  completeButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  completeButtonText: {
    color: '#fff',
    marginLeft: 5,
  },
  floatingButton: {
    position: 'absolute',
    bottom: 20, // Ajuste a distância do fundo se necessário
    right: 20,
    backgroundColor: '#9C27B0', // Cor roxa mais clara
    // backgroundColor: '#16041B', // Cor roxa mais clara
    borderRadius: 50,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
  },
  floatingButtonText: {
    color: '#fff',
    fontSize: 16,
    marginTop: 5,
  },
  overdueText: {
    color: '#FF6F6F',
    fontWeight: 'bold',
  },
});
