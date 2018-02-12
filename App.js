import React from 'react';
import { StyleSheet, View, StatusBar} from 'react-native';
import Navigator from './navigation/Navigator';
import SplashScreen from 'react-native-smart-splash-screen'
import {
  AdMobBanner,
  //AdMobInterstitial,
  //PublisherBanner,
  AdMobRewarded
} from "expo";

const ADUNITID = `ca-app-pub-1425926517331745~6816357585`;
const BANNER_ID = `ca-app-pub-1425926517331745/4139536433`;
//const INTERSTITIAL_ID = `ca-app-pub-1425926517331745/1141181467`;
const REWARDED_ID = `ca-app-pub-1425926517331745/3923257478`;


AdMobRewarded.setAdUnitID(REWARDED_ID);
console.disableYellowBox = true;

const STATUS_BAR_HEIGHT = StatusBar.currentHeight;
export default class App extends React.Component {
 
  componentDidMount(){

    _openRewarded = () => {
      AdMobRewarded.requestAd(() => AdMobRewarded.showAd());
    };
   // _openRewarded();
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar  translucent={false} backgroundColor = "#ddd"
           />
       <AdMobBanner
       bannerSize="smartBannerPortrait"
       adUnitID={BANNER_ID}
       didFailToReceiveAdWithError={this.bannerError}
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
