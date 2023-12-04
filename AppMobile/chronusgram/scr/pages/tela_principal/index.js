import React from 'react';
import { StyleSheet, View } from 'react-native';
import Dados from './userDates/index'; // Corrija o caminho do arquivo, se necessário

export default function App() {
    return (
        <View style={styles.container}>
            <Dados />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#16041B',
    },
});
