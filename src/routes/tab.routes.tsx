import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import colors from '../styles/coloors';
import { MaterialIcons } from '@expo/vector-icons';
import { Home } from '../pages/Home';
import { MyRequest } from '../pages/MyRequest';
import { MyFavorites } from '../pages/MyFavorites';

const AppTab = createBottomTabNavigator();

//Menu na parte de baixo
const AuthRoutes = () => {
   return (
      <AppTab.Navigator tabBarOptions={{ 
         activeTintColor: colors.red,
         inactiveTintColor: colors.inputs,
         labelPosition:'beside-icon',
         style: {
            paddingVertical: 10,
            height: 88,
         },
      }}>
         <AppTab.Screen
            name="Listagem"
            component={Home}
            options={{ 
               tabBarIcon: (({size, color}) => 
                  <MaterialIcons name="list" size={size} color={color}/>
               )
            }}
         />
         <AppTab.Screen
            name="Pedidos"
            component={MyRequest}
            options={{ 
               tabBarIcon: (({size, color}) => 
                  <MaterialIcons name="shopping-cart" size={size} color={color}/>
               )
            }}
         />
         <AppTab.Screen
            name="Favoritos"
            component={MyFavorites}
            options={{ 
               tabBarIcon: (({size, color}) => 
                  <MaterialIcons name="favorite" size={size} color={color}/>
               )
            }}
         />

      </AppTab.Navigator>
   );
} 
export default AuthRoutes;