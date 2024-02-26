import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Form from './Forms';

export default function Configuracao() {
    return (
        <View style={styles.container}>
            <Form/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#16041B',
    },
});
