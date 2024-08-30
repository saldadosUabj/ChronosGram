import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, FlatList, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

type Atividade = {
  id: string;
  name: string;
  metaId: string;
  endDate: string;
  status: string;
  materialType: string;
  materialLink?: string;
  bannerUri?: string;
};

type Rotina = {
  id: string;
  name: string;
  atividades: Atividade[];
};

interface AdicionarRotinaModalProps {
  visible: boolean;
  atividadesDisponiveis: Atividade[];
  onClose: () => void;
  onAddRotina: (rotina: Rotina) => void;
}

export default function AdicionarRotinaModal({
  visible,
  atividadesDisponiveis,
  onClose,
  onAddRotina
}: AdicionarRotinaModalProps) {
  const [rotinaName, setRotinaName] = useState('');
  const [selectedAtividades, setSelectedAtividades] = useState<Atividade[]>([]);

  const toggleAtividadeSelection = (atividade: Atividade) => {
    if (selectedAtividades.some(a => a.id === atividade.id)) {
      setSelectedAtividades(selectedAtividades.filter(a => a.id !== atividade.id));
    } else {
      setSelectedAtividades([...selectedAtividades, atividade]);
    }
  };

  const addRotina = () => {
    if (rotinaName && selectedAtividades.length > 0) {
      const newRotina: Rotina = {
        id: Math.random().toString(),
        name: rotinaName,
        atividades: selectedAtividades,
      };
      onAddRotina(newRotina);
      resetForm();
    }
  };

  const resetForm = () => {
    setRotinaName('');
    setSelectedAtividades([]);
    onClose();
  };

  return (
    <Modal
      transparent={true}
      animationType="slide"
      visible={visible}
      onRequestClose={resetForm}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.title}>Adicionar Nova Rotina</Text>
          <TextInput
            style={styles.input}
            placeholder="Nome da Rotina"
            value={rotinaName}
            onChangeText={setRotinaName}
            placeholderTextColor="#888"
          />
          <Text style={styles.label}>Selecione Atividades</Text>
          <FlatList
            data={atividadesDisponiveis}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={[
                  styles.atividadeItem,
                  { backgroundColor: selectedAtividades.some(a => a.id === item.id) ? '#6A1B9A' : '#444' }
                ]}
                onPress={() => toggleAtividadeSelection(item)}
              >
                <Text style={styles.atividadeName}>{item.name}</Text>
              </TouchableOpacity>
            )}
          />
          <TouchableOpacity style={styles.addButton} onPress={addRotina}>
            <Icon name="add" size={24} color="#fff" />
            <Text style={styles.addButtonText}>Adicionar Rotina</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cancelButton} onPress={resetForm}>
            <Text style={styles.cancelButtonText}>Cancelar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  modalContent: {
    width: '90%',
    backgroundColor: '#222',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 2 },
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#9C27B0', // Cor roxa mais clara
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#333',
    color: '#fff',
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#444',
  },
  label: {
    fontSize: 16,
    color: '#9C27B0', // Cor roxa mais clara
    marginBottom: 8,
  },
  atividadeItem: {
    padding: 12,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  atividadeName: {
    color: '#fff',
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    borderRadius: 8,
    marginTop: 10,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 10,
  },
  cancelButton: {
    backgroundColor: 'rgb(0,0,0,0,0)',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  cancelButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
