import React, {useContext, useState} from 'react';
import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import FormButton from '../../auth/FormButton';
import FormInput from '../../auth/FormInput';
import {AuthContext} from './AuthProvider';

const SignUpScreen = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nomorHP, setNomorHP] = useState('');
  const [location, setLocation] = useState('');
  const [motor, setMotor] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const {register, error} = useContext(AuthContext);

  return (
    <ScrollView style={{flex: 1}}>
      <View style={styles.container}>
        <Image
          source={require('../../../assets/images/signup.png')}
          style={styles.logo}
        />
        <Text style={styles.text}>Create an account</Text>
        <FormInput
          labelValue={name}
          onChangeText={text => setName(text)}
          placeholderText="Name"
          iconType="user-alt"
          autoCorrect={false}
        />
        <FormInput
          labelValue={email}
          onChangeText={userEmail => setEmail(userEmail)}
          placeholderText="Email"
          iconType="envelope"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <FormInput
          labelValue={password}
          onChangeText={userPassword => setPassword(userPassword)}
          placeholderText="Password"
          iconType="lock"
          secureTextEntry={true}
        />

        <FormInput
          labelValue={confirmPassword}
          onChangeText={userSetPassword => setConfirmPassword(userSetPassword)}
          placeholderText="Confirm Password"
          iconType="lock"
          secureTextEntry={true}
        />

        <FormInput
          labelValue={location}
          onChangeText={userLocation => setLocation(userLocation)}
          placeholderText="Alamat"
          iconType="location-arrow"
        />

        <FormInput
          labelValue={motor}
          onChangeText={userMotorcycle => setMotor(userMotorcycle)}
          placeholderText="Sepeda Motor"
          iconType="motorcycle"
        />

        <FormInput
          labelValue={nomorHP}
          onChangeText={userPhone => setNomorHP(userPhone)}
          placeholderText="Nomor HP"
          keyboardType="number-pad"
          iconType="phone-alt"
        />

        {error ? (
          <Text
            style={{color: 'red', fontSize: 15, fontFamily: 'Roboto-Black'}}>
            {error}
          </Text>
        ) : null}

        {password != confirmPassword ? (
          <Text
            style={{color: 'red', fontSize: 15, fontFamily: 'Roboto-Black'}}>
            Password tidak cocok
          </Text>
        ) : null}

        <FormButton
          buttonTitle="Sign up"
          onPress={() =>
            register(email, password, name, motor, location, motor, nomorHP)
          }
        />

        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.navigate('LoginScreen')}>
          <Text
            style={{
              fontSize: 18,
              marginTop: 24,
              fontFamily: 'OpenSans-SemiBold',
              color: '#051d5f',
              marginBottom: 20,
            }}>
            {' '}
            Sudah punya akun ? Silahkan Login
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingTop: 0,
    backgroundColor: '#FFF',
    height: '100%',
    width: '100%',
  },
  logo: {
    height: 200,
    width: 200,
    resizeMode: 'cover',
    marginTop: 30,
  },
  text: {
    fontFamily: 'Kufam-SemiBold',
    fontSize: 28,
    // marginBottom: 10,
    color: '#051d5f',
    // marginBottom: -10,
  },
  navButton: {
    marginTop: 15,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#2e64e5',
    fontFamily: 'Lato-Regular',
  },
  textPrivate: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginVertical: 2,
  },
  color_textPrivate: {
    fontSize: 12,
    fontWeight: '400',
    fontFamily: 'Lato-Regular',
    color: 'grey',
  },
});
