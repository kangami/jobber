import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import LoginInput from '../component/LoginInput';

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.smallcontainer}>
          <View style={styles.test}>
         
            <View style={styles.blockImg}>
              <Image style={styles.picture} source = {{uri:'https://i.ibb.co/r2n6Qsy/logobrigeet.png'}} />
            </View>
            <View>
              
              <LoginInput display = 'Enter email...' capitalLetter ='none'/>
              <LoginInput display = 'Enter password...' entry ={true}/>
            </View>
            <View>
            <Button
              title="Login"
              color="#3baaeb"
              onPress={() => this.props.navigation.navigate('Home')}
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
      flexDirection: 'column',
      justifyContent: 'center',
      backgroundColor:'#14e39e',
      
    },
    picture:{
      width : 250,
      height: 70,
    },
    blockImg:{
      flexDirection: 'row',
      alignItems:'center',
      justifyContent:'center'
    }
})
