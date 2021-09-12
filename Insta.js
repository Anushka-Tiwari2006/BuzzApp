import * as React from "react";
import {View,Text, StyleSheet,ImageBackground} from "react-native"

export default class Insta extends React.Component{
  render(){
    return(
      <View style = {styles.container}>
        <ImageBackground source={"https://st4.depositphotos.com/25864776/30109/v/1600/depositphotos_301095468-stock-illustration-young-girl-life-social-network.jpg"}
      style = {styles.background}>
        <Text></Text>

        </ImageBackground>
      
      </View>
      
      
    )
  }
}

const styles = StyleSheet.create({
  background:{
    width:500,
    height:600,
    
    
  },
  container: {
    flex: 1,
    backgroundColor: 'salmon',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  
});