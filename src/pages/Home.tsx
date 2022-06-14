import React from 'react';
import { View, StyleSheet, Text, Image, TextInput, FlatList } from 'react-native';
import {Feather as Icon} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { CategoryButton } from '../components/CategoryButton';
import coloors from '../styles/coloors';
import Logo from '../../assets/icon.png';
import { Card } from '../components/Card';


export function Home(){
   const navigation = useNavigation();
   const category = [
      {
         id: 1,
         icon: 'https://raw.githubusercontent.com/franwanderley/goRestaurant/a4bf5b8ce1d836a52948023676ba6a88d2c75822/public/icon/spaguetti.svg',
         name: 'Masssas'
      },
      {
         id: 2,
         icon: 'https://raw.githubusercontent.com/franwanderley/goRestaurant/a4bf5b8ce1d836a52948023676ba6a88d2c75822/public/icon/beef.svg',
         name: 'Carnes'
      },
      {
         id: 3,
         icon: 'https://raw.githubusercontent.com/franwanderley/goRestaurant/a4bf5b8ce1d836a52948023676ba6a88d2c75822/public/icon/pizza.svg',
         name: 'Pizza',
      }
   ];
   function onPlates(){
      navigation.navigate('pratos');
   }

   return (
      <View style={styles.container}>
         <View style={styles.header}>
            <Image source={Logo}  style={{height: 70, width: 70 }}/>
            <View style={{flexDirection: 'column', marginTop: 15}}>
               <Text style={styles.titleHeader}>GoRestaurant</Text>
               <Text style={styles.subTitleHeader}>comida italiana, sim</Text>
            </View>
            <Icon 
               name="log-out" 
               style={{transform: [{rotate: '180deg'}]}} 
               size={40} 
               color={coloors.yellowLight} 
            />
         </View>
         <View style={styles.filters}>
            <View style={styles.inputView}>
               <Icon name="search" size={20} color={coloors.text} style={{marginRight: 5}}/>
               <TextInput
                  style={styles.input}
                  placeholder="Qual comida você procura?"    
               />
            </View>
            <Text style={styles.title}>Categorias</Text>
            <FlatList 
               data={category} 
               renderItem={({item}) => (
                  <CategoryButton
                     key={item.id}
                     data={item}
                  />  
               )} 
               horizontal
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={styles.categoryList}
            />
         </View>
         <View style={styles.plates}>
            <Text style={styles.title}>Platos</Text>
            <FlatList
               data={[1,2,3]}
               renderItem={({item}) => (
                  <Card
                     key={item}
                     onPress={onPlates}
                     />
               )}
               showsVerticalScrollIndicator={false}
            />
         </View>
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      paddingBottom: 10,
      backgroundColor: coloors.white,
      // paddingHorizontal: 10,
      alignItems: 'center',
      justifyContent: 'flex-start'
   },
   header: {
      paddingTop: 50,
      paddingBottom: 70,
      paddingHorizontal: 10,
      backgroundColor: coloors.red,
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
   },
   titleHeader: {
      color: coloors.white,
      fontWeight: '700',
      marginRight: 100,
      fontSize: 25,
      lineHeight: 25,
   },
   subTitleHeader: {
      color: '#FFB1B1',
      fontSize: 15,
   },
   filters: {
      flex: 1,
      width: '100%',
      paddingHorizontal: 20,
   },
   inputView: {
      backgroundColor: '#F0F0F5',
      paddingVertical: 15,
      paddingHorizontal: 15,
      flexDirection: 'row',
      alignItems: 'center',
      width: '100%',
      color: coloors.text,
      fontSize: 15,
      borderRadius: 8,
      position: 'relative',
      top: -20,
   },
   input: {
      color: coloors.text,
   },
   categoryList: {
      justifyContent: 'center',
      paddingBottom: 5,
   },
   plates: {
      flex: 1,
      paddingHorizontal: 10,
      flexDirection: 'column',
      alignItems: 'flex-start',
   },
   title: {
      fontSize: 25,
      marginBottom: 5,
      textAlign: 'left',
      fontWeight: '600'
   }
});