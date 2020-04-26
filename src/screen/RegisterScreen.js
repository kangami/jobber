import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, Picker, Alert} from 'react-native';
import { TextInput, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import {db} from '../firebase/FirebaseConnexion'

export default class RegisterScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
        first : '',
        last: '',
        email: '',
        sexe:'male',
        city: '',
        password:'',
        confpassword:''
    };

    this.emailLists=[]
    this.isuser = '';
  }

  componentDidMount(){
      this.emailLists = []
    db.firestore().collection("Users").onSnapshot( Snapshot => {
               
        Snapshot.docs.forEach(doc => {
            this.emailLists.push(doc.data().email)  
            
        })
    })

  }
  // group of functions using to update our states on designed input change value
  _firstChange(text){
      this.setState({
          first:text
      })
  }

  _lastChange(text){
    this.setState({
        last:text
    })
  }

  _emailChange(text){
      
    this.setState({
        email:text
    })
  }

  _citychange(text){
    this.setState({
        city:text
    })
  }

  _passwordChange(text){
    this.setState({
        password:text
    })
  }

  _confpasswordChange(text){
    this.setState({
        confpassword:text
    })
  }

  _sexechange(text){
      this.setState({
          sexe: text
      })
  }

  checkfirst(){
    if (this.state.first == '') {
       alert('Please fill the field') 
    }
  }

  // function that return a boolean base if a user is on datatbase or not
_checkUserExistOnDatabase(email, tab){
    let controller
    for(i = 0; i<tab.length; i++){
        if(email == tab[i]){
            controller = true
            return controller
        }else{
            controller = false
        }
    }
    return controller   
}

  // function which is trigerred when a user click to create account button 
_createUser(){
   
    
      //we verified first that all fill are not empty
     if (this.state.first == '' || this.state.last == '' || this.state.email =='' || this.state.city == '' || this.state.password == '' || this.state.confpassword == '') {
          Alert.alert('Please filled all fields before proceed')
      } else {
          // checking if password nd confirm password are equal 
          if (this.state.password != this.state.confpassword) {
              Alert.alert("confirm password don't Match ")
          } else {
             
                if(this._checkUserExistOnDatabase(this.state.email, this.emailLists)){
                    Alert.alert('User already exist')
                }else{
                    let d = new Date()
                    

                    //getting the current date 
                    let dateSave = d.getDate() + '/' + (d.getMonth()+1) + '/' + d.getFullYear()
                    
                    // saving data to firebase
                    db.firestore().collection("Users").add({
                        dateCreation : dateSave,
                        firstName: this.state.first,
                        lastName: this.state.last,
                        email: this.state.email,
                        sexe: this.state.sexe,
                        city:this.state.city,
                        password: this.state.password
                    })
                    .then(()=>{
                        Alert.alert('Your Account Was Create')
                        this.props.navigation.navigate('Home')
                        
                    })
                    .catch((error)=>{
                        console.error("Error adding document: ", error);
                    });
                }
                
            
            
           
            
        
                // get the date 
                
            }
            
            
          
      }

    
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
                <TextInput style={styles.input1} placeholder="first name" onChangeText={ text => this._firstChange(text)} />
            </View>

            <View style={styles.cnt2}>
                <TextInput style={styles.input1} placeholder="last name" onChangeText={ text => this._lastChange(text)}/>
            </View>

            <View style={styles.cnt2}>
                <TextInput style={styles.input1} placeholder="Email" autoCapitalize="none" onChangeText={ text => this._emailChange(text)}/>
            </View>
            <View style={styles.cnt4}>
                <Picker
                    mode = 'dialog'
                    selectedValue={this.state.sexe}
                    onValueChange={(itemValue, itemPosition)=>this._sexechange(itemValue)}
                    style={styles.picker1}
                    
                >
                    <Picker.Item label="male" value="male" />
                    <Picker.Item label="female" value="female" />
                    
                </Picker>
            </View>

            <View style={styles.cnt2}>
                <TextInput style={styles.input1} placeholder="City" onChangeText={ text => this._citychange(text)}/>
            </View>
            <View style={styles.cnt2}>
                <TextInput style={styles.input1} placeholder="password"  secureTextEntry={true} onChangeText={ text => this._passwordChange(text)}/>
            </View>
            <View style={styles.cnt2}>
                <TextInput style={styles.input1} placeholder="Confirm password"  secureTextEntry={true} onChangeText={ text => this._confpasswordChange(text)}/>
            </View>

            <View style={styles.cnt2}>
                <TouchableOpacity style={styles.buttonregister}  onPress={()=>this._createUser()} >
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