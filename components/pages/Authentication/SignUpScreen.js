import React, {useContext, useState} from 'react';
import {
  Alert,
  Image,
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
  const [confirmPassword, setConfirmPassword] = useState('');

  const {register, error} = useContext(AuthContext);

  console.log(name);
  return (
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
        iconType="account"
        autoCorrect={false}
      />
      <FormInput
        labelValue={email}
        onChangeText={userEmail => setEmail(userEmail)}
        placeholderText="Email"
        iconType="email"
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

      {error ? (
        <Text style={{color: 'red', fontSize: 15, fontFamily: 'Roboto-Black'}}>
          {error}
        </Text>
      ) : null}

      {password != confirmPassword ? (
        <Text style={{color: 'red', fontSize: 15, fontFamily: 'Roboto-Black'}}>
          Password doesn't match
        </Text>
      ) : null}

      <FormButton
        buttonTitle="Sign up"
        onPress={() => register(email, password)}
      />

      {/* <View style={styles.textPrivate}>
        <Text style={styles.color_textPrivate}>
          By registering, you confirm that you accept our{' '}
        </Text>
        <Text style={[styles.color_textPrivate, {color: '#e88832'}]}>
          Terms of service
        </Text>
        <Text style={styles.color_textPrivate}> and </Text>
        <Text style={[styles.color_textPrivate, {color: '#e88832'}]}>
          Privacy Policy
        </Text>
      </View> */}

      {/* <SocialButton
        buttonTitle="Sign In with Google"
        btnType="google"
        color="#de4d41"
        backgroundColor="#f5e7ea"
        onPress={() => alert('Clicked')}
      />
      <SocialButton
        buttonTitle="Sign In with Facebook"
        btnType="facebook"
        color="#4867aa"
        backgroundColor="#e6eaf4"
        onPress={() => alert('Clicked')}
      /> */}
      <TouchableOpacity
        style={styles.navButton}
        onPress={() => navigation.navigate('LoginScreen')}>
        <Text
          style={{
            fontSize: 18,
            marginTop: 24,
            fontFamily: 'OpenSans-SemiBold',
            color: '#051d5f',
            marginBottom: 140,
          }}>
          {' '}
          Have an account ? Sign in
        </Text>
      </TouchableOpacity>
    </View>
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
    marginTop: 100,
  },
  text: {
    fontFamily: 'Kufam-SemiBold',
    fontSize: 28,
    // marginBottom: 10,
    color: '#051d5f',
    marginBottom: -10,
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
