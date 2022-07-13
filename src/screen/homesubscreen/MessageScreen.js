//file where it's display current ads posted and ads that have been reply to
import React, {Component} from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import Bartitle from '../../component/Bartitle';

export default class MessageScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ImageBackground
        source={require('../../pictures/fond.png')}
        style={styles.container}>
        <Bartitle title="Jobing" />
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
});
