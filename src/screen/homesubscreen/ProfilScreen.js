// file to manage user profile
import React, {Component} from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import Bartitle from '../../component/Bartitle';
export default class ProfilScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ImageBackground
        source={require('../../pictures/fond.png')}
        style={styles.container}>
        <Bartitle title="Profile" />
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
