import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, Picker} from 'react-native';
import { TextInput, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

export default class RegisterScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        
        <ScrollView>
      <ImageBackground source={require('../pictures/fond.png')} style={styles.cnt1}>
        
            <View style={styles.cnt2}>
                <View>
                    <Text style={styles.txt1}> Your next </Text>
                </View>
                <View>
                    <Text style={styles.txt2}> Jobbing</Text>
                </View>
                <View>
                    <Text style={styles.txt1}> is in 30 seconds further</Text>
                </View>   
                
            </View>
            <View style={styles.cnt3}>
                <Text style={styles.txt3}>
                    Create Your Account 
                </Text>
            </View>
            <View style={styles.cnt2}>
                <TextInput style={styles.input1} placeholder="first name"/>
            </View>

            <View style={styles.cnt2}>
                <TextInput style={styles.input1} placeholder="last name"/>
            </View>

            <View style={styles.cnt2}>
                <TextInput style={styles.input1} placeholder="Email"/>
            </View>
            <View style={styles.cnt4}>
                <Picker
                    mode = 'dialog'
                    

                    
                    style={styles.picker1}
                    
                >
                    <Picker.Item label="male" value="male" />
                    <Picker.Item label="female" value="female" />
                    
                </Picker>
            </View>

            <View style={styles.cnt2}>
                <TextInput style={styles.input1} placeholder="City"/>
            </View>
            <View style={styles.cnt2}>
                <TextInput style={styles.input1} placeholder="password"  secureTextEntry={true}/>
            </View>
            <View style={styles.cnt2}>
                <TextInput style={styles.input1} placeholder="Confirm password"  secureTextEntry={true}/>
            </View>

            <View style={styles.cnt2}>
                <TouchableOpacity style={styles.buttonregister}>
                    <Text style={styles.txt4}> Create </Text>
                </TouchableOpacity>
            </View>
        
      </ImageBackground>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
    cnt1:{
        flex : 1,
        flexDirection:"column",
        alignItems:'center',
        padding: 30,
        backgroundColor:"#f5f7f7",

    },
    cnt2:{
        flex:1,
        flexDirection:'row',
        marginBottom: 15,
    },
    cnt4:{
        flexDirection:'row',
        marginBottom: 15,
        backgroundColor:'white',
        borderRadius: 6,
    },
    txt1:{
        fontSize: 18,
        color:'gray',
        fontWeight:'bold'
    },
    txt2:{
        color:'#d111c1',
        fontSize: 18,
        fontWeight:'bold'
    },
    txt3:{
        color:'#111582',
        fontSize: 20,
        fontWeight:'bold'
    },
    cnt3:{
        marginBottom: 35,
    },
    input1:{
        flex:1,
        backgroundColor: 'white',
        borderRadius: 6,
    },
    picker1:{
        flex:1,
        color: "gray"
          
    },
    buttonregister: {
        flex:0.6,
        alignItems: 'center',
        backgroundColor: '#111582',
        padding: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor:'black',
        width:150,
        
    },
    txt4:{
        color:'white',
        fontSize:17,
        fontWeight: 'bold'
    }

})