import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import styles from './style';
import { useNavigation} from '@react-navigation/native';


// style={styles.inputBox}
//                 onChangeText={setEmail}
//                 value={email}
//                 placeholder='Email'
//                 keyboardType='default'/>

export default function Form() {

    const navigation = useNavigation();
    const [cadeira1, SetCadeira1] = useState(null)
    const [cadeira2, SetCadeira2] = useState(null)

    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <Text style={styles.TextBox}>
                    Selecione as cadeiras {'\n'}
                    que você está cursando
                </Text>
                <TextInput
                 style={styles.TextInputBox}
                 value={cadeira1}
                 onChangeText={SetCadeira1}
                 placeholder='Adicione Aqui'
                 keyboardType='default'>                    
                </TextInput>

                <TouchableOpacity style={styles.buttonBox}>
                    <Text style={styles.TextButtonBox}>
                        +
                    </Text>
                </TouchableOpacity>
            </View>


            <TouchableOpacity  style={styles.Button} onPress={() => navigation.navigate('TelaPrincipal')}>
            <Text style={styles.TextButton}> {'>'} </Text>
            </TouchableOpacity> 
        </View>
    )
}