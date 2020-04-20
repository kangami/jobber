import React, { Component } from 'react';
import { View, Text, ImageBackground, StyleSheet, TextInput, TouchableOpacity, Slider, Switch, Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage'
import {db} from '../../../firebase/FirebaseConnexion'

export default class AdressePrice extends Component {
  constructor(props) {
    super(props);
    this.state = {
        sliderVal: 0,
        switchVal: false,
        adresse : '',
        userId:''
    };
  }


  // Trigerred when component is mount
  componentDidMount(){
      this.getId()
  }

  // getting the Id of current User
  async getId(){
    try {
      const value = await AsyncStorage.getItem('userId')
      if(value !== null) {
        // value previously stored
        this.setState({userId: value})
      }
    } catch(e) {
    // error reading value
        console.log(e)
    }
  }

  //create Add and save in firebase storage 
  saveAdd (){
      // saving data to firebase

      try {
        // get the date 
        let d = new Date()
        // generate unique ID
        let id = Math.round(d.getTime() + ((Math.random()*999999999)+1))

        //getting the current date 
        let dateSave = d.getDate() + '/' + (d.getMonth()+1) + '/' + d.getFullYear()

        db.ref('AdsJobing').push(
            {
              id : id,
              dateAds : dateSave,
              userId: this.state.userId,
              adressJob: this.state.adresse,
              paymentMode: this.state.switchVal ? 'Cash' : 'Bank' ,
              price: this.state.sliderVal,
              dateJobing: this.props.route.params.date,
              description: this.props.route.params.description,
              category:this.props.route.params.category,
              startTime: this.props.route.params.starttime

            }
            
        ).then(()=>{
            Alert.alert('add success')
            this.props.navigation.navigate('Ma Job')
        }).catch((error) => alert(error))
      } catch (error) {
          console.log(error)
      }
      
  }

 

  render() {
    return (
      <ImageBackground source={this.props.route.params.image} style={styles.container1}>
        <View style={styles.cnt5}>
            <Text style={styles.comment}>
                What's Your Ad Adresse ?
            </Text>
        </View>
        <View style={styles.cnt4}>
            <TextInput style={styles.input1} placeholder="Adresse "   onChangeText={(value) =>this.setState({adresse: value})}/>
        </View>

        <View style={styles.slidercnt}>
            <View style={{flex:0.17}}>
                <Text style={{fontSize:16, color:'white'}}>Price</Text>
            </View>
            <View style={{flex:0.8}}>
                <Slider 
                    style = {styles.slider}
                    minimumValue={0}
                    maximumValue={100}
                    minimumValue={12}
                    step ={1}
                    thumbTintColor="#d111c1"
                    value={this.state.sliderVal}
                    onValueChange={(slideValue)=>this.setState({ sliderVal: slideValue})}
                />
            </View>
            <View style={{flex:0.15}}>
                <Text style={{fontSize:14, color:'white'}}>{this.state.sliderVal}$</Text>
            </View>   
        </View>
        <View style={styles.slidercnt}>
            <Text style={{fontSize:16, color:'white'}}>{this.state.switchVal ? 'Cash' : 'Bank'}</Text>
            <Switch value={this.state.switchVal} onValueChange={(switchvalue)=>this.setState({switchVal:switchvalue})}/>
        </View>
        <View style={styles.buttonBlock}>
            <TouchableOpacity style={styles.touch} onPress={()=>this.saveAdd()}>
                <Text style={styles.title1}>
                    Create
                </Text>
            </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
    container1: {
        flex: 1,
        flexDirection: 'column',
        alignItems: "center",
        padding: 20
    },
    comment:{
        textAlign:'justify',
        fontSize: 19,
        color: 'white'
    },
    cnt5:{
        flex: 0.1,
        flexDirection:'column',
        margin: 30,    
    },
    input1:{
        flex:1,
        backgroundColor: 'white',
        borderRadius: 6,
    },
    cnt4:{
        flexDirection:'row',
        marginBottom: 15,
        backgroundColor:'white',
        borderRadius: 6,
    },
    slidercnt:{
        flexDirection:'row',
        margin: 15,
        marginTop: 25
        
    },
    buttonBlock:{
        flex: 0.4,
        flexDirection: "row",
        alignItems: "flex-end",
    },
    touch:{
        backgroundColor: '#111582',
        width: 140,
        height: 37,
        borderRadius: 8,
        padding: 5,
        borderColor: 'white',
        borderWidth: 2
    },
    title1:{
        fontSize: 15,
        textAlign: "center",
        color: 'white',
        fontWeight: "bold"
    },
    slider:{
        width: '100%',
        color: 'red'
    }
})