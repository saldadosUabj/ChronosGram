import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, FlatList, Modal, Platform, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import DateTimePicker from '@react-native-community/datetimepicker';
import * as DocumentPicker from 'expo-document-picker';
import * as ImagePicker from 'expo-image-picker';

type Meta = {
  id: string;
  name: string;
};

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

interface AdicionarAtividadeModalProps {
  metas: Meta[];
  visible: boolean;
  onClose: () => void;
  onAddAtividade: (atividade: Atividade) => void;
}

export default function AdicionarAtividadeModal({
  metas,
  visible,
  onClose,
  onAddAtividade
}: AdicionarAtividadeModalProps) {
  const [atividadeName, setAtividadeName] = useState('');
  const [selectedMetaId, setSelectedMetaId] = useState<string | null>(null);
  const [atividadeEndDate, setAtividadeEndDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [atividadeMaterialType, setAtividadeMaterialType] = useState('');
  const [materialLink, setMaterialLink] = useState('');
  const [bannerUri, setBannerUri] = useState<string | null>(null);

  const addAtividade = () => {
    if (atividadeName && selectedMetaId) {
      const formattedDate = atividadeEndDate.toLocaleDateString();
      const newAtividade: Atividade = {
        id: Math.random().toString(),
        name: atividadeName,
        metaId: selectedMetaId,
        endDate: formattedDate,
        status: 'Pendente',
        materialType: atividadeMaterialType,
        materialLink: materialLink || undefined,
        bannerUri: bannerUri || undefined,
      };
      onAddAtividade(newAtividade);
      resetForm();
    }
  };

  const resetForm = () => {
    setAtividadeName('');
    setSelectedMetaId(null);
    setAtividadeEndDate(new Date());
    setAtividadeMaterialType('');
    setMaterialLink('');
    setBannerUri(null);
    onClose();
  };

  const onChangeDate = (event: any, selectedDate?: Date) => {
    const currentDate = selectedDate || atividadeEndDate;
    setShowDatePicker(Platform.OS === 'ios');
    setAtividadeEndDate(currentDate);
  };

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      alert('Desculpe, precisamos de permissões para acessar sua galeria!');
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled && result.assets.length > 0) {
      setBannerUri(result.assets[0].uri);
    }
  };

  const pickDocument = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'],
      });

      if (result.assets != null) {
        setMaterialLink(result.assets.values.name);
      }
    } catch (error) {
      console.error('Error picking document:', error);
    }
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
          <Text style={styles.title}>Adicionar Nova Atividade</Text>
          <TextInput
            style={styles.input}
            placeholder="Nome da Atividade"
            value={atividadeName}
            onChangeText={setAtividadeName}
            placeholderTextColor="#888"
          />
          <TouchableOpacity style={styles.input} onPress={pickImage}>
            <Text style={styles.dateText}>{bannerUri ? 'Alterar Banner' : 'Upload de Banner'}</Text>
            <Icon name="attach-file" size={24} color="#888" />
          </TouchableOpacity>
          <TextInput
            style={styles.input}
            placeholder="Tipo de Material"
            value={atividadeMaterialType}
            onChangeText={setAtividadeMaterialType}
            placeholderTextColor="#888"
          />
          <TextInput
            style={styles.input}
            placeholder="Link do Material (ou faça upload)"
            value={materialLink}
            onChangeText={setMaterialLink}
            placeholderTextColor="#888"
          />
          <TouchableOpacity style={styles.input} onPress={pickDocument}>
            <Text style={styles.dateText}>{materialLink ? 'Alterar Material' : 'Upload de Material'}</Text>
            <Icon name="attach-file" size={24} color="#888" />
          </TouchableOpacity>
          <Text style={styles.label}>Selecione uma Meta</Text>
          <FlatList
            data={metas}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={[
                  styles.metaItem,
                  { backgroundColor: selectedMetaId === item.id ? '#6A1B9A' : '#444' }
                ]}
                onPress={() => setSelectedMetaId(item.id)}
              >
                <Text style={styles.metaName}>{item.name}</Text>
              </TouchableOpacity>
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.metaList}
          />
          <TouchableOpacity style={styles.dateInput} onPress={() => setShowDatePicker(true)}>
            <Text style={styles.dateText}>{atividadeEndDate.toLocaleDateString()}</Text>
            <Icon name="calendar-today" size={24} color="#888" />
          </TouchableOpacity>
          {showDatePicker && (
            <View style={styles.datePickerContainer}>
              <DateTimePicker
                value={atividadeEndDate}
                mode="date"
                display="default"
                onChange={onChangeDate}
              />
            </View>
          )}
          <TouchableOpacity style={styles.addButton} onPress={addAtividade}>
            <Icon name="add" size={24} color="#fff" />
            <Text style={styles.addButtonText}>Adicionar Atividade</Text>
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
  label: {
    fontSize: 16,
    color: '#9C27B0', // Cor roxa mais clara
    marginBottom: 8,
  },
  metaList: {
    paddingVertical: 10,
  },
  metaItem: {
    padding: 12,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 6,
    marginBottom: 3,
  },
  metaName: {
    color: '#fff',
    fontWeight: 'bold',
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
