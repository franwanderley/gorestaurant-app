import React from 'react';
import { View, StyleSheet, Text, FlatList, Dimensions } from 'react-native';
import {Feather as Icon} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import coloors from '../styles/coloors';
import { Card } from '../components/Card';

export function MyFavorites(){
   const navigation = useNavigation();
   
   function onPlates(){
      navigation.navigate('pratos');
   }

   return (
      <View style={styles.container}>
         <View style={styles.header}>
            <Icon 
               name="arrow-left" 
               color={coloors.yellowLight} 
               size={30} 
               onPress={() => navigation.goBack()}
            />
            <Text style={styles.titleHeader}>Meus Favoritos</Text>
         </View>
         <View style={styles.plates}>

            <FlatList
               data={[1,2,3]}
               renderItem={({item}) => 
                  <Card key={item} onPress={onPlates}/>
               } 
               showsVerticalScrollIndicator={false}
               contentContainerStyle={styles.platesList}
            />
         </View>
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      alignItems: 'flex-start',
      backgroundColor: coloors.white,
   },
   header: {
      flexDirection: 'row',
      paddingHorizontal: 10,
      paddingVertical: 50,
      paddingBottom: 100,
      backgroundColor: coloors.red,
      justifyContent: 'flex-start',
      width: '100%',
      alignItems: 'center',

   },
   titleHeader: {
      color: coloors.white,
      fontSize: 20,
      marginHorizontal: 90,      
   },
   plates: {
      position: 'relative',
      paddingHorizontal: 10,
      top: -70,
   },
   platesList: {

   },

});