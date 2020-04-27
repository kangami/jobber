import React, { Component } from 'react';
import { View, Text, StyleSheet, Picker, FlatList, Modal, Button, ImageBackground} from 'react-native';
import Bartitle from '../../component/Bartitle'
import {db} from "../../firebase/FirebaseConnexion"
import FlatElement from "../../component/FlatElement"
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class MainScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataJob : [],
      selectedPicker: "default",
      modalVisibility: false
    };
    this.content = [];
  }

  
  componentDidMount(){
    this._fetchAllJobing()
  }

  // function which is calling first on component is mount to fetch all Jobbing in the database
  _fetchAllJobing(){
    let store = []
    db.firestore().collection('AdsJobing').onSnapshot(Snapshot =>{
      Snapshot.docs.forEach((doc) =>{
        store = {id:doc.id, data:doc.data()}
        this.content.push(store)

        
      })
    })
  }

// function which fetching jobbing base on category selection 
  _fetchBaseOnCategory(val){
    let store = {}
    this.content = []
    try {
      if (val == "default") {
        this._fetchAllJobing()
      } else {

        db.firestore().collection('AdsJobing').where("category", "==", val).onSnapshot(Snapshot =>{
          Snapshot.docs.forEach((doc) =>{
            store = {id:doc.id, data:doc.data()}
            this.content.push(store)
          })
        })
      }
      
    } catch (error) {
      console.log(error)
    }
  }

  // function which is trigerred on Picker change value 
  _pickerHandler(val){
    
      
    
    this.setState({
      selectedPicker : val,
      dataJob: []
    })

    this._fetchBaseOnCategory(val)
  }

  //function which is trigerred on swip Left in FlatList Element
  _onswipeableLeftAction(){
    alert(" user Have been notify")
  }

  //function which is trigerred on swip Left in FlatList Element
  _onswipeableRightAction  = (jobbingData)=>{
      this.setState({
        modalVisibility: true
      })

      
  }
    render() {
    return (
      <ImageBackground source={require('../../pictures/fond.png')} style={styles.container}>
        <Bartitle title = 'Search'/>
        <View style={styles.filters}>
          <Picker
            selectedValue ={this.state.selectedPicker}
            onValueChange ={(itemValue, itemPosition) =>this._pickerHandler(itemValue)}
          >
            <Picker.Item label='All' value='default'/>
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
        <View style={styles.datacontainer}>
          <FlatList
                data = {this.content}
                
                keyExtractor = {(item) => item.id.toString()}
                renderItem = {({item}) => {return <FlatElement flatval={item.data} onswipLeft={this._onswipeableLeftAction} onswipRight={this._onswipeableRightAction}/>}}
            />

        </View>
        <Modal
          animationType="slide"
          
          visible={this.state.modalVisibility}
          onRequestClose={() => {
            this.setState(this.state);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Button title="Back" style={styles.buttonBack} onPress={()=>this.setState({modalVisibility: false})}/>
              <Text style={styles.modalText}>Hello World!</Text>
            </View>
          </View>
        </Modal>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    flexDirection: "column"
  },
  filters :{
    flex: 0.15,
    flexDirection: "column",
    borderBottomWidth: 2,
    borderBottomColor:"gray",
    marginBottom: 10
  },
  datacontainer:{
    flex: 0.8,
    flexDirection:"column"
  },
  buttonBack:{
    backgroundColor: 'red',
    fontSize: 20,
    fontWeight: "bold"
  }
})
