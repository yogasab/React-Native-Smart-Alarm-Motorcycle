import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './pages/Home/HomeScreen';
import LockMotorcycle from './pages/LockMotorcycle/LockMotorcycle';
import Icon from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import TrackerScreen from './pages/TrackerScreen/TrackerScreen';
import SettingScreen from './pages/SettingsScreen/SettingScreen';
import AccountSetting from './pages/SettingsScreen/AccountSetting';
import About from './pages/SettingsScreen/AboutSetting';

const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const SettingStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      inactiveColor="#98A0AE"
      activeColor="#1E4E5F">
      <Tab.Screen
        name="Log"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          // tabBarColor: '#009387',
          tabBarColor: '#FBFCFE',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={28} />
          ),
        }}
      />
      <Tab.Screen
        name="Alarm"
        component={DetailsStackScreen}
        options={{
          // tabBarLabel: 'Lock',
          // tabBarColor: '#d02860', //'#1f65ff',
          tabBarColor: '#FBFCFE',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="lock" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="Tracker"
        component={TrackerScreen}
        options={{
          tabBarLabel: 'Tracker',
          // tabBarColor: '#694fad',
          tabBarColor: '#FBFCFE',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="google-maps"
              color={color}
              size={30}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingScreen}
        options={{
          tabBarLabel: 'Settings',
          // tabBarColor: '#1f65ff',
          tabBarColor: '#FBFCFE',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="cog" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTabScreen;

const HomeStackScreen = ({navigation}) => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#009387',
        },
        headerShown: false,
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontFamily: 'OpenSans-Bold',
        },
      }}>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          // title: 'Home',
          headerLeft: () => (
            <Icon.Button
              name="menu-fold"
              size={22}
              backgroundColor={'#009387'}
              onPress={() => navigation.openDrawer()}></Icon.Button>
          ),
        }}
      />
    </HomeStack.Navigator>
  );
};

const DetailsStackScreen = ({navigation}) => {
  return (
    <DetailsStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#d02860', //'#1f65ff',
        },
        headerShown: false,
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontFamily: 'OpenSans-Bold',
        },
      }}>
      <DetailsStack.Screen
        name="Lock"
        component={LockMotorcycle}
        // options={{title: 'Previous'}}
      />
    </DetailsStack.Navigator>
  );
};

const SettingStackNavigator = ({navigation}) => {
  return (
    <SettingStack.Navigator>
      <SettingStack.Screen name="AccountSetting" component={AccountSetting} />
      <SettingStack.Screen name="About" component={About} />
    </SettingStack.Navigator>
  );
};
