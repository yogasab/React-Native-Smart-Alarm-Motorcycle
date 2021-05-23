import React, {useContext, useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import FormButton from '../../auth/FormButton';
import FormInput from '../../auth/FormInput';
import {AuthContext} from './AuthProvider';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {login, error} = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/images/signin.png')}
        style={styles.logo}
      />
      <View>
        <Text style={styles.text}>Login</Text>
      </View>
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

      {error ? (
        <Text style={{color: 'red', fontFamily: 'Roboto-Black'}}>{error}</Text>
      ) : null}

      <FormButton
        buttonTitle="Sign in"
        onPress={() => login(email, password)}
      />

      <TouchableOpacity
        style={styles.forgotButton}
        onPress={() => navigation.navigate('SignUpScreen')}>
        <Text
          style={{
            marginVertical: 12,
            fontSize: 18,
            fontFamily: 'Roboto-Medium',
          }}>
          Tidak punya akun ? Silahkan mendaftar.
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFF',
    height: '100%',
    width: '100%',
  },
  logo: {
    height: 200,
    width: 270,
    resizeMode: 'cover',
    marginBottom: 10,
    marginTop: 30,
  },
  text: {
    fontFamily: 'Kufam-SemiBold',
    fontSize: 28,
    color: '#051d5f',
    marginBottom: -9,
  },
  navButton: {
    marginTop: 15,
  },
  forgotButton: {
    marginVertical: 15,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#2e64e5',
    fontFamily: 'Lato-Regular',
    // backgroundColor: 'lightblue',
  },
});
