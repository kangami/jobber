import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack'
import AdScreen from '../screen/homesubscreen/adsScreen/AdScreen'
import AdFields from '../screen/homesubscreen/adsScreen/AdFields'
import DateTimer from '../screen/homesubscreen/adsScreen/DateTimer'
import AdressePrice from '../screen/homesubscreen/adsScreen/AdressePrice'
const Stack = createStackNavigator()

export default class AdsNav extends Component {
  

  render() {
    return (
      <Stack.Navigator>
          <Stack.Screen  
            name="categoryAd"
            component = {AdScreen}
            options={{headerShown:false}}
          /> 
          <Stack.Screen 
            name = "Description"
            component = {AdFields} 
          />

          <Stack.Screen 
            name = "DateTime"
            component = {DateTimer} 
          />
           <Stack.Screen 
            name = "Adresse"
            component = {AdressePrice} 
          />
          
      </Stack.Navigator>
    );
  }
}
