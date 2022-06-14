import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import {SvgFromUri} from 'react-native-svg';
import coloors from '../styles/coloors';
interface CategoryButtonProps extends RectButtonProps{
   data: {
      icon: string;
      name: string;
   };
   active?: boolean;
}

export function CategoryButton({data, active = false, ...rest} : CategoryButtonProps){
   return (
      <RectButton style={styles.container} {...rest}>
         <SvgFromUri 
            uri={data.icon}
            color={coloors.red}
            width={70} 
            height={70} 
         />
         <Text style={styles.text}>
            {data.name}
         </Text>
   </RectButton>
   );
}

const styles = StyleSheet.create({
   container: {
      backgroundColor: coloors.card,
      borderRadius: 20,
      width: 150,
      height: 150,
      padding: 20,
      alignItems: 'center',
      margin: 10,
   }, 
   text: {
      color: coloors.text,
      marginVertical: 16,
   }
});