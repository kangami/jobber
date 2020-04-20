import React, { Component } from 'react';
import { View, Text, ImageBackground, StyleSheet, Picker, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class AdScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category:"default"
    };

    this.background = require('../../../pictures/fond.png')
  }

  _pickerChange(item){
    this.setState({
      category : item
    })

    if(item == 'move'){
      this.background = require('../../../pictures/demenagement.png')
    }

    if(item == 'support'){
      this.background = require('../../../pictures/soutienScolaire.png')
    }

    if(item == 'help'){
      this.background = require('../../../pictures/menage.png')
    }

    if(item == 'event'){
      this.background = require('../../../pictures/event.png')
    }
    if(item == 'beauty'){
      this.background = require('../../../pictures/beauty.png')
    }
    if(item == 'baby'){
      this.background = require('../../../pictures/baby.png')
    }
    if(item == 'pet'){
      this.background = require('../../../pictures/pet.png')
    }
    if(item == 'default'){
      this.background = require('../../../pictures/fond.png')
    }
  }

  _nextAds(){
    if(this.state.category == 'default'){
      Alert.alert('Please select a Category First')
    }else{
      this.props.navigation.navigate('Description', {image : this.background, category: this.state.category})
    }
  }

  render() {
    return (
      <ImageBackground source={this.background}style={styles.boss}>
        <View style = {styles.blockTitle}>
          <Text style={styles.title}> Create Your Ad and Find A Help Near You</Text>
        </View>
        <View style={styles.pickerBlock}>
          <Picker
            mode="dialog"
            selectedValue={this.state.category}
            onValueChange = {(itemValue,itemPosition) => this._pickerChange(itemValue)}
            style={styles.picker1}
          >
            <Picker.Item label='Select Category' value='default'/>
            <Picker.Item label='Baby Sitting' value='baby' />
            <Picker.Item label='Menage / Aide a la personne' value='help'/>
            <Picker.Item label='Beauty' value = "beauty"/>
            <Picker.Item label='Demenagement' value='move'/>
            <Picker.Item label='Cours/ Soutient Scolaire' value='support'/>
            <Picker.Item label='Event / Hotesse' value = 'event'/>
            <Picker.Item label='Pet Sitting' value = 'pet' />
            <Picker.Item label='Others' value = 'others'/>

          </Picker>

        </View>
        <View style={styles.buttonBlock}>
          <TouchableOpacity style={styles.touch} onPress={()=>this._nextAds()}>
            <Text style={styles.title1}>
              NEXT
            </Text>
          </TouchableOpacity>
        </View>
        
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  boss:{
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    padding: 25
  },
  title:{
    fontSize: 24,
    textAlign: "center",
    color: 'white',
    fontWeight: "bold"
  },
  title1:{
    fontSize: 15,
    textAlign: "center",
    color: 'white',
    fontWeight: "bold"
  },
  blockTitle:{
    flex: 0.3
  },
  picker1: {
    flex: 1,
    color: "#111582",
    
  },
  pickerBlock:{
    flexDirection:'row',
    marginBottom: 25,
    backgroundColor:'white',
    borderRadius: 6,
    borderWidth:2,
    borderColor:'#111582'
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
  }
})