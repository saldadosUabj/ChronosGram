import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AdicionarRotinaModal from './AdicionarRotinaModal';

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

const atividadesData: Atividade[] = [
  { id: '1', name: 'Atividade 1', metaId: '1', endDate: '2024-08-29', status: 'Pendente', materialType: 'PDF' },
  { id: '2', name: 'Atividade 2', metaId: '2', endDate: '2024-09-01', status: 'Pendente', materialType: 'Imagem' },
  { id: '3', name: 'Atividade 3', metaId: '3', endDate: '2024-09-03', status: 'Pendente', materialType: 'Link' },
  // Adicione mais atividades conforme necessário
];

export default function MinhaRotina() {
  const [rotinas, setRotinas] = useState<Rotina[]>([]);
  const [showForm, setShowForm] = useState(false);

  const addRotina = (rotina: Rotina) => {
    setRotinas([...rotinas, rotina]);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={rotinas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.rotinaItem}>
            <Text style={styles.rotinaName}>{item.name}</Text>
            <FlatList
              data={item.atividades}
              keyExtractor={(atividade) => atividade.id}
              renderItem={({ item: atividade }) => (
                <Text style={styles.atividadeName}>- {atividade.name}</Text>
              )}
            />
          </View>
        )}
      />

      <TouchableOpacity
        style={styles.floatingButton}
        onPress={() => setShowForm(true)}
      >
        <Icon name="add" size={24} color="#fff" />
      </TouchableOpacity>

      <AdicionarRotinaModal
        visible={showForm}
        atividadesDisponiveis={atividadesData}
        onClose={() => setShowForm(false)}
        onAddRotina={addRotina}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
    padding: 10,
  },
  rotinaItem: {
    backgroundColor: '#333',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
  },
  rotinaName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  atividadeName: {
    fontSize: 16,
    color: '#ddd',
  },
  floatingButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#9C27B0', // Cor roxa mais clara
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
