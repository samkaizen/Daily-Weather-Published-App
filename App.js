import React from 'react';
import { StyleSheet, View, StatusBar, Dimensions} from 'react-native';
import Navigator from './navigation/Navigator';
import {
  AdMobBanner,
  AdMobRewarded
} from "expo";
import { Card } from 'react-native-elements';
const DEVICE_WIDTH  = Dimensions.get('window').width ;
const ADUNITID = `ca-app-pub-6929970817421020~7710683265`;
const BANNER_ID =`ca-app-pub-6929970817421020/8030957903`;
const REWARDED_ID = `ca-app-pub-6929970817421020/9596634091`;


AdMobRewarded.setAdUnitID(REWARDED_ID);
console.disableYellowBox = true;

const STATUS_BAR_HEIGHT = StatusBar.currentHeight;
export default class App extends React.Component {
 
  componentWillMount(){

    _openRewarded = () => {
      AdMobRewarded.requestAd(() => AdMobRewarded.showAd());
    };
    _openRewarded();
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar  translucent={false} backgroundColor = "#ddd"
         />
           
   <View style={{ margin : 5, backgroundColor : '#ffffff', padding :10, marginBottom : 0 }}>
       <AdMobBanner
       bannerSize="smartBannerPortrait"
       adUnitID={BANNER_ID}
       didFailToReceiveAdWithError={this.bannerError}
     />
     
     </View>
     
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
