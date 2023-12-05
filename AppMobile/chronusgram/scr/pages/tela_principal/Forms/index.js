import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity,Image } from 'react-native';
import styles from './style';
import UserApi from '../../../services/userAPI'
import { useNavigation} from '@react-navigation/native';



export default function Form() {

    const navigation = useNavigation();
    const userApi = new UserApi()
    const [dados,setDados] = useState(null)

    async function getDados(){
        let response = await userApi.getInfo();
        setDados(response)
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Text> tela principal é aqui oxi </Text>
            </TouchableOpacity>

        <View style = {styles.Caixabaixo}>
            <Text style = {styles.Titulo}>Perfomance</Text>
        
        <View style = {styles.CaixaDentroEsquerda}>

        </View>
            <Text style = {styles.Titulo2}>
                Ofensiva
            </Text>
            <Text style = {styles.Titulo3}>15</Text>
            <Text style = {styles.Titulo2}> Fogo 12%</Text>
        </View>

        <View style = {styles.CaixaDentroDireita}>
            <Text style = {styles.Titulo4}>
                    Constância
            </Text>
            <Text style = {styles.Titulo5}>70</Text>
            <Text style = {styles.Titulo6}>24%</Text>
        </View>

        
        <View style ={styles.CaixaDeCima}>
        <Text style={styles.Titulo7} onPress={() => navigation.navigate('resultados')}>
            Calculo 2
        </Text>
        <Text style={styles.Titulo8}>
        <Image style= {styles.Relojo} source={require('../../../../assets/relojo.png')}/>  20:00
        </Text>
        <Text style={styles.Titulo9}>
            30 coins
        </Text>
        </View>

        
        <View style = {styles.CaixaAbaixoDcima}>
             <Image style= {styles.Confirma} source={require('../../../../assets/confirm.png')}/>
             <Image style= {styles.Advert} source={require('../../../../assets/adv.png')}/>
             <Image style= {styles.X} source={require('../../../../assets/xis.png')}/>
        </View>

        <View style = {styles.CaixaPrimeiraDcima}>
        <Image style= {styles.Perfil} source={require('../../../../assets/perfil.png')}/>
        <Image style= {styles.Casa} source={require('../../../../assets/casa.png')}/>
        <Image style= {styles.Config} source={require('../../../../assets/confi.png')}/>
        </View>


        </View>

        
    )
}