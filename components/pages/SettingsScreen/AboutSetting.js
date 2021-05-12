import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, View, Linking, Button} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import Ionicons from 'react-native-vector-icons/Ionicons';
import RNLocation from 'react-native-location';

RNLocation.configure({
  distanceFilter: 401,
});

const AboutSetting = () => {
  // const [lokasi, setLokasi] = useState([]);
  // const permissionHandle = async () => {
  //   let permission = await RNLocation.checkPermission({
  //     ios: 'whenInUse',
  //     android: {
  //       detail: 'coarse',
  //     },
  //   });
  //   // console.log('Permission ', permission);

  //   let location;
  //   if (!permission) {
  //     permission = await RNLocation.requestPermission({
  //       ios: 'whenInUse',
  //       android: {
  //         detail: 'coarse',
  //         rationale: {
  //           title: 'We need to access your location',
  //           message:
  //             'We use your location to match location between the motorcycle and yours',
  //           buttonPositive: 'OK',
  //           buttonNegative: 'Cancel',
  //         },
  //       },
  //     });
  //     // console.log('Permission 2 ', permission);
  //     location = await RNLocation.getLatestLocation({timeout: 100});
  //     // console.log(
  //     //   location,
  //     //   location.longitude,
  //     //   location.latitude,
  //     //   location.timestamp,
  //     // );
  //     setLokasi(location);
  //   } else {
  //     // console.log('Else');
  //     location = await RNLocation.getLatestLocation({timeout: 100});
  //     // console.log(
  //     //   location,
  //     //   location.longitude,
  //     //   location.latitude,
  //     //   location.timestamp,
  //     // );
  //     setLokasi(location);
  //   }
  // };
  const getLocation = async () => {
    let location = await RNLocation.getLatestLocation({timeout: 100});
    console.log(location.latitude);
    console.log(location.longitude);
  };
  useEffect(() => {
    getLocation();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.logoWrapper}>
        <Image
          style={styles.logo}
          source={require('../../../assets/images/about.png')}
        />
      </View>
      <View style={styles.aboutWrapper}>
        <Text style={styles.aboutText}>About</Text>
      </View>
      <View style={styles.textWrapper}>
        {/* <View style={{margin: 10, padding: 20}}>
          <Button
            title="Get Location"
            color="#009387"
            onPress={permissionHandle}
          />
        </View>
        <View>
          <Text>{lokasi.latitude}</Text>
          <Text>{lokasi.longitude}</Text>
        </View> */}

        <Text
          onPress={() => Linking.openURL('https://github.com/yogasab')}
          style={{fontSize: 17}}>
          Developped with
          <Ionicons name="heart" size={18} color="salmon" />
          by yogasab
        </Text>
        <Text style={styles.infoText}>Copyright 2021 | All Right Reserved</Text>
      </View>
    </View>
  );
};

export default AboutSetting;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  logoWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: 270,
    width: 270,
    resizeMode: 'cover',
    // marginBottom: 10,
    marginTop: 30,
  },
  aboutWrapper: {
    margin: '10%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  aboutText: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 29,
  },
  infoText: {
    fontSize: 15,
    fontFamily: 'OpenSans-Regular',
    // top: '100%',
    marginTop: '45%',
  },
  textWrapper: {
    // marginVertical: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
