import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Bartitle from '../../component/Bartitle'
export default class ProfilScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Bartitle title="Profil"/>
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
