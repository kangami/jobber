import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default class LoginInput extends Component {
  
  render() {
    return (
      <View style ={styles.vue}> 
        <TextInput 
            style = {styles.input}
            placeholder = {this.props.display}
            placeholderTextColor = '#e9f5f0'
            autoCapitalize = {this.props.capitalLetter}
            secureTextEntry = {this.props.entry}
        />
      </View>
    );
  }
}

const styles= StyleSheet.create({
    input:{
        borderBottomColor:'#6d7873',
        height: 40,
        borderBottomWidth:4,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        fontSize: 16
    },
    vue:{
        marginTop: 20,
        marginBottom: 25,
    }
})
