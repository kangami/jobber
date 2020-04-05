import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs'
import {NavigationContainer} from '@react-navigation/native';
import MainScreen from '../screen/homesubscreen/MainScreen';
import ProfilScreen from '../screen/homesubscreen/ProfilScreen';
import AdScreen from '../screen/homesubscreen/AdScreen';
import MessageScreen from '../screen/homesubscreen/MessageScreen';
import { MaterialCommunityIcons } from 'react-native-vector-icons/MaterialCommunityIcons';
const Tab = createMaterialBottomTabNavigator();

export default class TabsNav extends Component {
  
  
  render() {
    return (
      
        

        <Tab.Navigator options={{ showIcon:true,}} initialRouteName='Annonce' backBehavior ='initialRoute'  barStyle= {{ backgroundColor:"#111582" }} activeColor="#f5bf0f" inactiveColor="#f5f0e1">
          <Tab.Screen name ='Home' component={MainScreen} 
            options={{}}
          />
          <Tab.Screen name ='Annonce' component={AdScreen} />
          
          <Tab.Screen name ='Ma Job' component={MessageScreen} 
            options={{
              tabBarLabel: 'Ma Job',
              tabBarIcon: ({color}) => {
                <MaterialCommunityIcons name="bell" color="white"  size={26} />
              }
                
              
            }}
          />
         
        </Tab.Navigator>
      
    );
  }
}
