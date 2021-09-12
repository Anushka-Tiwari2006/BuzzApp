import * as React from "react";
import {View,Text,ImageBackground,StyleSheet} from "react-native"

export default class Facebook extends React.Component{
  render(){
    return(
      <View style = {styles.container}>
        <ImageBackground source={"https://thumbs.dreamstime.com/z/facebook-post-react-action-189235291.jpg"}
      style = {styles.background}>

        </ImageBackground>
      
      </View>
    )
  }
}

const styles = StyleSheet.create({
  background:{
    width:500,
    height:700,
    
  },
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  
});
