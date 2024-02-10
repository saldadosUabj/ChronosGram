import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity,Image, ScrollView } from 'react-native';
import styles from './style';
import UserApi from '../../../../services/userAPI'
import { useNavigation} from '@react-navigation/native';
import { BlurView } from 'expo-blur';
import { Avatar, Button, Card, Text } from 'react-native-paper';

export default function Form() {

    const navigation = useNavigation();
    const userApi = new UserApi()
    const [dados,setDados] = useState(null)

    async function getDados(){
        let response = await userApi.getInfo();
        setDados(response)
    }

    return (
        <ScrollView>

            <View style={styles.container}>

                <View style ={styles.Card}>
                
                    <Text style={styles.NomeCadeira} onPress={() => navigation.navigate('resultados')}> Calculo 2 </Text>
                    <Text style={styles.HorarioPNG}>
                        <Image style= {styles.Relojo} source={require('../../../../../assets/relojo.png')}/>  20:00
                    </Text>
                    <Text style={styles.Coins}>30 coins</Text>

                </View>

                <View style = {styles.BoxButtons}>
                    <Image style= {styles.Confirma} source={require('../../../../../assets/confirm.png')}/>
                    <Image style= {styles.Advert} source={require('../../../../../assets/adv.png')}/>
                    <Image style= {styles.X} source={require('../../../../../assets/xis.png')}/>
                </View>                

            </View>            

        </ScrollView>
                
    )
}


        // <View style = {styles.Caixabaixo}>
        //     <Text style = {styles.Titulo}>Perfomance</Text>
        
        // <View style = {styles.CaixaDentroEsquerda}>

        // </View>
        //     <Text style = {styles.Titulo2}>
        //         Ofensiva
        //     </Text>
        //     <Text style = {styles.Titulo3}>15</Text>
        //     <Text style = {styles.Titulo10}>12%</Text>
        //     <Image style= {styles.Fogo} source={require('../../../../assets/Fogo.png')}/>
        // </View>

        // <View style = {styles.CaixaDentroDireita}>
        //     <Text style = {styles.Titulo4}>
        //             Constância
        //     </Text>
        //     <Text style = {styles.Titulo5}>70</Text>
        //     <Image style = {styles.Polygon} source={require('../../../../assets/polygon.png')}></Image> 
        //     <Text style = {styles.Titulo6}>24%</Text>
        // </View>

        
        

        // <View style = {styles.CaixaDeCima2}>  
        // <Text style = {styles.Titulo7}>TESTANDO</Text>  
        // <View style = {styles.CaixaAbaixoDcima2}>
        //      <Image style= {styles.Confirma} source={require('../../../../assets/confirm.png')}/>
        //      <Image style= {styles.Advert} source={require('../../../../assets/adv.png')}/>
        //      <Image style= {styles.X} source={require('../../../../assets/xis.png')}/>

        // <BlurView intensity={5} style = {styles.Borrado}
        // blurType="light"
        // blurAmount={10}  
        //     /> 
        // </View>

        // <BlurView intensity={5} style = {styles.Borrado}
        // blurType="light"
        // blurAmount={10}  
        //     /> 
        // </View>

        


        // <View style = {styles.CaixaPrimeiraDcima}>
        // <Image style= {styles.Perfil} source={require('../../../../assets/perfil.png')}/>
        // <Image style= {styles.Casa} source={require('../../../../assets/casa.png')}/>
        // <Image style= {styles.Config} source={require('../../../../assets/confi.png')}/>
        // </View>

        // <View style = {styles.BarraLateral}>

        // </View>