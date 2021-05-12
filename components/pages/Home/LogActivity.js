import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const LogActivity = ({status, date, time}) => {
  if (status == '1') {
    return (
      <View style={styles.itemOff}>
        <View style={styles.itemLeftOn}>
          <MaterialCommunityIcons
            style={styles.icon}
            name="engine"
            size={31}
            color="#FFFFFF"
          />
          <Text style={styles.statusOn}>{status}</Text>
          <Text style={styles.text}>{date}</Text>
          <Text style={styles.text}>{time}</Text>
        </View>
        <View></View>
      </View>
    );
  } else {
    return (
      <View style={styles.item}>
        <View style={styles.itemLeftOn}>
          <MaterialCommunityIcons
            style={styles.icon}
            name="engine"
            size={31}
            color="#FFFFFF"
          />
          <Text style={styles.statusOn}>{status}</Text>
          <Text style={styles.text}>{date}</Text>
          <Text style={styles.text}>{time}</Text>
        </View>
        <View></View>
      </View>
    );
  }
};

export default LogActivity;

const styles = StyleSheet.create({
  item: {
    width: '90%',
    height: '70%',
    marginTop: 5,
    // backgroundColor: '#1E4E5F',
    backgroundColor: '#FFB156',
    // padding: 15,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15,
    justifyContent: 'center',
  },
  itemOff: {
    width: '90%',
    height: '70%',
    marginTop: 5,
    backgroundColor: '#1E4E5F',
    // padding: 15,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15,
    justifyContent: 'center',
  },
  itemLeftOn: {
    // flexDirection: 'row',
    alignItems: 'center',
  },
  statusOn: {
    fontFamily: 'Poppins-Regular',
    fontSize: 26,
    color: '#FFFFFF',
  },
  text: {
    color: '#FFFFFF',
  },
});
