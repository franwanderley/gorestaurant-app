import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { Feather as Icon } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';

import coloors from '../styles/coloors';
import { Addtional } from '../components/Addtional';

export function Plates(){
   const navigation = useNavigation();
   const [price, setPrice] = useState<number>(19.90);
   const [qtdPlates, setQtdPlates] = useState(1);

   function handleFavorite(){

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
            <Text style={styles.titleHeader}>Ao Molho</Text>
            <Icon
               name="heart"
               color={coloors.yellowLight}
               size={30}
               onPress={handleFavorite}
            />
         </View>
         <View style={styles.card}>
            <View style={styles.viewImg}>
               <Image
                  style={styles.img} 
                  source={{
                     uri: "https://raw.githubusercontent.com/franwanderley/goRestaurant/main/public/Ao%20Molho.png"
                  }} 
               />
            </View>
            <View style={styles.viewInfo}>
               <Text style={styles.cardTitle} >Ao Molho</Text>
               <Text style={styles.cardDescription} >
                  Macarrão ao molho branco, fughi e cheiro verde das montanhas.
               </Text>
               <Text style={styles.price}>R$ 19,90</Text>
            </View>
         </View>
         <View style={styles.additional}>
            <Text style={styles.addtionalTitle}>Adicionais</Text>
            <Addtional 
               setPrice={setPrice} 
               addtional={{name: 'Maionese', price: 2}}
            />
            <Addtional 
               setPrice={setPrice} 
               addtional={{name: 'Ketchup', price: 2}}
            />
            <Addtional 
               setPrice={setPrice} 
               addtional={{name: 'Molho', price: 5}}
            />
         </View>

         <View style={styles.viewTotal}>
            <Text style={styles.totalTitle}>Total do Pedido</Text>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
               <Text style={[styles.price, styles.priceTotal]}>R$ {price}</Text>
               <View style={styles.viewQtd}>
                  <TouchableOpacity onPress={() => setQtdPlates(old => old-1)}>
                     <Text style={styles.iconQtd}>-</Text>
                  </TouchableOpacity>
                  <Text style={styles.qtd}>{qtdPlates}</Text>
                  <TouchableOpacity onPress={() => setQtdPlates(old => old+1)}>
                     <Text style={styles.iconQtd}>+</Text>
                  </TouchableOpacity>
               </View>
            </View>
         </View>

         <RectButton style={styles.btn} onPress={() => navigation.navigate('Purchase')}>
               <View style={styles.textView}>
                  <Text style={styles.textButton}>Confirmar Pedido</Text>
               </View>
               <View style={styles.iconView}>
                  <Icon name="check-square" size={25} color={coloors.white} />
               </View>
            </RectButton>  
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: coloors.white,
   },
   header: {
      flexDirection: 'row',
      paddingHorizontal: 15,
      paddingVertical: 50,
      paddingBottom: 100,
      backgroundColor: coloors.red,
      justifyContent: 'space-between',
      width: '100%',
      alignItems: 'center',

   },
   titleHeader: {
      color: coloors.white,
      fontSize: 20,
   },
   card: {
      flexDirection: 'column',
      position: 'relative',
      top: -80,
      marginBottom: 0,
      width: '80%',
      alignSelf: 'center',
      justifyContent: 'center',
   },
   viewImg: {
      width: '100%',
      borderTopLeftRadius:20,
      borderTopRightRadius:20,
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 10,
      backgroundColor: coloors.yellowLight,
   },
   img: {
      width: 150,
      height: 150
   },
   viewInfo: {
      borderBottomLeftRadius:20,
      borderBottomRightRadius:20,
      backgroundColor: coloors.card,
      width: '100%',
      flexDirection: 'column',
      justifyContent: 'space-evenly',
      paddingVertical: 20,
      paddingHorizontal: 15,
   },
   cardTitle: {
      color: '#3d3d4d', 
      fontWeight: '600', 
      fontSize: 25,
   }, 
   cardDescription: {
      fontSize: 15, 
      color: '#3d3d4d',
      textAlign: 'left',
   },
   price: {
      marginTop: 5,
      fontSize: 20,
      color: coloors.true,
   },
   priceTotal: {
      fontSize: 25,
      fontWeight: '700',
   },
   additional: {
      position: 'relative',
      top: -40,
      width: '100%',
      paddingHorizontal: 30,
      alignSelf: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
   },
   addtionalTitle: {
      fontSize: 20,
      fontWeight: '600',
      color: '#3d3d4d', 

   },
   viewTotal: {
      position: 'relative',
      top: -40,
      width: '100%',
      paddingHorizontal: 30,
      alignSelf: 'center',
      flexDirection: 'column',
      justifyContent: 'space-evenly',
      marginTop: 20,
   },
   totalTitle: {
      fontSize: 20,
      fontWeight: '600',
      color: '#3d3d4d',
   },
   viewQtd: {
      flexDirection: 'row',
      paddingHorizontal: 15,
      paddingVertical: 5,
      backgroundColor: coloors.card,
      borderRadius: 6,
      alignItems: 'center',
   },
   qtd: {
      fontSize: 15,
      marginHorizontal: 20,
      color: coloors.text,

   },
   iconQtd:{
      fontSize: 25,
      color: coloors.text,
   },
   btn: {
      position: 'relative',
      top: -30,
      backgroundColor: coloors.true,
      height: 60,
      marginVertical: 20,
      width: '80%',
      alignSelf: 'center',
      flexDirection: 'row',
      borderRadius: 8,
      overflow: 'hidden',
      alignItems: 'center',
   },
   iconView: {
      borderRadius: 8,
      height: 60,
      width: 60,
      backgroundColor: '#41C900',
      justifyContent: 'center',
      alignItems: 'center'
    },
    textButton: {
      color: coloors.white, 
      textAlign: 'center', 
      fontSize: 16, 
      lineHeight: 22.5, 
      fontWeight: '600'
    },
    textView: {
      flex: 1,
      justifyContent: 'center',
      textAlign: 'center',
      color: coloors.white,
      fontSize: 16,
    }

});