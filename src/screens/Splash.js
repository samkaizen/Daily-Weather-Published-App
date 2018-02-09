import React, {Component} from 'react';
import { Text, View , Image, Dimensions } from 'react-native';

const WIDTH_DEVICE= Dimensions.get('window').width ;
const HEIGHT_DEVICE = Dimensions.get('window').height


class Splash extends Component {
    componentDidMount(){

        setTimeout(()=>{
            this.props.navigation.navigate('main');

        },3000);

    }

   render(){
    return (
        <View style= {styles.container}>
        <Image 
         source = {require('../components/icons/dummy.png')}
         style = {styles.imageStyles}
        />
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