// Dependências //
import React from 'react';
import { useRoute } from '@react-navigation/native';
import { StyleSheet, View } from 'react-native';
import Form from './Forms/index';
import UserDate from './userDate/index';

// Função de renderização //
export default function App() {

    // Declaração de varíaveis //
    const route = useRoute();
    const NomeMetas = route.params?.NomeMetas
    const date = route.params?.date

    console.log(`${NomeMetas} ${date}`)

    // Função de renderização
    return (
        <View style={styles.container}>
            <Form NomeMetas={NomeMetas} date={date} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#16041B',
    },
});
