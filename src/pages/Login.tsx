import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { Feather as Icon } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'

import coolors from '../styles/coloors';
import Logo from '../../assets/icon.png';
import coloors from '../styles/coloors';

export function Login(){
   const navigation = useNavigation();
   return (
      <View style={styles.container}>
         <View style={styles.header}>
            <Image source={Logo} style={{height: 70, width: 70 }} />
            <Text style={styles.titleHeader}>GoRestaurant</Text>
            <Text style={styles.subTitleHeader}>Comida Italiana, sim</Text>
         </View>
         <View style={styles.main}>
            <Text style={styles.titleMain}>Uma verdardeira experiência italiana.</Text>
            <RectButton style={styles.login} onPress={() => navigation.navigate('Home')}>
               <View style={styles.textView}>
                  <Text style={styles.textButton}>Entrar no Restaurant</Text>
               </View>
               <View style={styles.iconView}>
                  <Icon name="log-in" size={30} color="#7a1818" />
               </View>
            </RectButton>
         </View>
      </View>
   );
}
const styles = StyleSheet.create({
   container: {
      flex: 1,
      paddingVertical:30,
      paddingHorizontal: 40,
      justifyContent: 'flex-start',
      backgroundColor: coolors.red,
   },
   header: {
      marginTop: 50,
      alignItems: 'flex-start',
      justifyContent: 'space-around',
   },
   titleHeader: {
      color: coloors.white,
      fontWeight: '700',
      marginTop: 10,
      fontSize: 30,
      lineHeight: 50,
   },
   subTitleHeader: {
      color: '#FFB1B1',
      fontSize: 15,
   },
   main: {
      marginTop: 50,
      alignItems: 'center',
      justifyContent: 'space-between',
      flex: 1,
   },
   titleMain: {
      fontWeight: '600',
      color: coloors.white,
      fontSize: 50,
      lineHeight: 60,
   },
   login: {
      backgroundColor: coloors.yellow,
      height: 60,
      flexDirection: 'row',
      borderRadius: 8,
      overflow: 'hidden',
      alignItems: 'center',
      marginTop: 8,
   },
   iconView: {
      borderRadius: 8,
      height: 60,
      width: 60,
      backgroundColor: coolors.yellowLight,
      justifyContent: 'center',

      alignItems: 'center'
    },
    textButton: {
      color: '#7a1818', 
      textAlign: 'center', 
      fontSize: 16, 
      lineHeight: 22.5, 
      fontWeight: '600'
    },
    textView: {
      flex: 1,
      justifyContent: 'center',
      textAlign: 'center',
      color: coloors.text,
      fontSize: 16,
    }
});