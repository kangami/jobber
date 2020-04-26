import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Bartitle from '../../component/Bartitle'

export default class MessageScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Bartitle title="Jobing"/>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    flexDirection: "column"
  }
})