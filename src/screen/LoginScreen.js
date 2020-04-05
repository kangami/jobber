import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Image, ImageBackground, TouchableOpacity } from 'react-native';
import LoginInput from '../component/LoginInput';

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <ImageBackground source={require('../pictures/font1.png')} style={styles.smallcontainer}>
          <View style={styles.test}>
         
            <View style={styles.blockImg}>
              <Image style={styles.picture} source = {require('../pictures/letjob.png')} />
            </View>
            <View>
              
              <LoginInput display = 'Enter email...' capitalLetter ='none'/>
              <LoginInput display = 'Enter password...' entry ={true}/>
            </View>
            <View>

            
            <View style={styles.loginbutton}>
              
              <TouchableOpacity
                style={styles.buttonlogin}
                onPress={() => this.props.navigation.navigate('Home')}
              >
                <Text style={styles.labelbutton}> Login</Text>
              </TouchableOpacity>
            </View>
            <View>
              

              <TouchableOpacity
                style={styles.buttonregister}
                onPress={() => this.props.navigation.navigate('Subscription')}
              >
                <Text style={styles.labelbutton}> Subscription</Text>
              </TouchableOpacity>
            </View>
            
            
            
            </View>
          </View>
      </ImageBackground>
      
    );
  }
}

const styles = StyleSheet.create({
    test :{
        flex: 1,
        flexDirection: 'column',
        alignContent: 'center',
        paddingLeft:25,
        paddingRight:25,
        marginTop: 100
       
    },
    smallcontainer:{
      flex:1,
      flexDirection: 'column',
      justifyContent: 'center',
      backgroundColor:'#14e39e',
      
    },
    picture:{
      width : 250,
      height: 150,
    },
    blockImg:{
      flexDirection: 'row',
      alignItems:'center',
      justifyContent:'center'
    },
    loginbutton:{
      marginBottom:20
    },
    
    buttonlogin: {
      alignItems: 'center',
      backgroundColor: '#d111c1',
      padding: 10,
      borderRadius: 10,
      borderWidth: 1,
      borderColor:'black'
    },
    buttonregister: {
      alignItems: 'center',
      backgroundColor: '#111582',
      padding: 10,
      borderRadius: 10,
      borderWidth: 1,
      borderColor:'black'
    },
    labelbutton:{
      color: "white",
      fontSize: 17,
      fontWeight:'bold'
    }
})
