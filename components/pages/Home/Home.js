import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
// import {createDrawerNavigator} from '@react-navigation/drawer';
import MainTabScreen from '../../MainTabScreen';
// import DrawerContent from '../../DrawerContent';
// import ProfileSettings from '../ProfileScreen/ProfileSettings';
// import ProfileScreen from '../ProfileScreen/ProfileScreen';
import {createStackNavigator} from '@react-navigation/stack';
import AccountSetting from '../SettingsScreen/AccountSetting';
import AboutSetting from '../SettingsScreen/AboutSetting';

const Stack = createStackNavigator();

const Home = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          {/* <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}> */}
          <Stack.Screen
            options={{headerShown: false}}
            name="Home"
            component={MainTabScreen}
          />
          <Stack.Screen
            options={{title: 'Account Settings'}}
            name="AccountSetting"
            component={AccountSetting}
          />
          <Stack.Screen name="About" component={AboutSetting} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default Home;
