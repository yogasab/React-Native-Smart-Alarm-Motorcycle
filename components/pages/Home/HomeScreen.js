import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';
import {Title} from 'react-native-paper';
import SmartCardLog from './SmartCardLog';
import firebase from '../../database/Firebase';
import firestore from '@react-native-firebase/firestore';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {notification} from '../../notifications/Notifikasi';
import {useContext} from 'react';
import {AuthContext} from '../Authentication/AuthProvider';
import AlarmStatusLog from './AlarmStatusLog';

const heightScreen = Dimensions.get('window').height;

const HomeScreen = () => {
  const [dataSmartCard, setDataSmartcard] = useState([]);
  const [dataRelay, setDataRelay] = useState([]);
  const [dataLokasi, setDataLokasi] = useState([]);
  const [dataFirestore, setDataFirestore] = useState('');
  const {user} = useContext(AuthContext);

  const fetchDataSmartcard = () => {
    let dataFirebase = firebase.database().ref('/' + 'dataE-KTP' + '/');
    dataFirebase.on('value', snapshot => {
      setDataSmartcard(snapshot.val());
      // smartcardNotification();
    });
  };

  const fetchAlarmRelay = () => {
    let dataFirebase = firebase.database().ref('/' + 'dataRelay' + '/');
    dataFirebase.on('value', snapshot => {
      setDataRelay(snapshot.val());
    });
  };

  const fetchDataLokasi = () => {
    let dataFirebase = firebase.database().ref('/' + 'dataLokasi');
    dataFirebase.on('value', snapshot => {
      setDataLokasi(snapshot.val());
    });
  };

  const fetchDataFirestore = async () => {
    await firestore()
      .collection('users')
      .doc(user.uid)
      .get()
      .then(documentSnapshot => {
        if (documentSnapshot.exists) {
          setDataFirestore(documentSnapshot.data().nama);
        }
      });
  };

  useEffect(() => {
    fetchDataSmartcard();
    fetchAlarmRelay();
    fetchDataFirestore();
    fetchDataLokasi();
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.upScreen}>
          <View style={styles.titleWrapperUp}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Title
                style={[styles.titleWelcome, {fontSize: 65, marginTop: 10}]}>
                {`Halo\n`}
                <Title style={styles.titleWelcome}>{`${dataFirestore}`}</Title>
              </Title>
              <Image
                style={styles.logo}
                source={require('../../../assets/images/welcome.png')}
              />
            </View>
          </View>
        </View>

        <View style={styles.downScreen}>
          <View style={styles.titleWrapper}>
            <Title style={styles.titleLog}>Alarm History</Title>
          </View>

          {/* Smart Card Status */}
          <View
            style={{
              marginLeft: 30,
              flexDirection: 'row',
              marginBottom: -15,
            }}>
            {dataSmartCard ? (
              <SmartCardLog
                status={dataSmartCard.statusModul}
                date={dataSmartCard.tanggalAlarm}
                time={dataSmartCard.waktuAlarm}
              />
            ) : (
              <SmartCardLog
                status=""
                date={dataSmartCard.tanggalAlarm}
                time={dataSmartCard.waktuAlarm}
              />
            )}
          </View>

          {/* Alarm Status */}
          <AlarmStatusLog
            status={dataRelay.relayStatus}
            date={dataRelay.tanggalAlarm}
            time={dataRelay.waktuAlarm}
          />

          {/* Last Location */}
          <View
            style={{
              marginLeft: 30,
              marginBottom: '90%',
              // paddingBottom: '30%',
              // flex: 1,
            }}>
            <View style={styles.locationHistoryWrapper}>
              <View style={styles.locationWrapper}>
                <Title style={styles.titleStatus}>Last location</Title>
                <Ionicons
                  name="md-location-outline"
                  size={38}
                  style={styles.icon}
                  color="#FFFFFF"
                />
              </View>
              {dataLokasi ? (
                <View style={styles.itemLocationWrapper}>
                  <Text
                    style={[
                      styles.text,
                      {marginVertical: 20, alignItems: 'center', marginTop: 25},
                    ]}>
                    {`https://google.com/maps/place/${dataLokasi.latitude}/${dataLokasi.longitude}`}
                  </Text>
                  <Text style={styles.text}>{dataLokasi.tanggalPelacakan}</Text>
                  <Text style={styles.text}>{dataLokasi.waktuPelacakan}</Text>
                </View>
              ) : (
                <View style={styles.itemLocationWrapper}>
                  <Text
                    style={[
                      styles.text,
                      {
                        marginTop: 40,
                        fontFamily: 'OpenSanss-Bold',
                        fontSize: 20,
                      },
                    ]}>
                    Tidak ada data dari GPS
                  </Text>
                </View>
              )}
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FBFCFE',
  },
  upScreen: {
    height: heightScreen * 0.33,
    backgroundColor: '#1E4E5F',
  },
  downScreen: {
    backgroundColor: '#FBFCFE',
    flex: 1,
    marginTop: -20,
    borderRadius: 25,
  },
  title: {
    fontSize: 20,
    fontFamily: 'Poppins-Regular',
    color: '#FFFFFF',
  },
  titleWelcome: {
    fontSize: 35,
    fontFamily: 'Poppins-Regular',
    color: '#FFFFFF',
    marginBottom: 70,
    paddingVertical: 40,
    marginLeft: 20,
  },
  titleLog: {
    fontSize: 30,
    fontFamily: 'Roboto-Bold',
    color: 'grey',
  },
  titleWrapper: {
    marginHorizontal: 30,
    marginTop: 20,
    marginBottom: 5,
    flexDirection: 'row',
  },
  titleWrapperUp: {
    marginVertical: -40,
  },
  icon: {
    left: 100,
    bottom: 2,
  },
  locationWrapper: {
    borderBottomWidth: 2,
    borderBottomColor: 'lightgrey',
    marginTop: -15,
    flexDirection: 'row',
    paddingTop: 20,
  },
  titleStatus: {
    color: '#FFFFFF',
    fontFamily: 'Poppins-Regular',
    fontSize: 23,
    marginHorizontal: 15,
    marginTop: 5,
  },
  locationHistoryWrapper: {
    backgroundColor: '#003554',
    width: '90%',
    height: '70%',
    borderRadius: 15,
  },
  itemLocationWrapper: {
    alignItems: 'center',
    marginTop: 10,
  },
  text: {
    color: '#FFFFFF',
    fontSize: 20,
  },
  logo: {
    height: 390,
    width: 120,
    left: -20,
    bottom: 50,
  },
});
