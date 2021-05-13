import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
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
            <TouchableOpacity onPress={handleAlarmOn} style={styles.onTouch}>
              <Image
                style={styles.buttonLogo}
                source={require('../../../assets/images/on-button.png')}
              />
              <Text style={styles.buttonText}>ON</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.wrapperOffButton}>
            <TouchableOpacity onPress={handleAlarmOff} style={styles.onTouch}>
              <Image
                style={styles.buttonLogo}
                source={require('../../../assets/images/off-button.png')}
              />
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
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
  },
  gambar: {
    marginTop: 30,
    width: 270,
    height: 250,
  },
  gambarOff: {
    marginTop: 30,
    width: 400,
    height: 250,
  },
  textStatus: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 26,
    borderRadius: 5,
    color: '#FFFFFF',
  },
  textCard: {
    fontSize: 30,
    fontFamily: 'OpenSans-Bold',
    marginTop: 20,
    padding: 5,
    borderRadius: 5,
    paddingHorizontal: 15,
    color: '#FFFFFF',
    borderWidth: 1,
  },
  container: {
    flex: 1,
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
    fontFamily: 'Roboto-Black',
    color: '#1E4E5F',
  },
  titleWrapper: {
    marginHorizontal: 30,
    marginTop: 20,
    alignItems: 'center',
  },
  wrapperButton: {
    margin: 5,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  wrapperOnButton: {
    marginLeft: 4,
    marginTop: 5,
    // borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    backgroundColor: '#C8F8EC',
  },
  wrapperOffButton: {
    marginTop: 5,
    marginLeft: 25,
    // borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    backgroundColor: '#F6C0CE',
  },
  onTouch: {
    alignItems: 'center',
    marginRight: -15,
  },
  buttonLogo: {
    height: 300,
    width: 250,
    marginHorizontal: -40,
    marginBottom: -50,
    marginTop: -70,
  },
  buttonText: {
    color: 'grey',
    marginTop: -55,
    marginLeft: -20,
    fontFamily: 'Roboto-Black',
    fontSize: 30,
  },
});
