import React from 'react';
import { Text , ScrollView ,View , TextInput, ActivityIndicator,Platform, Dimensions} from 'react-native';
import { Button , Card} from 'react-native-elements';
import { Constants, Location, Permissions } from 'expo';

import axios from 'axios';
import WeatherDetail from './WeatherDetail' ;
const HEIGHT_DEVICE = Dimensions.get('window').height;
const WIDTH_DEVICE = Dimensions.get('window').width;


class WeatherList extends React.Component {

  constructor(props){

    super(props);

    this.state = {

      city : 'London',
      dataList : [],
      loading : false,
      geolocation: false,
      location: null,
      country : 'uk',
      error : null


    }


  }
  componentWillMount(){
    this.fetchData();

  }

  setCity = (city) =>{

   this.setState({
     city  : city,

   });
 }

  setLocation  = () =>{
     this.setState({geolocation: true, error : null, country : null});
    if (Platform.OS === 'android' && !Constants.isDevice) {
      this.setState({
        errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
      });
    } else {
      this._getLocationAsync();
    }
  }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }

    let location = await Location.getCurrentPositionAsync({});
    this.setState({ location,city : null,country : null });  
  }

   async fetchData(){
     if(this.state.geolocation === false){
       try{
         let response = await axios.get(`http://api.openweathermap.org/data/2.5/forecast/daily?q=${this.state.city}&mode=json&unit=metric&cnt=10&APPID=94c6cf0868fa5cb930a5e2d71baf0dbf`);
         console.log("response", response);
         this.setState({ dataList: response.data.list, loading: false, city: response.data.city.name, country: response.data.city.country });

       }catch(error){
         console.log('Error ' , error);
         this.setState({ error : error, loading : false,})
       }
     }
    
     else if(this.state.geolocation === true){
       try{
         let response = await axios.get(`http://api.openweathermap.org/data/2.5/forecast/daily?lat=${this.state.location.coords.latitude}&lon=${this.state.location.coords.longitude}&mode=json&unit=metric&cnt=10&APPID=94c6cf0868fa5cb930a5e2d71baf0dbf`);
         console.log("response", response);
         this.setState({ dataList: response.data.list, loading: false, city: response.data.city.name, country: response.data.city.country });
       }catch(error){
         console.log('error', error);
         this.setState({ error: error , loading : false});

       }

     }
    
 }

  searchWeather = () =>{
    if( this.state.city===null && this.state.geolocation===false){
      alert ('Please Enter a Valid city First');
      
    }
    this.setState({ loading : true, error : null});
    this.fetchData();
  }

  renderDataList(){

  return  this.state.dataList.map(listItem => <WeatherDetail key={listItem.dt} listItem={listItem}  /> )
  }

  render() {

    return (
      <ScrollView style={styles.wrapperStyles} >
       
        <Card  >
          <View>
            {this.state.geolocation === false ? <Button
              large
              backgroundColor='red'
              title='Turn Geolocation On!'
              onPress={this.setLocation}
              icon={{ name: 'location-off' }}

            /> : <Button
                large
                backgroundColor='green'
                title='Turn Geolocation Off!'
                onPress={() => this.setState({ geolocation: false ,city:null,country :null, error : false})}
                icon={{ name: 'location-on' }}


              />}
          </View>
          {this.state.geolocation === false ?
           <TextInput
            underlineColorAndroid='transparent'
            value={this.state.city}
            onChangeText={(city) => this.setCity(city)}
            style={styles.inputStyles}
            editable={this.state.geolocation ? false : true}
            placeholder='Enter Your City!'
          />:<View style = {{ flex : 1, justifyContent : 'center', alignItems : 'center', margin :20}}>
          <Text style={{fontSize :16 }}> 
               The city has been automatically </Text>
              <Text style={{ fontSize: 16 }}> defined!  </Text>
            
           
              <Text style={{ fontSize: 18 }}> Press Search Now! </Text>

          </View>}
            <Button
               
               raised
               title = { this.state.loading ? 'Loading Data in Progress...'  : 'Search'}
               onPress = {this.searchWeather}
               buttonStyle={{backgroundColor: 'deepskyblue', borderRadius: 10}}
               textStyle={{textAlign: 'center', fontSize : 18, color :'#fff'}}

             />
              <Text style={styles.errorTextStyle} >
            {this.state.error ? 'Please Make Sure That The Spelling of The city is Correct If You have Already Chosen One !': null}
               </Text>
         </Card>
        <Card >
          <View >
                {this.state.loading || this.state.city ===null || this.state.country===null || this.state.error ? <ActivityIndicator size='large' /> :
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style= {styles.defaultTextFontSize}>City : {this.state.city} </Text>
                    <Text style= {styles.defaultTextFontSize}> Country : {this.state.country} </Text>
               </View>}

              </View>
          </Card>
      
         
         <View>
          { this.state.loading ||this.state.city === null||this.state.country ===null || this.state.error !== null  ? <ActivityIndicator  size = 'large'/> : this.renderDataList()}

          </View>
      </ScrollView>
    );
  }
}


const styles = {

  inputStyles : {

   fontSize : 20,
   alignSelf : 'center',
   margin : 20,
   padding: 5,
   borderWidth : 1,
   width : WIDTH_DEVICE/1.3,
   height : HEIGHT_DEVICE/10,
   borderRadius : 5
 },
 wrapperStyles : {
   flex: 1 ,

 },
 defaultTextFontSize :{
   fontSize : 18
 },
  errorTextStyle : {
    fontSize : 20,
    color : 'red'
  }
}

export default WeatherList ;
