import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Bartitle extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.searchBar} >
        <Text style={styles.title1}> {this.props.title}</Text>
      </View>
    );
  }
}
 const styles = StyleSheet.create({
    searchBar:{
        flex: 0.07,
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#111582",
    
    },
    title1:{
        textAlign: "center",
        textAlignVertical: "center",
        color: "white",
        fontSize: 20,
        fontWeight: "bold"
    } 
 })