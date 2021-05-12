import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {
  Avatar,
  Title,
  Caption,
  // Paragraph,
  Drawer,
  // Text,
  // TouchableRipple,
  // Switch,
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ProfileSettings from './pages/ProfileScreen/ProfileSettings';

const DrawerContent = props => {
  return (
    <View style={{flex: 1}}>
      {/* <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{flexDirection: 'row', marginTop: 2}}>
              <Avatar.Image
                source={require('../assets/images/avatar.jpg')}
                size={50}
              />
              <View style={{marginLeft: 13, marginTop: -2}}>
                <Title style={styles.title}>Yoga Baskoro</Title>
                <Caption style={styles.caption}>Honda CBR 250RR</Caption>
              </View>
            </View>
          </View>
          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="account" color={color} size={size} />
              )}
              label="Profile"
              onPress={() => {
                props.navigation.navigate('ProfileSettings');
              }}
            />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView> */}
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({color, size}) => (
            <Icon name="information" color={color} size={size} />
          )}
          label="About"
          onPress={() => alert('Made with love by yogasab')}
        />
      </Drawer.Section>
    </View>
  );
};

export default DrawerContent;

const styles = StyleSheet.create({
  bottomDrawerSection: {
    borderTopColor: '#f4f4f4',
    borderTopWidth: 4,
  },
  userInfoSection: {
    paddingLeft: 15,
    paddingTop: 13,
  },
  drawerContent: {
    flex: 1,
  },
  drawerSection: {
    marginTop: 15,
    borderBottomWidth: 0,
  },
  title: {
    fontSize: 18,
    marginTop: 3,
    fontFamily: 'OpenSans-Bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
});
