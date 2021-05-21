import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
  ActivityIndicator,
  PermissionsAndroid,
  Alert,
} from 'react-native';
import MapView, {Callout, Circle, Marker} from 'react-native-maps';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Geolocation from '@react-native-community/geolocation';
import firebase from '../../database/Firebase';

const initialState = {
  latitude: null,
  longitude: null,
  longitudeDelta: 0.001,
  latitudeDelta: 0.0001,
};

const TrackerScreen = () => {
  const [currentPosition, setCurrentPosition] = useState(initialState);
  const [batasAtas, setBatasAtas] = useState(1);
  const [lokasiGmaps, setLokasiGmaps] = useState({});
  // let {lokasiGoogleMaps, latitude, longitude} = lokasiGmaps;

  const fetchCurrentPostionGPS = () => {
    let databaseFirebase = firebase.database().ref('/' + 'LOKASI');
    databaseFirebase.on('value', snapshot => {
      setLokasiGmaps(snapshot.val());
    });
  };

  const onMapReady = () => {
    PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    ).then(granted => {
      setBatasAtas(0);
    });
  };

  useEffect(() => {
    fetchCurrentPostionGPS();
    Geolocation.getCurrentPosition(
      position => {
        const {latitude, longitude} = position.coords;
        setCurrentPosition({
          ...currentPosition,
          latitude,
          longitude,
        });
      },
      error =>
        Alert.alert(
          'Lokasi Error',
          'Nyalakan lokasi di ponsel anda lalu mulai ulang aplikasi',
        ),
      {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 1000,
      },
    );
  }, []);

  console.log(lokasiGmaps.lokasiGoogleMaps);

  return currentPosition.latitude ? (
    <View style={{flex: 1, backgroundColor: '#fff', paddingTop: batasAtas}}>
      <MapView
        provider="google"
        style={styles.map}
        onMapReady={onMapReady}
        // style={{flex: 1}}
        initialRegion={currentPosition}
        showsUserLocation={true}
        showsCompass
        showsTraffic
        showsBuildings></MapView>
      <TouchableOpacity
        onPress={() =>
          Linking.openURL(
            !lokasiGmaps ? alert('Mohon tunggu') : lokasiGmaps.lokasiGoogleMaps,
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
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   paddingTop: 1,
  // },
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
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
});
