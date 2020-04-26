import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs'
import {NavigationContainer} from '@react-navigation/native';
import MainScreen from '../screen/homesubscreen/MainScreen';
import ProfilScreen from '../screen/homesubscreen/ProfilScreen';
import AdScreen from '../screen/homesubscreen/adsScreen/AdScreen';
import MessageScreen from '../screen/homesubscreen/MessageScreen';
import AdsNav from './AdsNav'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Ionicons';
const Tab = createMaterialBottomTabNavigator();

export default class TabsNav extends Component {
  
  
  render() {
    return (
      
        

        <Tab.Navigator options={{ showIcon:true,}}  showIcon ={true} shifting={false} initialRouteName='Home' backBehavior ='initialRoute'  barStyle= {{ backgroundColor:"#111582" }} activeColor="#d111c1" inactiveColor="#f5f0e1">
          <Tab.Screen name ='Home' component={AdsNav} 
            options={{
              tabBarIcon: () => (
                <Image
                source={require('../pictures/hometab.png')}
                style={{width: 22, height: 22, tintColor: "white"}}
              />
              ),
            }}
          />
          <Tab.Screen name ='Ads' component={MainScreen} 
            options={{
              
              tabBarIcon: () => (
                <Image
                source={require('../pictures/adstab.png')}
                style={{width: 22, height: 20, tintColor: "white"}}
              />
              ),
            }}
          />
          
          <Tab.Screen name ='Ma Job' component={MessageScreen} 
            showIcon ={true}
            options={{
              tabBarLabel: 'Jobbing',
              tabBarIcon: () => (
                <Image
                source={require('../pictures/jobbingtab.png')}
                style={{width: 23, height: 26, tintColor: "white"}}
              />
              ),
            }}
          />


         
         <Tab.Screen
          name="Profil"
          component={ProfilScreen}
          options={{
            tabBarLabel: 'Profil',
            tabBarIcon: () => (
              <Image
              source={require('../pictures/profiltab.png')}
              style={{width: 19, height: 23, tintColor: "white"}}
            />
            ),
            
          }}
        />
        </Tab.Navigator>
      
    );
  }
}
