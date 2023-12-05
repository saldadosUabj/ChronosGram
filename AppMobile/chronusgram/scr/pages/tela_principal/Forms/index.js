import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import styles from './style';


export default function Form() {

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





        </View>
    )
}