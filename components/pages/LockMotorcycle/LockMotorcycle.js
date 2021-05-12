import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  TouchableOpacity,
  Dimensions,
  Image,
  Alert,
} from 'react-native';
import {Title} from 'react-native-paper';
import firebase from '../../database/Firebase';

const heightScreen = Dimensions.get('window').height;

const LockMotorcycle = ({navigation}) => {
  const [relay, setRelay] = useState('');

  const fetchDataRelay = () => {
    let databaseRelayFirebase = firebase.database().ref('/' + 'RELAY');
    databaseRelayFirebase.on('value', snapshot => {
      setRelay(snapshot.val());
    });
  };

  const handleAlarmOn = () => {
    firebase
      .database()
      .ref('/')
      .update({
        RELAY: 'ON',
      })
      .then(() => {
        console.log('Alarm Updated ON');
      });
  };

  const handleAlarmOff = () => {
    firebase
      .database()
      .ref('/')
      .update({
        RELAY: 'OFF',
      })
      .then(() => {
        console.log('Alarm OFF');
      });
  };

  useEffect(() => {
    fetchDataRelay();
    // navigation.addListener('focus', () => setLoading(!loading));
  }, []);
  console.log(relay);
  return (
    <View style={styles.container}>
      <View style={styles.upScreen}>
        <View style={styles.status}>
          <Text style={styles.textStatus}>Status</Text>
          {relay == 'OFF' ? (
            <Image
              style={styles.gambarOff}
              source={require('../../../assets/images/motor-off.png')}
            />
          ) : (
            <Image
              style={styles.gambar}
              source={require('../../../assets/images/motor-on.png')}
            />
          )}
          <Text style={styles.textCard}>{`Alarm ${relay}`}</Text>
        </View>
      </View>

      <View style={styles.downScreen}>
        <View style={styles.titleWrapper}>
          <Title style={styles.titleLog}>Panel Smart Alarm</Title>
        </View>
        <View style={styles.wrapperButton}>
          <View style={styles.wrapperOnButton}>
            <TouchableOpacity
              onPress={() => handleAlarmOn()}
              style={styles.onButton}>
              {/* <MaterialCommunityIcons name="engine" color="black" size={32} /> */}
              <Text style={styles.buttonText}>ON</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.wrapperOffButton}>
            <TouchableOpacity
              onPress={() => handleAlarmOff()}
              style={styles.offButton}>
              <Text style={styles.buttonText}>OFF</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default LockMotorcycle;

const styles = StyleSheet.create({
  status: {
    // marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#E8EAED',
    padding: 10,
    // marginHorizontal: 20,
    // borderWidth: 1,
    borderRadius: 10,
  },
  gambar: {
    marginTop: 30,
    width: 270,
    height: 250,
    // marginBottom: -10,
  },
  gambarOff: {
    marginTop: 30,
    width: 400,
    height: 250,
    // marginBottom: -10,
  },
  textStatus: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 26,
    borderRadius: 5,
    // marginBottom: -5,
    // paddingHorizontal: 10,
    // padding: 10,
    // margin: 10,
    color: '#FFFFFF',
  },
  textCard: {
    fontSize: 30,
    fontFamily: 'OpenSans-Bold',
    marginTop: 20,
    // borderRadius: 5,
    paddingHorizontal: 15,
    color: '#FFFFFF',
    // borderWidth: 2,
  },
  wrapperButton: {
    marginTop: -20,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
  onButton: {
    // marginRight: 20,
    margin: 10,
    padding: 50,
    backgroundColor: '#01767E',
    borderRadius: 90,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
  },
  offButton: {
    padding: 50,
    margin: 10,
    backgroundColor: '#d02860',
    borderRadius: 80,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
  },
  buttonText: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 28,
  },
  wrapperOnButton: {
    // borderWidth: 1,
    margin: 10,
    paddingVertical: 10,
    borderRadius: 15,
  },
  wrapperOffButton: {
    // borderWidth: 1,
    margin: 10,
    paddingVertical: 10,
    borderRadius: 15,
  },
  container: {
    flex: 1,
    // backgroundColor: '#009387',
    // borderWidth: 10,
    // borderColor: '#009387',
    backgroundColor: '#FBFCFE',
  },
  upScreen: {
    height: heightScreen * 0.6,
    backgroundColor: '#1E4E5F',
  },
  downScreen: {
    backgroundColor: '#FBFCFE',
    flex: 1,
    marginTop: -20,
    borderRadius: 25,
  },
  title: {
    fontSize: 40,
    fontFamily: 'Poppins-Regular',
    color: '#FFFFFF',
    padding: 14,
    marginTop: 10,
  },
  titleLog: {
    fontSize: 24,
    fontFamily: 'OpenSans-SemiBold',
    color: '#000',
  },
  titleWrapper: {
    marginHorizontal: 30,
    marginTop: 20,
    marginBottom: 10,
    alignItems: 'center',
    // flexDirection: 'row',
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
});
