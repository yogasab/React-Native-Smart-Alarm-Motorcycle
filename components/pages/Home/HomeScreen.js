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
  const {status, nama, tanggalAlarm, waktuAlarm, alamat} = data;
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
  return (
    <View style={styles.container}>
      <View style={styles.upScreen}>
        <View style={styles.titleWrapperUp}>
          {data ? (
            <Title style={styles.title}>{`Hello, ${nama}`}</Title>
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
            style={{marginRight: 10}}
            color="#FFB156"
          />
          <Title style={styles.titleLog}>Last alarm status</Title>
        </View>
        <View style={{marginLeft: 30, flexDirection: 'row', marginBottom: -50}}>
          {data ? (
            <LogActivity
              status={status}
              date={tanggalAlarm}
              time={waktuAlarm}
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
            // alignItems: 'center',
          }}>
          {/* <Title style={styles.titleLog}>Location History</Title> */}
          <View style={styles.locationHistoryWrapper}>
            <View style={styles.locationWrapper}>
              <Title style={styles.titleStatus}>Last location status</Title>
              <Entypo
                name="location"
                size={42}
                style={styles.icon}
                color="#FFFFFF"
              />
            </View>
            <View style={styles.itemLocationWrapper}>
              <Text style={styles.textAlamat}>{alamat}</Text>
              <Text style={styles.text}>{tanggalAlarm}</Text>
              <Text style={styles.text}>{waktuAlarm}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    fontFamily: 'Poppins-SemiBold',
  },
  titleWrapper: {
    marginHorizontal: 30,
    marginTop: 20,
    marginBottom: 5,
    flexDirection: 'row',
  },
  titleWrapperUp: {
    paddingVertical: 25,
    padding: 20,
  },
  icon: {
    marginLeft: 5,
    // left: 20,
    // top: 10,
  },
  locationWrapper: {
    flexDirection: 'row',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleStatus: {
    color: '#FFFFFF',
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 24,
    backgroundColor: '#1E4E5F',
    marginTop: 5,
    marginRight: 5,
    // left: 10,
    // marginTop: 5,
  },
  locationHistoryWrapper: {
    backgroundColor: '#1E4E5F',
    width: '90%',
    height: '60%',
    borderRadius: 15,
  },
  itemLocationWrapper: {
    alignItems: 'center',
    // justifyContent: 'center',
  },
  textAlamat: {
    alignItems: 'center',
    justifyContent: 'center',
    color: '#FFF',
    fontSize: 20,
    marginBottom: 20,
    // marginTop: '15%',
  },
  text: {
    color: '#FFF',
  },
});
