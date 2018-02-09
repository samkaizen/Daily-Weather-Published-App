import {  Platform } from 'react-native';
//import { Button, Card } from 'react-native-elements';
import { Constants, Location, Permissions } from 'expo';

setLocation = () => {
    this.setState({ geolocation: true });
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
    this.setState({ location });
    console.log('location', location)
}
export default setLocation;