import React from 'react';
import { StyleSheet, View } from 'react-native';
import Routes from './Routers/index.js';

export default function App() {
    return (
        <View style={styles.container}>
            <Routes/>
        </View>
    );
}
