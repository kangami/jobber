import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs'
import {NavigationContainer} from '@react-navigation/native';
import MainScreen from '../screen/homesubscreen/MainScreen';
import ProfilScreen from '../screen/homesubscreen/ProfilScreen';
import AdScreen from '../screen/homesubscreen/adsScreen/AdScreen';
import MessageScreen from '../screen/homesubscreen/MessageScreen';
import AdsNav from './AdsNav'
import { MaterialCommunityIcons } from 'react-native-vector-icons';
const Tab = createMaterialBottomTabNavigator();

export default class TabsNav extends Component {
  
  
  render() {
    return (
      
        

        <Tab.Navigator options={{ showIcon:true,}}  showIcon ={true} shifting={false} initialRouteName='Home' backBehavior ='initialRoute'  barStyle= {{ backgroundColor:"#111582" }} activeColor="#f5bf0f" inactiveColor="#f5f0e1">
          <Tab.Screen name ='Home' component={AdsNav} 
            options={{}}
          />
          <Tab.Screen name ='Ads' component={MainScreen} />
          
          <Tab.Screen name ='Ma Job' component={MessageScreen} 
            options={{
              tabBarLabel: 'Jobbing',
   
            }}
          />
         
         <Tab.Screen
          name="Profil"
          component={ProfilScreen}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color }) => {(
              <MaterialCommunityIcons name="account" color={color} size={26} />
            )},
            
          }}
        />
        </Tab.Navigator>
      
    );
  }
}
