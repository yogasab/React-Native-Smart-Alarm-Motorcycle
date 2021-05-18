import React, {useContext, useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {Caption, Title} from 'react-native-paper';
import {AuthContext} from '../Authentication/AuthProvider';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import firestore from '@react-native-firebase/firestore';

const SettingScreen = ({navigation}) => {
  const {user, logout} = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [nama, setNama] = useState('');
  const [nomorHP, setNomorHP] = useState('');
  const [lokasi, setLokasi] = useState('');
  const [email, setEmail] = useState('');
  const [motor, setMotor] = useState('');

  const getCurrentUser = async () => {
    await firestore()
      .collection('users')
      .doc(user.uid)
      .get()
      .then(documentSnapshot => {
        if (documentSnapshot.exists) {
          // console.log('User Data', documentSnapshot.data());
          setNama(documentSnapshot.data().name);
          setNomorHP(documentSnapshot.data().phone);
          setLokasi(documentSnapshot.data().location);
          setEmail(documentSnapshot.data().email);
          setMotor(documentSnapshot.data().motor);
        }
      });
  };

  useEffect(() => {
    getCurrentUser();
    navigation.addListener('focus', () => setLoading(!loading));
  }, [navigation, loading]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.userInfoSection}>
        <View style={{flexDirection: 'row', marginTop: 20}}>
          {/* <Avatar.Image
            source={require('../../../assets/images/avatar.jpg')}
            size={80}
          /> */}
          <Icon
            name="account-circle"
            size={87}
            color="#003554"
            style={{marginBottom: -10}}
          />
          <View style={{marginLeft: 10, marginTop: 5}}>
            <Title
              style={[
                styles.title,
                {
                  marginTop: 15,
                  marginBottom: 5,
                },
              ]}>
              {nama}
            </Title>
            <Caption style={styles.caption}>{motor}</Caption>
          </View>
        </View>
      </View>

      <View style={styles.infoBoxWrapper}>
        <View style={styles.row}>
          <Icon name="map-marker-radius" color="#777777" size={20} />
          <Text style={{color: '#777777', marginLeft: 20}}>{lokasi}</Text>
        </View>
        <View style={styles.row}>
          <Icon name="phone" color="#777777" size={20} />
          <Text style={{color: '#777777', marginLeft: 20}}>{nomorHP}</Text>
        </View>
        <View style={styles.row}>
          <Icon name="email" color="#777777" size={20} />
          <Text style={{color: '#777777', marginLeft: 20}}>{email}</Text>
        </View>
      </View>

      <View style={styles.menuWrapper}>
        <View style={{borderWidth: 1, borderColor: '#dddddd'}} />
        <TouchableOpacity onPress={() => navigation.navigate('AccountSetting')}>
          <View style={styles.menuItem}>
            <Icon name="account-edit" color="#1E4E5F" size={25} />
            <Text style={styles.menuItemText}>Account</Text>
          </View>
        </TouchableOpacity>
        <View style={{borderWidth: 1, borderColor: '#dddddd'}} />
        <TouchableOpacity onPress={() => navigation.navigate('About')}>
          <View style={styles.menuItem}>
            <Icon name="information" color="#1E4E5F" size={25} />
            <Text style={styles.menuItemText}>About</Text>
          </View>
        </TouchableOpacity>
        <View style={{borderWidth: 1, borderColor: '#dddddd'}} />
        <TouchableOpacity onPress={() => logout()}>
          <View style={styles.menuItem}>
            <Icon name="power" color="red" size={25} />
            <Text style={styles.menuItemText}>Logout</Text>
          </View>
        </TouchableOpacity>
        <View style={{borderWidth: 1, borderColor: '#dddddd'}} />
      </View>
    </SafeAreaView>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  // wrapperButton: {
  //   marginTop: 20,
  //   height: 100,
  //   width: 100,
  //   backgroundColor: 'red',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   borderRadius: 50,
  // },
  // text: {fontFamily: 'OpenSans-Bold'},
  userInfoSection: {
    paddingHorizontal: 20,
    marginBottom: 9,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoBoxWrapper: {
    // borderBottomColor: '#dddddd',
    // borderBottomWidth: 2,
    // borderTopColor: '#dddddd',
    // borderTopWidth: 2,
    paddingLeft: 20,
    paddingTop: 10,
    marginTop: 0,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuWrapper: {
    marginTop: -1,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  menuItemText: {
    fontFamily: 'OpenSans-Regular',
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 17,
    lineHeight: 26,
  },
});
