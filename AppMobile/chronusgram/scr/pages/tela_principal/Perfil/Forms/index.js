import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity,Image, ScrollView, Text} from 'react-native';
import styles from './style';
import UserApi from '../../../../services/userAPI'
import { useNavigation} from '@react-navigation/native';

export default function Form() {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>

            <Image style={styles.perfil} source={require('../../../../../assets/perfil.png')}/>
            
            <Text style={styles.text}>
                Wandson Emanuel dos Santos Silva {/* Aqui deve ir o nome do aluno, puxado do banco de dados atráves da api */}
            </Text>

            <Text style={styles.text}>
                Engenharia da Computação {/* Aqui deve ir o curso do aluno, puxado do banco de dados atráves da api */}
            </Text>

            <Text style={styles.Lasttext}>
                UFRPE | Integral {/* Aqui deve ir a universidade do aluno, formatado, puxado do banco de dados atráves da api */}
            </Text>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('disciplinas')} >
                <Text style={styles.buttonText}> Disciplinas </Text>
            </TouchableOpacity> 
            
            <TouchableOpacity style={styles.button} >
                <Text style={styles.buttonText} onPress={() => navigation.navigate('TelaPrincipal')}> Relatório </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} >
                <Text style={styles.buttonText} onPress={() => navigation.navigate('TelaPrincipal')}> Calendário </Text>
            </TouchableOpacity>

            <Text onPress={() => navigation.navigate('TelaDeLogin')} style={styles.sair}>
                Sair
            </Text>

        </View>
                
    )
}
