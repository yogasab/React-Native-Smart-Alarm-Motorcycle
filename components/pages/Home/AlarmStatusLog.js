import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const AlarmStatusLog = ({status, date, time}) => {
  if (status == 'ON') {
    return (
      <View
        style={{
          marginVertical: -60,
          marginBottom: 30,
          marginHorizontal: 30,
          borderRadius: 15,
          backgroundColor: '#006494',
        }}>
        <View
          style={{
            borderBottomColor: '#FFFFFF',
            borderBottomWidth: 2,
            flexDirection: 'row',
            marginTop: 7,
          }}>
          <Text
            style={{
              color: '#FFFFFF',
              fontSize: 23,
              fontFamily: 'Poppins-Regular',
              marginLeft: 15,
              marginRight: 13,
            }}>
            Alarm Status
          </Text>
          <Ionicons
            name="md-power"
            size={38}
            style={styles.icon}
            color="#FFFFFF"
          />
        </View>
        <View style={{marginVertical: 20, alignItems: 'center'}}>
          <Text
            style={{
              color: '#000',
              fontFamily: 'Poppins-SemiBold',
              fontSize: 35,
              color: '#FFFFFF',
            }}>
            {status}
          </Text>
          <Text style={styles.text}>{date}</Text>
          <Text style={styles.text}>{time}</Text>
        </View>
      </View>
    );
  } else {
    return (
      <View
        style={{
          marginVertical: -60,
          marginBottom: 30,
          marginHorizontal: 30,
          borderRadius: 15,
          backgroundColor: '#FF5733',
        }}>
        <View
          style={{
            borderBottomColor: '#FFFFFF',
            borderBottomWidth: 2,
            flexDirection: 'row',
            marginTop: 7,
          }}>
          <Text
            style={{
              color: '#FFFFFF',
              fontSize: 23,
              fontFamily: 'Poppins-Regular',
              marginLeft: 15,
              marginRight: 13,
            }}>
            Alarm Status
          </Text>
          <Ionicons
            name="md-power"
            size={38}
            style={styles.icon}
            color="#FFFFFF"
          />
        </View>
        <View style={{marginVertical: 20, alignItems: 'center'}}>
          <Text
            style={{
              color: '#000',
              fontFamily: 'Poppins-SemiBold',
              fontSize: 35,
              color: '#FFFFFF',
            }}>
            {status}
          </Text>
          <Text style={styles.text}>{date}</Text>
          <Text style={styles.text}>{time}</Text>
        </View>
      </View>
    );
  }
};

export default AlarmStatusLog;

const styles = StyleSheet.create({
  icon: {
    left: 100,
    bottom: 2,
  },
  text: {
    color: '#FFFFFF',
    fontSize: 20,
  },
});
