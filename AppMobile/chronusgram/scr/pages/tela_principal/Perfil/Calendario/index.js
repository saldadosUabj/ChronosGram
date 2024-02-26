import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity,Image, ScrollView, Text, ActivityIndicator } from 'react-native';
import styles from './style';
import { useNavigation} from '@react-navigation/native';
import CalendarPicker from 'react-native-calendar-picker';


export default function Calendario() {

    const navigation = useNavigation();
    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateChange = (date) => {
        if (date instanceof Date) {
            setSelectedDate(date);
            // Faça algo com a data selecionada, se necessário
            console.log(date.toISOString()); // Use toISOString ou outro método de formatação
        }
    };

    return (
        <View style={styles.container}>

            <Text style={styles.Text}>
                Calendário
            </Text>
            
            <View style={styles.calendario}>

                <CalendarPicker
                    onDateChange={handleDateChange}
                    selectedStartDate={selectedDate}
                    selectedEndDate={selectedDate}/>

            </View>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('disciplinas')}> 
                <Text style={styles.buttonText}> Adicionar Evento </Text>
            </TouchableOpacity>

            <View style={styles.alerts}>

                <Image style={styles.pngAlert} source={require('../../../../../assets/alert.png')}/>
                <Text style={styles.textAlert}> Física 3 </Text>
                <Text style={styles.textDate}> 15/03 </Text>

            </View>            

        </View>
                
    )
}
