import React from 'react';
import Search from '../src/screens/Search' ;
import About from '../src/screens/About' ;
import Splash from '../src/screens/Splash' ;
import Ionicons from 'react-native-vector-icons/Ionicons';


import { TabNavigator , StackNavigator, TabBarBottom } from 'react-navigation' ;  

const MainNav = TabNavigator({
    home : {screen : Search},
    about :  { screen : About },
 
 },
 {
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, tintColor }) => {
      const { routeName } = navigation.state;
      let iconName;
      if (routeName === 'home') {
        iconName = `ios-home${focused ? '' : '-outline'}`;
      } else if (routeName === 'about') {
        iconName = `ios-information-circle${focused ? '' : '-outline'}`;
      }

      // You can return any component that you like here! We usually use an
      // icon component from react-native-vector-icons
      return <Ionicons name={iconName} size={25} color={tintColor} />;
    },
  }),
  tabBarOptions: {
    activeTintColor: 'deepskyblue',
    inactiveTintColor: 'gray'
  },
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom',
  animationEnabled: false,
  swipeEnabled: false,
/*
   tabBarPosition : 'top',
   tabBarOptions : {
     //showIcon : true ,
    // showLabel : true ,
     style : {
       backgroundColor : 'deepskyblue',
       borderTopWidth  : 1,
       borderColor : 'skyblue',
       padding : 3,
     
 
     },
     indicatorStyle : {
       height : 1,
       backgroundColor : '#fff',
     }
   }

   */

 }
 
 );
 const Navigator = StackNavigator({
     welcome : {screen :Splash },
     main : {
         screen :MainNav,
         navigationOptions: {
            header: {
              left: null,
              visible : false,
            }
          },
     }
 },
 {
    initialRouteName: 'welcome',
    headerMode : 'none'


 }
 ) 

 export default Navigator;