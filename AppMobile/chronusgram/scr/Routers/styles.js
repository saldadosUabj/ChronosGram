import { StyleSheet } from "react-native";
import Constants from 'expo-constants';

const styles = StyleSheet.create({
    container: {
      width: '100%',
      height: '100%',
      backgroundColor: '#16041B',
  },
  containerStyle:{
      padding: 3,
      backgroundColor: "#76618D", 
      borderRadius: 15,
      paddingTop: Constants.statusBarHeight + 10,
      paddingBottom: 8
  },
  indicator:{
      backgroundColor: "#CBC5EA",
      position: 'absolute',
      zIndex: -1,
      right: '5%',
      bottom: '5%',
      height: '52%',
      borderRadius: 12,
  },
  icon:{
      alignContent:"center",
      alignItems:'center' , 
      justifyContent: 'flex-start',   
      width:30,
      height: 30,  
  }
});
export default styles