// import React from 'react';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import {createStackNavigator} from '@react-navigation/stack';
// import ProfileScreen from './ProfileScreen';
// import EditProfileScreen from './EditProfileScreen';

// const Tab = createStackNavigator();
// const ProfileStack = createStackNavigator();

// const ProfileSettings = ({navigation, id}) => {
//   return (
//     <ProfileStack.Navigator
//       screenOptions={{headerStyle: {backgroundColor: '#fff', elevation: 0}}}
//       initialRouteName="Profile">
//       <ProfileStack.Screen
//         name="Profile"
//         component={ProfileScreen}
//         options={{
//           title: '',
//           tabBarColor: 'lightblue',
//           headerTintColor: 'lightblue',
//           // tabBarIcon: ({color}) => (
//           //   <MaterialCommunityIcons name="home" color={color} size={} />
//           // ),
//           headerLeft: () => (
//             <Icon.Button
//               name="menu"
//               size={30}
//               backgroundColor="#fff"
//               color="#000"
//               onPress={() => navigation.openDrawer()}
//             />
//           ),
//           headerRight: () => (
//             <Icon.Button
//               name="account-edit"
//               size={30}
//               backgroundColor="#fff"
//               color="#000"
//               onPress={() => navigation.navigate('EditProfileScreen', {id: id})}
//             />
//           ),
//         }}
//       />
//       <ProfileStack.Screen
//         name="EditProfileScreen"
//         options={{
//           title: 'Edit Profile',
//         }}
//         component={EditProfileScreen}
//       />
//     </ProfileStack.Navigator>
//   );
// };

// export default ProfileSettings;
