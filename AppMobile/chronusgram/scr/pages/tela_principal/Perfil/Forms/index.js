// Dependências //
import React, { useState } from 'react';
import { View, TouchableOpacity,Image, Text} from 'react-native';
import { useNavigation} from '@react-navigation/native';
import styles from './style';
import UserApi from '../../../../services/userAPI'

// Função de renderização
export default function Form() {

    // Declaração de variáveis
    const navigation = useNavigation();

    // Renderização
    return (
        <View style={styles.container}>

            <Image style={styles.perfil} source={require('../../../../../assets/perfil.png')}/>
            
            <Text style={styles.text}>
                Fulaninho dos Santos Silva {/* Aqui deve ir o nome do aluno, puxado do banco de dados atráves da api */}
            </Text>

            <Text style={styles.text}>
                Engenharia da Computação {/* Aqui deve ir o curso do aluno, puxado do banco de dados atráves da api */}
            </Text>

            <Text style={styles.textUniversidade}>
                UFRPE | Integral {/* Aqui deve ir a universidade do aluno, formatado, puxado do banco de dados atráves da api */}
            </Text>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('disciplinas')} >

                <Text style={styles.buttonText}> Disciplinas </Text>

            </TouchableOpacity> 
            
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('TelaPrincipal')}>

                <Text style={styles.buttonText}> Relatório </Text>

            </TouchableOpacity>

            <TouchableOpacity style={styles.button}  onPress={() => navigation.navigate('calendario')} >

                <Text style={styles.buttonText}> Calendário </Text>

            </TouchableOpacity>

            <Text onPress={() => navigation.navigate('TelaDeLogin')} style={styles.sair}>
                Sair
            </Text>

        </View>
                
    )
}
