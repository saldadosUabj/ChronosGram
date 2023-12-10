import React, { useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native';
import styles from './style';

export default function MyComponent() {
  const [infos, setInfos] = useState(null);

  async function getInfo() {
    try {
      const response = await fetch('https://fast-api-x5fr.onrender.com/tarefas');
      const data = await response.json();
      console.log(data);
      const Infos = data[0];
      setInfos(Infos); // Atualiza o estado com os dados obtidos
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
    }
  }

  useEffect(() => {
    getInfo(); // Chama a função getInfo() quando o componente for montado
  }, []);

  return (
    <View style={styles.container}>
      {infos && (
        <View>
          <Text style={styles.text}>Nome: {infos.Nome}</Text>
          <Text style={styles.text}>Status: {infos.Status}</Text>
          <Text style={styles.text}>Assunto: {infos.Assunto}</Text>
          <Text style={styles.text}>Material de Estudo: {infos['Material de Estudo']}</Text>
          <Text style={styles.text}>Tipo: {infos.Tipo}</Text>
          <Text style={styles.text}>Recomendações: {infos.Recomendações}</Text>
          <Text style={styles.text}>Qualidade: {infos.Qualidade}</Text>
          <Text style={styles.text}>Pontuação: {infos.Pontuação}</Text>
          <Text style={styles.text}>Horário: {infos['Horário']}</Text>
          <Text style={styles.text}>Prioridade: {infos.Prioridade}</Text>
          <Text style={styles.text}>Data Início: {infos['Data Início']}</Text>
          <Text style={styles.text}>Data Final: {infos['Data Final']}</Text>
          <Text style={styles.text}>Tempo Estimado: {infos['Tempo Estimado']}</Text>
          <Text style={styles.text}>Posição: {infos.posição}</Text>          
        </View>
      )}
    </View>
  );
}
