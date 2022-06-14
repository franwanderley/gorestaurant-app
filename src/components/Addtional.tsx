import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';
import coloors from '../styles/coloors';

interface AddtionalProps{
   setPrice: React.Dispatch<React.SetStateAction<number>>;
   addtional: {
      name: string;
      price: number;
   }
}

export function Addtional({setPrice, addtional}: AddtionalProps){
   const [qtd, setQtd] = useState(0);

   function handleAdd(){
      setQtd(old => old+1);
   }
   function handleRemove(){
      if(qtd > 0)
         setQtd(old => old-1);
   }

   return (
      <View style={styles.container}>
         <Text style={styles.text}>{addtional.name}</Text>
         <View style={{flexDirection: 'row', alignItems: 'center'}}>
               <TouchableOpacity onPress={handleRemove}>
                  <Text style={styles.iconQtd}>-</Text>
               </TouchableOpacity>
              <Text style={styles.qtd}>{qtd}</Text>
              <TouchableOpacity onPress={handleAdd}>
               <Text style={styles.iconQtd}>+</Text>
              </TouchableOpacity>
         </View>
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 15,
      paddingVertical: 5,
      backgroundColor: coloors.card,
      borderRadius: 6,
      alignItems: 'center',

      marginVertical: 10,
   },
   text: {
      fontSize: 15,
      color: coloors.text,
   },
   qtd: {
      fontSize: 15,
      marginHorizontal: 20,
      color: coloors.text,
   },
   iconQtd:{
      fontSize: 25,
      color: coloors.text,
   }
});