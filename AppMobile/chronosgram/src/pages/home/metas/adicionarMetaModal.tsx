import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Modal, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import DateTimePicker from '@react-native-community/datetimepicker';

type Meta = {
  id: string;
  name: string;
  date: string;
  priority: number;
  completed: boolean;
  completedDate?: Date;
};

interface AdicionarMetaModalProps {
  visible: boolean;
  onClose: () => void;
  onAddMeta: (meta: Meta) => void;
}

export default function AdicionarMetaModal({
  visible,
  onClose,
  onAddMeta
}: AdicionarMetaModalProps) {
  const [metaName, setMetaName] = useState('');
  const [metaDate, setMetaDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const addMeta = () => {
    if (metaName) {
      const formattedDate = metaDate.toLocaleDateString();
      const priority = Math.floor((metaDate.getTime() - new Date().getTime()) / (1000 * 3600 * 24));
      const newMeta: Meta = { id: Math.random().toString(), name: metaName, date: formattedDate, priority, completed: false };
      onAddMeta(newMeta);
      resetForm();
    }
  };

  const resetForm = () => {
    setMetaName('');
    setMetaDate(new Date());
    onClose();
  };

  const onChangeDate = (event: any, selectedDate?: Date) => {
    const currentDate = selectedDate || metaDate;
    setShowDatePicker(Platform.OS === 'ios');
    setMetaDate(currentDate);
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
          <Text style={styles.title}>Adicionar Nova Meta</Text>
          <TextInput
            style={styles.input}
            placeholder="Nome da Meta"
            value={metaName}
            onChangeText={setMetaName}
            placeholderTextColor="#888"
          />
          <TouchableOpacity style={styles.dateInput} onPress={() => setShowDatePicker(true)}>
            <Text style={styles.dateText}>{metaDate.toLocaleDateString()}</Text>
            <Icon name="calendar-today" size={24} color="#888" />
          </TouchableOpacity>
          {showDatePicker && (
            <View style={styles.datePickerContainer}>
              <DateTimePicker
                value={metaDate}
                mode="date"
                display="default"
                onChange={onChangeDate}
              />
            </View>
          )}
          <TouchableOpacity style={styles.addButton} onPress={addMeta}>
            <Icon name="add" size={24} color="#fff" />
            <Text style={styles.addButtonText}>Adicionar Meta</Text>
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
    color: 'white', // Cor roxa mais clara
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
  dateInput: {
    backgroundColor: '#333',
    color: '#fff',
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#444',
  },
  dateText: {
    flex: 1,
    fontSize: 16,
    color: '#fff',
  },
  datePickerContainer: {
    marginVertical: 10,
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
