import React, {useEffect, useState} from 'react';
import {View, Text, Dimensions, StyleSheet, ScrollView} from 'react-native';
import {Title} from 'react-native-paper';
import LogActivity from './LogActivity';
import firebase from '../../database/Firebase';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo';

const heightScreen = Dimensions.get('window').height;

const HomeScreen = ({navigation}) => {
  const [data, setData] = useState([]);
  const fetchData = () => {
    let dataFirebase = firebase
      .database()
      .ref('/' + 'RFID' + '/' + 'dataPengguna');
    dataFirebase.on('value', snapshot => {
      setData(snapshot.val());
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  let keyFirebase = [];
  if (data) {
    keyFirebase = Object.keys(data);
  }

  // const perData = keyFirebase.map(item => {
  //   console.log(data[item]);
  // });
  // console.log(data);
  // console.log('data ', data.alamat);
  // console.log(data);
  return (
    <View style={styles.container}>
      <View style={styles.upScreen}>
        <View style={styles.titleWrapperUp}>
          {data ? (
            <Title style={styles.title}>{`Hello, ${data.nama}`}</Title>
          ) : (
            <Title style={styles.title}>Loading ...</Title>
          )}
        </View>
      </View>
      <View style={styles.downScreen}>
        <View style={styles.titleWrapper}>
          <Fontisto
            name="history"
            size={26}
            style={styles.icon}
            color="#FFB156"
          />
          <Title style={styles.titleLog}>Last History</Title>
        </View>
        <View style={{marginLeft: 30, flexDirection: 'row', marginBottom: -50}}>
          {data ? (
            <LogActivity
              status={data.status}
              date={data.tanggalAlarm}
              time={data.waktuAlarm}
            />
          ) : (
            <LogActivity status="Loading" date="Loading" time="Loading" />
          )}
        </View>
        <View
          style={{
            marginVertical: 5,
            marginLeft: 30,
            marginBottom: 25,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Entypo
            name="location"
            size={26}
            style={styles.icon}
            color="#FFB156"
          />
          <Title style={styles.titleLog}>Location History</Title>
        </View>
        <ScrollView
          style={{marginHorizontal: 35, marginTop: -20}}
          scrollEnabled
          showsVerticalScrollIndicator
          stickyHeaderIndices>
          <View
            style={{
              borderWidth: 1,
              justifyContent: 'center',
              borderRadius: 20,
              backgroundColor: '#1E4E5F',
              padding: 10,
              paddingHorizontal: 15,
            }}>
            {data ? (
              <Text style={{color: '#FFFFFF', fontFamily: 'Roboto-Black'}}>
                {data.alamat}
              </Text>
            ) : (
              <Text style={{color: '#FFFFFF', fontFamily: 'Roboto-Black'}}>
                Loading ...
              </Text>
            )}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#009387',
    // borderWidth: 10,
    // borderColor: '#009387',
    backgroundColor: '#FBFCFE',
  },
  upScreen: {
    height: heightScreen * 0.16,
    backgroundColor: '#1E4E5F',
  },
  downScreen: {
    backgroundColor: '#FBFCFE',
    flex: 1,
    marginTop: -20,
    borderRadius: 25,
  },
  title: {
    fontSize: 30,
    fontFamily: 'Poppins-Regular',
    color: '#FFFFFF',
    padding: 14,
  },
  titleLog: {
    fontSize: 26,
    fontFamily: 'OpenSans-SemiBold',
    color: '#000',
  },
  titleWrapper: {
    marginHorizontal: 30,
    marginTop: 20,
    marginBottom: 5,
    flexDirection: 'row',
    alignItems: 'center',
    // alignItems: 'center',
  },
  titleWrapperUp: {
    paddingVertical: 30,
    padding: 20,
  },
  locationWrapper: {
    // borderWidth: 2,
    alignItems: 'center',
    // backgroundColor: 'black',
  },
  locationTitle: {
    fontFamily: 'Poppins-Regular',
    fontSize: 26,
    marginTop: -30,
    backgroundColor: 'grey',
    padding: 110,
  },
  icon: {
    marginRight: 5,
    marginTop: -4,
  },
});
