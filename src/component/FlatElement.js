import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, Animated, TouchableOpacity } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable'

const LeftAction =(progress, dragX)=>{
  const scale = dragX.interpolate({
      inputRange: [0, 70],
      outputRange:[0, 70],
      extrapolate:'clamp'
  })
  return(
      <View style={{ flex:1, flexDirection:"row",backgroundColor:"#d111c1"}}>
        <View style={{ alignSelf: "center", padding:10}}>
        <Animated.Text style={[{color: "white", fontSeize:25, fontWeight:"bold", textAlign: "center"}, {transform: [{translateX:scale}]}]}> Take Up Jobing</Animated.Text>
        </View>
          
      </View>
  )    
}
const rightAction =(progress, dragX)=>{
    const scale = dragX.interpolate({
        inputRange: [0, 70],
        outputRange:[0, 1],
        extrapolate:'clamp'
    })
    return(
        <View style={{ flex:1, flexDirection:"column", alignItems:"flex-end",backgroundColor:"#826ecc"}}>
          <View style={{flex:1, flexDirection:"row", alignItems:"center", padding:10}}>
          <Animated.Text style={{color: "white", fontSeize:25, fontWeight:"bold",textVerticalAlign:"center"}}> See More</Animated.Text>
          </View>
            
        </View>
    )    
  }
export default class FlatElement extends Component {
  constructor(props) {
    super(props);
    this.state = {
        
    };
  }

  _checkImage(category){
      if(category == 'move'){
        return require('../pictures/demenagement.png')
      }
  
      if(category == 'support'){
        return require('../pictures/soutienScolaire.png')
      }
  
      if(category == 'help'){
        return require('../pictures/menage.png')
      }
  
      if(category == 'event'){
        return require('../pictures/event.png')
      }
      if(category == 'beauty'){
        return require('../pictures/beauty.png')
      }
      if(category == 'baby'){
        return require('../pictures/baby.png')
      }
      if(category == 'pet'){
        return require('../pictures/pet.png')
      }
      if(category == 'default'){
        return require('../pictures/fond.png')
      }
      if(category == 'snow'){
        return require('../pictures/snow-removal.png')
      }
  }
 
 
  render() {
      const onSwip = this.props.onswipRight
    return (
      
      <Swipeable
        renderLeftActions = {LeftAction}
        renderRightActions = {rightAction}
        onSwipeableLeftOpen={this.props.onswipLeft}
        onSwipeableRightOpen={()=>onSwip(this.props.flatval.category)}
        
      >
        
            <View style={styles.containeur}>
                <ImageBackground source={this._checkImage(this.props.flatval.category)} style={styles.header} >
                    <Text style={styles.title}> {this.props.flatval.category}</Text>
                </ImageBackground>
                <View style={styles.body}>
                <View style={styles.description}>
                        <Text numberOfLines={1} style={styles.descriptionTitle}>{this.props.flatval.description}</Text>
                </View>
                <View style={styles.date}>
                        <Text style={styles.dateTitle}>{this.props.flatval.dateJobing}</Text>
                </View>
                </View>
                <View style={styles.footer}>
                    <View style={styles.footerElement}>
                        <Text style={styles.footerTitle}>{this.props.flatval.startTime}</Text>
                    </View>
                    <View style={styles.footerElement}>
                        <Text style={styles.footerTitle}>{this.props.flatval.price}$/Hr</Text>
                    </View>
                    <View style={styles.footerElement}>
                        <Text style={styles.footerTitle}>{this.props.flatval.paymentMode}</Text>
                    </View>
                </View>
            </View>
        
      </Swipeable>
    );
  }
}

const styles = StyleSheet.create({
    containeur:{
        flex: 1,
        flexDirection:"column",
        height: 110,
        
        backgroundColor: "white",
        width: '100%', 
        borderBottomWidth:2,
        borderBottomColor: 'gray'
        
    },
    footerTitle:{
        textAlign: "center",
        fontWeight:"bold"
        
    },
    descriptionTitle:{
        fontSize: 12
    },
    dateTitle:{
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 12
    },
    header:{
        flex:0.4,
        flexDirection: "column"
    },
    body:{
        flex:0.2,
        flexDirection: "row"
    },
    footer:{
        flex:0.4,
        flexDirection: "row"
    },
    footerElement:{
        flex:0.33,
        flexDirection: "column"
    },
    description:{
        flex:0.7,
        flexDirection: "column"
    },
    date:{
        flex:0.3,
        flexDirection: "column"
    },
    title:{
      textAlign: 'center',
      color: "white",
      fontSize: 17,
      fontWeight:"bold"   
    }
})