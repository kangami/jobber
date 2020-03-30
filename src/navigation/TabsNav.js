import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {NavigationContainer} from '@react-navigation/native';
import MainScreen from '../screen/homesubscreen/MainScreen';
import ProfilScreen from '../screen/homesubscreen/ProfilScreen';
import AdScreen from '../screen/homesubscreen/AdScreen';
import MessageScreen from '../screen/homesubscreen/MessageScreen';

const Tab = createBottomTabNavigator();

export default class TabsNav extends Component {
  
  
  render() {
    return (
      
        <Tab.Navigator initialRouteName='home' backBehavior ='initialRoute' tabBarOptions={{activeTintColor: '#e91e63',}}>
            <Tab.Screen name ='home' component={MainScreen} />
            <Tab.Screen name ='Ads' component={AdScreen} />
            <Tab.Screen name ='Message' component={MessageScreen} />
            <Tab.Screen name ='Profil' component={ProfilScreen} />
        </Tab.Navigator>
      
    );
  }
}
