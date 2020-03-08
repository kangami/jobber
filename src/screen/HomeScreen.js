import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.test}>
        <Text> HomeScreen dasfdfsdfdsfdsf sfdsfsdafasdfdsa </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    test :{
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center'
    }
})
