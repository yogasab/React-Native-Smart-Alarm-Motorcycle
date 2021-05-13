import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Title} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const LogActivity = ({status, date, time}) => {
  if (status == '1') {
    return (
      <View style={styles.itemOff}>
        <View style={styles.iconWrapper}>
          <MaterialCommunityIcons
            style={styles.icon}
            name="engine"
            size={43}
            color="#FFFFFF"
          />
          <Title style={styles.titleStatus}>Alarm Status</Title>
        </View>
        <View style={styles.itemLeftOn}>
          <Text style={styles.statusOn}>{status}</Text>
          <Text style={styles.text}>{date}</Text>
          <Text style={styles.text}>{time}</Text>
        </View>
      </View>
    );
  } else {
    return (
      <View style={styles.item}>
        <View style={styles.iconWrapper}>
          <MaterialCommunityIcons
            style={styles.icon}
            name="engine-off"
            size={43}
            color="#FFFFFF"
          />
          <Title style={styles.titleStatus}>Alarm Status</Title>
        </View>
        <View style={styles.itemLeftOn}>
          <Text style={styles.statusOn}>{status}</Text>
          <Text style={styles.text}>{date}</Text>
          <Text style={styles.text}>{time}</Text>
        </View>
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
    backgroundColor: '#FFB156',
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
    borderRadius: 15,
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
    marginBottom: -10,
    alignItems: 'center',
  },
  statusOn: {
    fontFamily: 'Poppins-Regular',
    fontSize: 30,
    color: '#FFFFFF',
  },
  text: {
    color: '#FFFFFF',
    fontSize: 20,
  },
  icon: {
    left: 25,
    top: -20,
  },
  iconWrapper: {
    marginTop: -5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleStatus: {
    color: '#FFFFFF',
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 26,
    left: 95,
    bottom: 17,
  },
});
