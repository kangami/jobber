//ads file where we display ads that Users have create

import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Picker,
  FlatList,
  Modal,
  Button,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
import Bartitle from '../../component/Bartitle';
import {db} from '../../firebase/FirebaseConnexion';
import FlatElement from '../../component/FlatElement';

export default class MainScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataJob: [],
      selectedPicker: 'default',
      modalVisibility: false,
    };

    this.content = [];
    this.backAds = '';
    this.titleAds = '';
    this.dateAds = '';
    this.startTimeAds = '';
    this.priceAds = '';
    this.descriptionAds = '';
    this.locationAds = '';
    this.userAds = '';
  }

  componentDidMount() {
    this._fetchAllJobing();
  }

  // function which is calling first on component is mount to fetch all Jobbing in the database
  _fetchAllJobing() {
    let store = [];
    db.firestore()
      .collection('AdsJobing')
      .onSnapshot(Snapshot => {
        Snapshot.docs.forEach(doc => {
          store = {id: doc.id, data: doc.data()};
          this.content.push(store);
        });
      });
  }

  // function which fetching jobbing base on category selection
  _fetchBaseOnCategory(val) {
    let store = {};
    this.content = [];
    try {
      if (val == 'default') {
        this._fetchAllJobing();
      } else {
        db.firestore()
          .collection('AdsJobing')
          .where('category', '==', val)
          .onSnapshot(Snapshot => {
            Snapshot.docs.forEach(doc => {
              store = {id: doc.id, data: doc.data()};
              this.content.push(store);
            });
          });
      }
    } catch (error) {
      console.log(error);
    }
  }

  // function which is trigerred on Picker change value
  _pickerHandler(val) {
    this.setState({
      selectedPicker: val,
      dataJob: [],
    });

    this._fetchBaseOnCategory(val);
  }

  //function which is trigerred on swip Left in FlatList Element
  _onswipeableLeftAction() {
    alert(' user Have been notify');
  }
  _setBackAds(val) {
    if (val == 'move') {
      this.backAds = require('../../pictures/demenagement.png');
    }

    if (val == 'support') {
      this.backAds = require('../../pictures/soutienScolaire.png');
    }

    if (val == 'help') {
      this.backAds = require('../../pictures/menage.png');
    }

    if (val == 'event') {
      this.backAds = require('../../pictures/event.png');
    }
    if (val == 'beauty') {
      this.backAds = require('../../pictures/beauty.png');
    }
    if (val == 'baby') {
      this.backAds = require('../../pictures/baby.png');
    }
    if (val == 'pet') {
      this.backAds = require('../../pictures/pet.png');
    }
    if (val == 'snow') {
      this.backAds = require('../../pictures/snow-removal.png');
    }
    if (val == 'default') {
      this.backAds = require('../../pictures/fond.png');
    }
  }
  //function which is trigerred on swip Left in FlatList Element
  _onswipeableRightAction = jobbingData => {
    this._setBackAds(jobbingData.category);
    this.titleAds = jobbingData.category;
    this.dateAds = jobbingData.dateJobing;
    this.startTimeAds = jobbingData.startTime;
    this.priceAds = jobbingData.price;
    this.descriptionAds = jobbingData.description;
    this.setState({
      modalVisibility: true,
    });
  };
  render() {
    return (
      <ImageBackground
        source={require('../../pictures/fond.png')}
        style={styles.container}>
        <Bartitle title="Search" />
        <View style={styles.filters}>
          <Picker
            selectedValue={this.state.selectedPicker}
            onValueChange={(itemValue, itemPosition) =>
              this._pickerHandler(itemValue)
            }>
            <Picker.Item label="All" value="default" />
            <Picker.Item label="Baby Sitting" value="baby" />
            <Picker.Item label="Menage / Aide a la personne" value="help" />
            <Picker.Item label="Beauty" value="beauty" />
            <Picker.Item label="Demenagement" value="move" />
            <Picker.Item label="Cours/ Soutient Scolaire" value="support" />
            <Picker.Item label="Event / Hotesse" value="event" />
            <Picker.Item label="Pet Sitting" value="pet" />
            <Picker.Item label="Others" value="others" />
          </Picker>
        </View>
        <View style={styles.datacontainer}>
          <FlatList
            data={this.content}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => {
              return (
                <FlatElement
                  flatval={item}
                  onswipLeft={this._onswipeableLeftAction}
                  onswipRight={this._onswipeableRightAction}
                />
              );
            }}
          />
        </View>
        <Modal
          animationType="slide"
          visible={this.state.modalVisibility}
          onRequestClose={() => {
            this.setState(this.state);
          }}>
          <View style={styles.boss}>
            <ImageBackground source={this.backAds} style={styles.head}>
              <View style={{flex: 0.2, alignSelf: 'flex-end'}}>
                <TouchableOpacity
                  onPress={() => this.setState({modalVisibility: false})}>
                  <Text style={{fontSize: 24, color: 'gray'}}>X</Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flex: 0.7,
                  flexDirection: 'column',
                  width: '50%',
                  alignSelf: 'center',
                  borderRadius: 70,
                  backgroundColor: 'white',
                  borderWidth: 3,
                  borderColor: 'black',
                }}>
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    alignSelf: 'center',
                    alignItems: 'center',
                  }}>
                  <Text style={{fontWeight: 'bold', fontSize: 15}}>
                    {this.titleAds}
                  </Text>
                </View>
              </View>
            </ImageBackground>

            <View style={styles.body}>
              <View
                style={{
                  flex: 0.08,
                  flexDirection: 'row',
                  padding: 5,
                  borderBottomWidth: 1,
                  borderBottomColor: '#f2f5f3',
                }}>
                <View style={{flex: 0.2, alignItems: 'flex-start'}}>
                  <Image
                    style={{width: 30, height: 30}}
                    source={require('../../pictures/datetimelogo.png')}
                  />
                </View>
                <View style={{flex: 0.6, alignItems: 'center'}}>
                  <Text style={{fontWeight: 'bold', fontSize: 14}}>
                    {this.dateAds}
                  </Text>
                  <Text style={{fontWeight: 'bold', fontSize: 13}}>
                    {this.startTimeAds}
                  </Text>
                </View>
                <View style={{flex: 0.2, alignItems: 'flex-end'}}>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      fontSize: 25,
                      color: '#111582',
                    }}>
                    {this.priceAds}$
                  </Text>
                </View>
              </View>

              <View
                style={{
                  flex: 0.2,
                  flexDirection: 'row',
                  padding: 5,
                  borderBottomWidth: 1,
                  borderBottomColor: '#f2f5f3',
                }}>
                <View style={{flex: 0.2, alignItems: 'flex-start'}}>
                  <Image
                    style={{width: 35, height: 35}}
                    source={require('../../pictures/descriptionlogo.png')}
                  />
                </View>
                <View style={{flex: 0.8, alignItems: 'center'}}>
                  <Text style={{fontSize: 14}}>{this.descriptionAds}</Text>
                </View>
              </View>

              <View
                style={{
                  flex: 0.08,
                  flexDirection: 'row',
                  padding: 5,
                  borderBottomWidth: 1,
                  borderBottomColor: '#f2f5f3',
                }}>
                <View style={{flex: 0.2, alignItems: 'flex-start'}}>
                  <Image
                    style={{width: 30, height: 35}}
                    source={require('../../pictures/userlogo.png')}
                  />
                </View>
                <View style={{flex: 0.6, alignItems: 'center'}}>
                  <Text style={{fontWeight: 'bold', fontSize: 14}}>
                    {this.dateAds}
                  </Text>
                  <Text style={{fontWeight: 'bold', fontSize: 13}}>
                    {this.startTimeAds}
                  </Text>
                </View>
              </View>

              <View
                style={{
                  flex: 0.4,
                  flexDirection: 'row',
                  padding: 5,
                  borderBottomWidth: 1,
                  borderBottomColor: '#f2f5f3',
                }}>
                <View style={{flex: 0.2, alignItems: 'flex-start'}}>
                  <Image
                    style={{width: 30, height: 35}}
                    source={require('../../pictures/locationlogo.png')}
                  />
                </View>
                <View style={{flex: 0.6, alignItems: 'center'}} />
              </View>
            </View>
          </View>
        </Modal>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  filters: {
    flex: 0.15,
    flexDirection: 'column',
    borderBottomWidth: 2,
    borderBottomColor: 'gray',
    marginBottom: 10,
  },
  datacontainer: {
    flex: 0.8,
    flexDirection: 'column',
  },
  buttonBack: {
    backgroundColor: 'red',
    fontSize: 20,
    fontWeight: 'bold',
  },
  boss: {
    flex: 1,
    flexDirection: 'column',
  },
  head: {
    flex: 0.2,
    flexDirection: 'column',
    padding: 5,
  },
  body: {
    flex: 0.8,
    flexDirection: 'column',
    padding: 5,
  },
});
