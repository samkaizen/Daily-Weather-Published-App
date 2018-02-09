import React from 'react';
import { StyleSheet, View, StatusBar, BackHandler } from 'react-native';
import Navigator from './navigation/Navigator';
import SplashScreen from 'react-native-smart-splash-screen'


const STATUS_BAR_HEIGHT = StatusBar.currentHeight;
export default class App extends React.Component {
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
   
    
  }
  
  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
  }
  
  handleBackButton() {
    return true;
  }
  render() {
    return (
      <View style={styles.container}>
        <StatusBar  translucent={false} backgroundColor = "#ddd"
           />
       <Navigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    marginTop : STATUS_BAR_HEIGHT,


  },
});
