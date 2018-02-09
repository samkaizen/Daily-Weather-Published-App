import Search from '../src/screens/Search' ;
import About from '../src/screens/About' ;
import Splash from '../src/screens/Splash' ;

import { TabNavigator , StackNavigator } from 'react-navigation' ;  

const MainNav = TabNavigator({
    home : {screen : Search},
    about :  { screen : About },
 
 },
 {

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