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
        flex: 1,
        backgroundColor: '#16041B',
    },
});
