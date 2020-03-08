import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from '../screen/HomeScreen';

const Stack = createStackNavigator();
export default class StackNav extends Component {
  

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name ='Home' component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
