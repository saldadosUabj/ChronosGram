import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Perfil() {
    return (
        <View style={styles.container}>
            <Text>
                Perfil
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#16041B',
    },
});
