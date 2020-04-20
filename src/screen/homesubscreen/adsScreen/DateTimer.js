import React, { Component } from 'react';
import { View, Text, ImageBackground, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker'

import {  TouchableHighlight } from 'react-native-gesture-handler';

export default class DateTimer extends Component {
  constructor(props) {
    super(props);
    this.state = {
        show: false,
        mode:'',
        dateShow : "",
        starttime: "",
        endtime: ""
    };

    this.start = false
    this.end =  false
  }

  // click on date time field 
  _datepickerClick(){
    
    this.setState({
        show: true,
        mode: 'date'
    })
  }

 // function that is handler on picker selected
  _changePickerHandler(date){
      if(this.state.mode == 'date'){
          var datefinal = ""
          if(date.getMonth()+1 <10){
            datefinal = date.getFullYear() + "-0" + (date.getMonth()+1) + "-"+ date.getDate();
          }else{
            datefinal = date.getFullYear() + "-" + (date.getMonth()+1) + "-"+ date.getDate(); 
          }
          
          this.setState({
              
              dateShow: datefinal,
              show: false
          })

          
      }

      if(this.state.mode == 'time'){
          if(this.start){
                
                var heurestart = ""
                if(date.getHours() < 10 && date.getMinutes() < 10){
                    heurestart = "0"+date.getHours() + "H:0"+date.getMinutes()
                }

                if(date.getHours() < 10 && date.getMinutes()>=10){
                    
                    heurestart = "0"+date.getHours() + "H:"+date.getMinutes()
                }

                if(date.getHours()>=10 && date.getMinutes() < 10){
                    heurestart = date.getHours() + "H:0"+date.getMinutes()
                }

                if(date.getHours()>=10 && date.getMinutes() >= 10){
                    heurestart = date.getHours() + "H:"+date.getMinutes()
                }

                
                this.setState({
                
                    starttime: heurestart,
                    show: false
                })
                
          }

          if(this.end){
                var heurestart = ""
                if(date.getHours() < 10 && date.getMinutes() < 10){
                    heurestart = "0"+date.getHours() + "H:0"+date.getMinutes()
                }

                if(date.getHours() < 10 && date.getMinutes()>=10){
                    
                    heurestart = "0"+date.getHours() + "H:"+date.getMinutes()
                }

                if(date.getHours()>=10 && date.getMinutes() < 10){
                    heurestart = date.getHours() + "H:0"+date.getMinutes()
                }

                if(date.getHours()>=10 && date.getMinutes() >= 10){
                    heurestart = date.getHours() + "H:"+date.getMinutes()
                }

                this.setState({
                
                    endtime: heurestart,
                    show: false
                })
          }
  
      }
  }
 // click on start time field 
  _timeStartClick(){
    this.start = true
    this.end = false
    if(this.state.dateShow == ""){
        Alert.alert("Please select the Date First")
    }else{
    this.setState({
        show: true,
        mode: 'time'
    }) 
    }
  }

  // click on end Time field
  _timeEndClick(){
    this.start = false
    this.end = true
      if(this.state.starttime == ""){
        Alert.alert("Please select Start Time First")
      }else{
        this.setState({
            show: true,
            mode: 'time'
        }) 
      }
  }

  // click on next button
  _dateTimeHandler(){
      if(this.state.dateShow == "" || this.state.starttime==""){
          Alert.alert("Please choose a Date and Start Time")
      }else{
          if(this.state.endtime ==""){
            this.props.navigation.navigate('Adresse', {image:this.props.route.params.image, category:this.props.route.params.category, description:this.props.route.params.description, date:this.state.dateShow, starttime:this.state.starttime})
          }else{
            this.props.navigation.navigate('Adresse', {image:this.props.route.params.image, category:this.props.route.params.category, description:this.props.route.params.description, date:this.state.dateShow, starttime:this.state.starttime, endtime:this.state.endtime})  
          }
      }
  }
  render() {
    return (
        <ImageBackground style={styles.boss} source={this.props.route.params.image}>
            
            <View style={styles.cnt5}>
                <Text style={styles.comment}>
                    When do you plan to need a help?
                </Text>
            </View>
            
            
            <View style={styles.cnt4} >  
                <TouchableOpacity activeOpacity={1} style={{flex: 1, flexDirection:'row', height:45}} onPress={()=>this._datepickerClick()}>
                    <View style={{flex: 1, height:45}} pointerEvents="none" >
                        <TextInput style={styles.input1} placeholder="Date" value={this.state.dateShow}/>
                    </View>
                </TouchableOpacity>
            </View>
                   
            <View style={styles.cnt4} >  
                <TouchableOpacity activeOpacity={1} style={{flex: 1, flexDirection:'row', height:45}} onPress={()=>this._timeStartClick()}>
                    <View style={{flex: 1, height:45}} pointerEvents="none" >
                        <TextInput style={styles.input1} placeholder="Start Time "  value={this.state.starttime}/>
                    </View>
                </TouchableOpacity>
            </View>

            <View style={styles.cnt4} >  
                <TouchableOpacity activeOpacity={1} style={{flex: 1, flexDirection:'row', height:45}} onPress={()=>this._timeEndClick()}>
                    <View style={{flex: 1, height:45}} pointerEvents="none" >
                        <TextInput style={styles.input1} placeholder="End TIme (optional)" value={this.state.endtime} />
                    </View>
                </TouchableOpacity>
            </View>

            
            <View style={styles.buttonBlock}>
                <TouchableOpacity style={styles.touch} onPress ={()=>this._dateTimeHandler()}>
                    <Text style={styles.title1}>
                    NEXT
                    </Text>
                </TouchableOpacity>
            </View>

            { this.state.show && (

                <DateTimePicker
                    testID="dateTimePicker"
                    timeZoneOffsetInMinutes={0}
                    value={new Date()}
                    onChange = {(event, date) =>this._changePickerHandler(date)}
                    mode={this.state.mode}
                    is24Hour={true}
                    display="default"
                    minimumDate={new Date(Date.now())} 
                    
                />
            )

            }
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
    timepicker:{
       
        margin: 15,
        backgroundColor:'white',
        borderRadius: 6,
    },
    comment:{
        textAlign:'justify',
        fontSize: 19,
        color: 'white'
    },
    input1:{
        flex:1,
        backgroundColor: 'white',
        borderRadius: 6,
        height:40,
        fontSize: 16,
        fontWeight: 'bold'
    },
    cnt4:{
        
        flexDirection:'row',
        marginBottom: 15,
        
       
    },
    blockTime:{
        flexDirection : 'row',
    },
    cnt5:{
        flex: 0.1,
        flexDirection:'column',
        margin: 30,    
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