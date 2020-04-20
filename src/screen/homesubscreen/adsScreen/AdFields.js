import React, { Component } from 'react';
import { View, Text, ImageBackground, StyleSheet, ScrollView, Modal, TouchableOpacity, Alert } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default class AdFields extends Component {
  constructor(props) {
    super(props);
    this.state = {
        descriptionText: ""
    };

    this.descriptionModal = false
  }

  _nextDateTime(){
    if(this.state.descriptionText ==""){
        Alert.alert('Please leave a little Description before going Forward')
    }else{
        this.props.navigation.navigate('DateTime', {image:this.props.route.params.image, category:this.props.route.params.category, description:this.state.descriptionText})
    }
  }

  // on description field change text 
  _descriptionText(text){
    this.setState({
        descriptionText:text
    })
  }

  render() {
    return (
      
        <ImageBackground style={styles.boss} source={this.props.route.params.image}>
            
            <View style={styles.cnt5}>
                <Text style={styles.comment}>
                    What's the Purpose of your AD
                </Text>
                <Text style={styles.souscomment}>
                    (EX: Need a help to cleaning my house )
                </Text>
            </View>
            
            <View style={styles.cnt4}>
                <TextInput style={styles.input1} placeholder="Description" multiline={true}  onChangeText = {(text)=>this._descriptionText(text)}/>
            </View>
            <View style={styles.buttonBlock}>
                <TouchableOpacity style={styles.touch} onPress={()=>this._nextDateTime()}>
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
        padding: 20

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
    cnt5:{
        flex: 0.3,
        flexDirection:'column',
        margin: 30,
        
        
    },
    comment:{
         textAlign:'justify',
         fontSize: 21,
         color: 'white'
     },
     souscomment:{
        textAlign:'center',
        fontSize: 15,
        color: 'white'
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
     
    
})
