import React from 'react';
import { StyleSheet, View } from 'react-native';
import Form from './Forms/index';
import UserDate from './userDate/index';

export default function App() {
    return (
        <View style={styles.container}>
            <Form />
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
