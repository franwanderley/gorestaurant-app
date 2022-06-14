import React from 'react';
import { Text } from 'react-native';
import { StyleSheet, View, Image } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import coloors from '../styles/coloors';

interface CardProps extends RectButtonProps{
  plates?: {
   _id: string;
   image: string;
   title: string;
   description: string;
   price: string;
   isAvaliable: boolean;
   category: string[];
  }
}

export function Card({plates, ...rest}: CardProps){
   return (
      <RectButton style={styles.container} {...rest}>
         <View style={styles.viewImg}>
            <Image 
               source={{
                  uri:"https://raw.githubusercontent.com/franwanderley/goRestaurant/main/public/Ao%20Molho.png"
               }}
               style={styles.img}
            />
         </View>
         <View style={styles.viewInfo}>
            <Text style={{color: '#3d3d4d', fontWeight: '600', fontSize: 22}}>Ao Molho</Text>
            <Text style={styles.text}>
               Macarrão ao molho branco, fughi e cheiro verde das montanhas.
            </Text>
            <Text style={styles.price}>R$ 19,90</Text>
         </View>
      </RectButton>
   );
}
const styles = StyleSheet.create({
   container: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      width: '100%',
      borderRadius: 60,
      height: 120,
      margin: 10,
      
   },
   viewImg: {
      borderTopLeftRadius:20,
      borderBottomLeftRadius:20,
      width: '30%',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: coloors.yellowLight,
   },
   img: {
      width: 90,
      height: 90
   }, 
   viewInfo: {
      width: '70%',
      borderTopRightRadius: 25,
      borderBottomRightRadius: 25,
      backgroundColor: coloors.card,
      flexDirection: 'column',
      paddingVertical: 10,
      paddingHorizontal: 10,
   },
   price: {
      marginTop: 5,
      fontSize: 20,
      color: coloors.true,
   },
   text: {
      fontSize: 12, 
      color: '#3d3d4d',
      textAlign: 'left',
   }
});