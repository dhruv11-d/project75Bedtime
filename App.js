import React from 'react';
import { Text,View,StyleSheet,Image,TextInput,TouchableOpacity} from 'react-native';
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import HomeScreen from './Screens/HomeScreen';
import ReadStoryScreen from './Screens/ReadStoryScreen';
import WriteStoryScreen from './Screens/WriteStoryScreen';
import FeedbackScreen from './Screens/FeedbackScreen';
import LoginScreen from './Screens/LoginScreen';

export default function App() {
  return (
    <View style={styles.container}>
       <AppContainer/>;
    </View>
  );
}


const TabNavigator = createBottomTabNavigator({
  'Home':{screen : HomeScreen}, 
  'Write A Story': {screen : WriteStoryScreen},
  'Read A Story': {screen : ReadStoryScreen},  
  'Feedback':{screen : FeedbackScreen},
},

{
  
  defaultNavigationOptions: ({navigation})=>({
   
    tabBarIcon: ()=>{
      const routeName = navigation.state.routeName;
      console.log(routeName)
      if(routeName === "Read A Story"){
        return(
          <Image
          source={require("./assets/read.png")}
          style={{width : 45, height : 35}}
        />
        )
        
      }
      else if(routeName === "Write A Story"){
        return(
          <Image
          source={require("./assets/write.png")}
          style={{width : 50, height : 32}}
          
        />)       
      }
       else if(routeName === "Home"){
        return(
          <Image
          source={require("./assets/home.png")}
          style={{width : 55, height : 32}}
          
        />)  
             
      }
      else if(routeName === "Feedback"){
        return(
          <Image
          source={require("./assets/feedback.png")}
          style={{width : 55, height : 35}}
          
        />)
      }
    }
  })
}
)
const SwitchNavigator = createSwitchNavigator({
  LoginScreen : LoginScreen,
  TabNavigator : TabNavigator,
})
const AppContainer = createAppContainer(SwitchNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  
  },
})
