import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
  ActivityIndicator,
} from 'react-native';
import MapView, {Callout, Circle, Marker} from 'react-native-maps';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Geolocation from '@react-native-community/geolocation';
// import RNLocation from 'react-native-location';

// RNLocation.configure({
//   distanceFilter: 401,
// });
// Geolocation.setRNConfiguration(config);

const initialState = {
  latitude: null,
  longitude: null,
  longitudeDelta: 0.001,
  latitudeDelta: 0.0001,
};

const TrackerScreen = () => {
  const [currentPosition, setCurrentPosition] = useState(initialState);

  useEffect(() => {
    // getCurrentLocation();
    Geolocation.getCurrentPosition(
      position => {
        const {latitude, longitude} = position.coords;
        setCurrentPosition({
          ...currentPosition,
          latitude,
          longitude,
        });
        // alert(JSON.stringify(position));
      },
      error => alert(error.message),
      {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 1000,
      },
    );
  }, []);

  // console.log(currentPosition);
  // console.log(pin);
  // console.log(region);

  return currentPosition.latitude ? (
    <View style={styles.container}>
      <MapView
        provider="google"
        style={styles.map}
        // style={{flex: 1}}
        initialRegion={currentPosition}
        showsUserLocation={true}
        showsCompass
        showsTraffic
        showsBuildings></MapView>
      <TouchableOpacity
        onPress={() =>
          Linking.openURL(
            'https://google.com/maps/place/-6.288286802637738,106.86544843905325',
          )
        }>
        <View style={styles.wrapperLocationTracker}>
          <View style={styles.iconWrapper}>
            <MaterialIcons
              name="location-on"
              size={35}
              color="#009387"
              style={styles.icon}
            />
          </View>
          <View style={styles.textWrapper}>
            <Text style={styles.text}>Lacak lokasi sepeda motor</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  ) : (
    <ActivityIndicator style={{flex: 1}} animating size="large" />
  );
};

export default TrackerScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  map: {
    // width: Dimensions.get('window').width,
    // height: Dimensions.get('window').height,
    width: '100%',
    height: '90%',
  },
  icon: {
    margin: 5,
  },
  iconWrapper: {
    backgroundColor: 'lightgrey',
    // alignItems: 'center',
    // justifyContent: 'center',
    borderRadius: 25,
    marginTop: -5,
    marginLeft: -5,
  },
  textWrapper: {
    marginHorizontal: 10,
  },
  text: {
    fontFamily: 'OpenSans-Bold',
    color: '#FFFFFF',
    fontSize: 22,
    marginTop: -5,
  },
  wrapperLocationTracker: {
    backgroundColor: '#1E4E5F',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
});
