import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Title} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const LogActivity = ({status, date, time}) => {
  if (status == '1') {
    status = 'ON';
    return (
      <View style={styles.itemOff}>
        <View style={styles.iconWrapper}>
          <Title style={styles.titleStatus}>Smart Card</Title>
          <MaterialCommunityIcons
            style={styles.icon}
            name="card-account-details-outline"
            size={40}
            color="#FFFFFF"
          />
        </View>
        <View style={styles.itemLeftOn}>
          <Text style={styles.statusOn}>{status}</Text>
          <Text style={styles.text}>{date}</Text>
          <Text style={styles.text}>{time}</Text>
        </View>
      </View>
    );
  } else {
    status = 'OFF';
    return (
      <View style={styles.item}>
        <View style={styles.iconWrapper}>
          <Title style={styles.titleStatus}>Smart Card</Title>
          <MaterialCommunityIcons
            style={styles.icon}
            name="card-account-details-outline"
            size={40}
            color="#FFFFFF"
          />
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
    backgroundColor: '#F36A1D',
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
    backgroundColor: '#0582CA',
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
    alignItems: 'center',
    marginBottom: -40,
  },
  statusOn: {
    marginTop: 20,
    fontFamily: 'Poppins-SemiBold',
    fontSize: 35,
    color: '#FFFFFF',
  },
  text: {
    color: '#FFFFFF',
    fontSize: 20,
  },
  icon: {
    left: 100,
    bottom: 2,
  },
  iconWrapper: {
    borderBottomWidth: 2,
    borderBottomColor: 'lightgrey',
    marginTop: -55,
    flexDirection: 'row',
  },
  titleStatus: {
    color: '#FFFFFF',
    fontFamily: 'Poppins-Regular',
    fontSize: 22,
    marginHorizontal: 15,
    marginTop: 5,
  },
});
