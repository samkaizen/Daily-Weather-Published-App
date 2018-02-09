import React from 'react';
import { View, Text} from 'react-native';
import {Card} from 'react-native-elements';

class About extends React.Component {
  render() {
    return (
      
       <View style={styles.containerStyles} >
          <Text style={[styles.textStyles, {color : 'red', alignSelf : 'center', fontSize : 20}]} > Welcome To the Free Weather</Text>
          <Text style={[styles.textStyles, {color : 'red', alignSelf : 'center', fontSize : 20}]} > Forecast  Finder! </Text>
  
          <Text style={[styles.textStyles, {paddingTop : 10}]}> With This Simple Yet Powerful App You will Get The most accurate weather Forecast Data For 10 Days!.
           You can Search By a Single City or Activate The Geolocation So that the City Will Be Automatically Defined For You, But Before That Please Ensure That You Activate You Device Gps. </Text>
      </View>
    
    );
  }
}

styles={
  textStyles : {
    fontSize : 18,
    marginLeft : 10,
    marginRight : 10,
    
  
  },
  containerStyles : {
   // flex: 1,
    justifyContent : 'center',
    alignItems : 'center',
    margin : 20,
    backgroundColor : '#fff',
    borderRadius : 5

  }
};

export default About ;
