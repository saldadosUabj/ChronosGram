// Dependências //
import React, { useState } from 'react';
import { View, TouchableOpacity, ScrollView, Text, ActivityIndicator } from 'react-native';
import { SelectList, MultipleSelectList  } from 'react-native-dropdown-select-list'
import { useNavigation} from '@react-navigation/native'; 
import styles from './style';
import UserApi from '../../../../services/userAPI'

// Função de renderização
export default function Form() {

    // Declaração de variáveis // 
    const navigation = useNavigation();
    const userApi = new UserApi();
    const [dados,setDados] = useState(null);
    const [activityIndicator, setActivityIndicator] = useState(false);

    const data_freeTime = [
        { key: 'equilibrada', value: 'Equilibrada' },
        { key: 'variada', value: 'Variada' },
        { key: 'intensa', value: 'Intensa' },
    ]
    
    const [horario_livre, setHorarioLivre] = useState('')
    const [freeTimeStyle, setFreeTimeStyle] = useState(null)
    const [turno,setTurno] = useState(null)

    // Funções auxiliares
    function getData(){
        if(turno == 'matutino'){
            const data_horarios_matutino = [
                { key: '10-12', value: '10h - 12h' },
                { key: '12-14', value: '12h - 14h' },
                { key: '14-16', value: '14h - 16h' },
                { key: '16-18', value: '16h - 18h' },
                { key: '18-20', value: '18h - 20h' },
                { key: '20-22', value: '20h - 22h' },
                { key: '22-24', value: '22h - 24h' },
            ];
            return data_horarios_matutino
        }
        else if(turno == 'vespetino'){
            const data_horarios_vespetino = [
                { key: '6-8', value: '6h - 8h' },
                { key: '8-10', value: '8h - 10h' },
                { key: '10-12', value: '10h - 12h' },
                { key: '18-20', value: '18h - 20h' },
                { key: '20-22', value: '20h - 22h' },
                { key: '22-24', value: '22h - 24h' },
            ];
            return data_horarios_vespetino
        }
        const data_horarios_integral = [
            { key: '6-8', value: '6h - 8h' },
            { key: '8-10', value: '8h - 10h' },
            { key: '10-12', value: '10h - 12h' },
            { key: '12-14', value: '12h - 14h' },
            { key: '14-16', value: '14h - 16h' },
            { key: '16-18', value: '16h - 18h' },
            { key: '18-20', value: '18h - 20h' },
            { key: '20-22', value: '20h - 22h' },
            { key: '22-24', value: '22h - 24h' },
        ];
        
        return data_horarios_integral
    }

    async function envia(json){
        try{
            let response = await userApi.insertNeuralData(json);
            console.log("foi")
        }catch(error){
            console.log(error)
        }
    }

    function updateDados(){
        const objeto={
            horario_livre: horario_livre,
            freeTimeStyle: freeTimeStyle,
        }
        const dadosJSON = JSON.stringify(objeto,null,2)
        envia(dadosJSON)
    }

    function handlerDados() {
        setActivityIndicator(true);
        setTimeout(() => {
          try{
            updateDados()
            setActivityIndicator(false);
          }catch(error){
            console.log(error)
          }
        }, 2000);
    }

    return (
        <ScrollView style={styles.container}>

            <View>

                <Text style={styles.text}>
                    Turno Livre
                </Text>

                 <MultipleSelectList
                    boxStyles={styles.inputSelectdBox}
                    dropdownStyles={styles.inputBox}
                    dropdownTextStyles={styles.textStyle}
                    inputStyles={styles.textStyle}
                    data={getData()}
                    setSelected={(val) => setHorarioLivre(val)}
                    save={setHorarioLivre}
                    value={horario_livre}
                    placeholder='Horário Livre'/>

                <Text style={styles.text}>
                    Free Time Style
                </Text>

                <SelectList
                    boxStyles={styles.inputSelectdBox}
                    dropdownStyles={styles.inputBox}
                    dropdownTextStyles={styles.textStyle}
                    inputStyles={styles.textStyle}
                    data={data_freeTime}
                    setSelected={setFreeTimeStyle}
                    value={freeTimeStyle}
                    placeholder='Free Time Style'/>

                <TouchableOpacity style={styles.buttonEntrar} onPress={() => handlerDados()}>
                    { activityIndicator? 
                        (<ActivityIndicator size="large" color="#CBC5EA" />) :
                        <Text style={styles.buttonText}> Salvar </Text>}
                </TouchableOpacity>          

            </View>

        </ScrollView>
                
    )
}