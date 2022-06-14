import React, { useEffect, useState } from 'react';
import {createStackNavigator} from '@react-navigation/stack';


import AuthRoutes from './tab.routes';
import colors from '../styles/coloors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Purchase } from '../pages/Purchase';
import { MyRequest } from '../pages/MyRequest';
import { MyFavorites } from '../pages/MyFavorites';
import { Login } from '../pages/Login';
import { Plates } from '../pages/Plates';

const StackRoutes = createStackNavigator();

const AppRoutes : React.FC = () => {
   const [isRegistred, setIsRegistred] = useState<Boolean>();

   useEffect(() => {
      async function isRegistered() {
         const name = await AsyncStorage.getItem('@gorestaurant:user');
         setIsRegistred(name ? true : false);
      } 
      isRegistered();
   },[])
   if(isRegistred){
      return (
         <StackRoutes.Navigator
            headerMode= "none"
            screenOptions={{
               cardStyle: { backgroundColor: colors.background }
            }}
         >
            <StackRoutes.Screen
               name="Home"
               component={AuthRoutes}
            />
            <StackRoutes.Screen
               name="Comprar"
               component={Purchase}
            />
            <StackRoutes.Screen
               name="platos"
               component={Plates}
            />
            <StackRoutes.Screen
               name="MyRequest"
               component={MyRequest}
            />
            <StackRoutes.Screen
               name="MyFavorites"
               component={MyFavorites}
            />
         </StackRoutes.Navigator>
      )
   }
   return (
      <StackRoutes.Navigator
         headerMode= "none"
         screenOptions={{
            cardStyle: { backgroundColor: colors.background }
         }}
      >
         <StackRoutes.Screen
            name="Login"
            component={Login}
         />
         <StackRoutes.Screen
               name="Home"
               component={AuthRoutes}
            />
            <StackRoutes.Screen
               name="Comprar"
               component={Purchase}
            />
            <StackRoutes.Screen
               name="pratos"
               component={Plates}
            />
            <StackRoutes.Screen
               name="MyRequest"
               component={MyRequest}
            />
            <StackRoutes.Screen
               name="MyFavorites"
               component={MyFavorites}
            />
      </StackRoutes.Navigator>
   )
}
export default AppRoutes;