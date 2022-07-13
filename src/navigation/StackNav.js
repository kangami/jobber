// stackNavigation display use in our main App file to diplay either loginscreen or registerform or our mainhomescreen when our user is logged
import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../screen/LoginScreen';
import MainHomeScreen from '../screen/MainHomeScreen';
import RegisterScreen from '../screen/RegisterScreen';

const Stack = createStackNavigator();
export default class StackNav extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Home"
            component={MainHomeScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen name="Subscription" component={RegisterScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
