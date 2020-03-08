import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import LoginInput from '../component/LoginInput';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.smallcontainer}>
          <View style={styles.test}>
            <Text> Brigeet </Text>
            <View>
              
              <LoginInput display = 'Enter email...' capitalLetter ='none'/>
              <LoginInput display = 'Enter password...' entry ={true}/>
            </View>
            <View>
            <Button
              title="Login"
              color="#3baaeb"
              onPress={() => alert('Button with adjusted color pressed')}
            />
            </View>
          </View>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
    test :{
        flex: 1,
        flexDirection: 'column',
        alignContent: 'center',
        paddingLeft:17,
        paddingRight:17,
        marginTop: 150
       
    },
    smallcontainer:{
      flex:1,
      flexDirection: 'row',
      justifyContent: 'center',
      backgroundColor:'#14e39e',
      
    }
})
