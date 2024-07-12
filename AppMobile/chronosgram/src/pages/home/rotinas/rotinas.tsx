import { KeyboardAvoidingView, StyleSheet, Text, TouchableOpacity, View, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import styles from './style';

export default function Rotinas() {

  const navigation = useNavigation();

  return (
    <KeyboardAvoidingView style={styles.body}>
      <View style={styles.FirstView}>
        <Text style={styles.Traco}> </Text>
        <View style={styles.myRoutines}>
          <Text style={styles.TitleMyRoutines}> Minhas Rotinas </Text>
          <ScrollView horizontal={true}>
            <View style={styles.allOfOneRoutine}>
              <Image style={styles.imgMyRoutine} source={require('../../../../assets/images/rotinas/estagiarios.jpg')} />
              <View style={styles.PartOfOneRoutineColumn}>
                <View style={styles.PartOfOneRoutineRow}>
                  <Text style={styles.TituloRotina} >Rotina para estagiários</Text>
                </View>
                <View style={styles.PartOfOneRoutineRow}>
                  <Text style={styles.By}>by:</Text>
                  <Image style={styles.imgPerfil} source={require('../../../../assets/images/rotinas/perfil.png')} />
                  <Image style={styles.imgElipse} source={require('../../../../assets/images/rotinas/elipse.png')} />
                  <Text style={{ color: "white" }}>500 Junções</Text>
                </View>
              </View>
              <TouchableOpacity>
                <Text style={styles.Button}>Ver</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.allOfOneRoutine}>
              <Image style={styles.imgMyRoutine} source={require('../../../../assets/images/rotinas/estagiarios.jpg')} />
              <View style={styles.PartOfOneRoutineColumn}>
                <View style={styles.PartOfOneRoutineRow}>
                  <Text style={styles.TituloRotina} >Rotina para estagiários</Text>
                </View>
                <View style={styles.PartOfOneRoutineRow}>
                  <Text style={styles.By}>by:</Text>
                  <Image style={styles.imgPerfil} source={require('../../../../assets/images/rotinas/perfil.png')} />
                  <Image style={styles.imgElipse} source={require('../../../../assets/images/rotinas/elipse.png')} />
                  <Text style={{ color: "white" }}>500 Junções</Text>
                </View>
              </View>
              <TouchableOpacity>
                <Text style={styles.Button}>Ver</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
        <Text style={styles.Traco}> </Text>
        <View style={styles.ChooseRoutine}>
          <Text style={styles.TituloRotina}> Rotinas Sugeridas </Text>
          <ScrollView>
            <View style={styles.allOfOneRoutine}>
              <Image style={styles.imgMyRoutine} source={require('../../../../assets/images/rotinas/livros.jpg')} />
              <View style={styles.PartOfOneRoutineColumn}>
                <View style={styles.PartOfOneRoutineRow}>
                  <Text style={styles.TituloRotina} >Melhor rotina do mundo</Text>
                </View>
                <View style={styles.PartOfOneRoutineRow}>
                  <Text style={styles.By}>by:</Text>
                  <Image style={styles.imgPerfil} source={require('../../../../assets/images/rotinas/perfil.png')} />
                  <Image style={styles.imgElipse} source={require('../../../../assets/images/rotinas/elipse.png')} />
                  <Text style={{ color: "white" }}>150 Junções</Text>
                </View>
              </View>
              <TouchableOpacity>
                <Text style={styles.Button}>Entrar</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.allOfOneRoutine}>
              <Image style={styles.imgMyRoutine} source={require('../../../../assets/images/rotinas/engenharia.jpg')} />
              <View style={styles.PartOfOneRoutineColumn}>
                <View style={styles.PartOfOneRoutineRow}>
                  <Text style={styles.TituloRotina} >Rotina para Engenheiros</Text>
                </View>
                <View style={styles.PartOfOneRoutineRow}>
                  <Text style={styles.By}>by:</Text>
                  <Image style={styles.imgPerfil} source={require('../../../../assets/images/rotinas/perfil.png')} />
                  <Image style={styles.imgElipse} source={require('../../../../assets/images/rotinas/elipse.png')} />
                  <Text style={{ color: "white" }}>221 Junções</Text>
                </View>
              </View>
              <TouchableOpacity>
                <Text style={styles.Button}>Entrar</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.allOfOneRoutine}>
              <Image style={styles.imgMyRoutine} source={require('../../../../assets/images/rotinas/estagiarios.jpg')} />
              <View style={styles.PartOfOneRoutineColumn}>
                <View style={styles.PartOfOneRoutineRow}>
                  <Text style={styles.TituloRotina} >Rotina para estagiários</Text>
                </View>
                <View style={styles.PartOfOneRoutineRow}>
                  <Text style={styles.By}>by:</Text>
                  <Image style={styles.imgPerfil} source={require('../../../../assets/images/rotinas/perfil.png')} />
                  <Image style={styles.imgElipse} source={require('../../../../assets/images/rotinas/elipse.png')} />
                  <Text style={{ color: "white" }}>500 Junções</Text>
                </View>
              </View>
              <TouchableOpacity>
                <Text style={styles.Button}>Entrou</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.allOfOneRoutine}>
              <Image style={styles.imgMyRoutine} source={require('../../../../assets/images/rotinas/hidrica.jpg')} />
              <View style={styles.PartOfOneRoutineColumn}>
                <View style={styles.PartOfOneRoutineRow}>
                  <Text style={styles.TituloRotina}>Rotina para Hidrica</Text>
                </View>
                <View style={styles.PartOfOneRoutineRow}>
                  <Text style={styles.By}>by:</Text>
                  <Image style={styles.imgPerfil} source={require('../../../../assets/images/rotinas/perfil.png')} />
                  <Image style={styles.imgElipse} source={require('../../../../assets/images/rotinas/elipse.png')} />
                  <Text style={{ color: "white" }}>14 Junções</Text>
                </View>
              </View>
              <TouchableOpacity>
                <Text style={styles.Button}>Entrar</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </View>
    </KeyboardAvoidingView >
  );
}