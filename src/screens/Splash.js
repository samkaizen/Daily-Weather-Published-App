import React, {Component} from 'react';
import { Text, View , Image, Dimensions, ActivityIndicator } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import { Button } from 'react-native-elements';


const WIDTH_DEVICE= Dimensions.get('window').width ;
const HEIGHT_DEVICE = Dimensions.get('window').height


class Splash extends Component {
    state = {
        visible : true,
    };
    componentDidMount(){

        setTimeout(()=>{
            this.props.navigation.navigate('main');
            this.setState({visible : false})

        },3000);

    }

   render(){
    return (
        <View style= {styles.container}>
              
              
              {this.state.visible?  <Spinner visible={this.state.visible} textContent=      {"Loading..."} textStyle={{color: '#000'}} 
                  size = 'large'
                  color = 'blue'
               /> : <Button 
            title = 'Go Back Home'
            large
            onPress = { ()=>this.props.navigation.navigate('main')}
            backgroundColor  = 'green'
         />}
              
        

        </View>
    );
   }
}


const styles={
    imageStyles :  {
        width : WIDTH_DEVICE/2,
        height : HEIGHT_DEVICE/2,


    },
    container: {
        flex: 1,
        alignItems : 'center',
        justifyContent : 'center'
    
      },
}

export default Splash;