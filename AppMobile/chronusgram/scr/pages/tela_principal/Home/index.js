import React from 'react';
import { StyleSheet, View } from 'react-native';
import Form from './Forms/index';
import UserDate from './userDate/index';
import { useRoute } from '@react-navigation/native';


export default function App() {

  const route = useRoute();
  const NomeMetas = route.params?.NomeMetas
  const date = route.params?.date

  console.log(`${NomeMetas} ${date}`);


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
