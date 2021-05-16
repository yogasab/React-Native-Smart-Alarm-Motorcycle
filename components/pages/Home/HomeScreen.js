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
import LogActivity from './LogActivity';
import firebase from '../../database/Firebase';
import Ionicons from 'react-native-vector-icons/Ionicons';

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
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.upScreen}>
          <View style={styles.titleWrapperUp}>
            {data ? (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Title style={styles.titleWelcome}>{`Hello,\n${nama} `}</Title>
                <Image
                  style={styles.logo}
                  source={require('../../../assets/images/welcome.png')}
                />
              </View>
            ) : (
              <Title style={styles.title}>Loading ...</Title>
            )}
          </View>
        </View>

        <View style={styles.downScreen}>
          <View style={styles.titleWrapper}>
            <Title style={styles.titleLog}>Alarm History</Title>
          </View>
          {/* <ScrollView> */}

          <View
            style={{marginLeft: 30, flexDirection: 'row', marginBottom: 10}}>
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
              // alignItems: 'center',
              // justifyContent: 'center',
              // alignContent: 'center',
              marginVertical: -60,
              // paddingBottom: 50,
              marginBottom: 30,
              marginHorizontal: 30,
              borderRadius: 10,
              backgroundColor: 'lightgrey',
            }}>
            <View>
              <Text
                style={{
                  fontSize: 23,
                  fontFamily: 'Poppins-Regular',
                  marginHorizontal: 15,
                }}>
                Alarm Status
              </Text>
            </View>
            <View>
              <Text>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. A
                vitae, minus consectetur modi temporibus mollitia quod dolor
                dolorem quisquam fugit unde minima dignissimos laborum itaque
                perferendis omnis velit. Aperiam, praesentium!
              </Text>
            </View>
          </View>

          <View
            style={{
              marginLeft: 30,
              marginBottom: 150,
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
              <View style={styles.itemLocationWrapper}>
                {/* <Text style={styles.textAlamat}>{alamat}</Text> */}
                <Text style={styles.text}>{tanggalAlarm}</Text>
                <Text style={styles.text}>{waktuAlarm}</Text>
              </View>
            </View>
          </View>
          {/* </ScrollView> */}
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
    // borderWidth: 1,
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
    left: 85,
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
    marginTop: -10,
    backgroundColor: '#003554',
    width: '90%',
    height: '70%',
    borderRadius: 15,
  },
  itemLocationWrapper: {
    alignItems: 'center',
    marginTop: 20,
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
