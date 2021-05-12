import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SignUpScreen from './SignUpScreen';
import {NavigationContainer} from '@react-navigation/native';
import LoginScreen from './LoginScreen';
import MainTabScreen from '../../MainTabScreen';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LoginScreen"
        screenOptions={{headerShown: false}}>
        {/* <Stack.Screen name="Home" component={MainTabScreen} /> */}
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthStack;
