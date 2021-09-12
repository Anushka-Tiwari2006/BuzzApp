import  React from "react";
import {View,Text,StyleSheet,ImageBackground} from "react-native"
import {createAppContainer} from "react-navigation"
import { Icon } from 'react-native-elements'
import {createBottomTabNavigator} from "react-navigation-tabs"
import Facebook from "./screens/Facebook"
import Insta from "./screens/Insta"

export default class App extends React.Component{
  render(){
    return(
      
        <AppContainer />
        
        
      
    )
  }
}

const TabNavigator = createBottomTabNavigator({
  Facebook:{screen:Facebook,
  navigationOptions:{  
   tabBarLabel:'Facebook',
   tabBarOptions: {
    style: {
        backgroundColor: 'salmon',
      
    },
},

      tabBarIcon: ({ tabStyle }) => (  
  <View>  
      <Icon
      reverseColor
      color="#000080"
      
      style={[{color: tabStyle}]} size={35} name={'facebook'} />  
  </View>), 
  barStyle: { backgroundColor: 'pink' },   
     }},
  Instagram:{screen:Insta,
    navigationOptions:{  
      tabBarLabel:'Instagram',
      tabBarOptions: {
        style: {
            backgroundColor: 'skyblue',
        }},
         tabBarIcon: ({ tabStyle }) => (  
     <View>  
         <Icon style={[{color: tabStyle}]} size={35} name={'camera'}/>  
     </View>),
        
        }
  }
})



const AppContainer = createAppContainer(TabNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});
