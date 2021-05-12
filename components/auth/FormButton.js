import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {windowHeight, windowWidth} from '../utilscreen/Dimensions';

const FormButton = ({buttonTitle, ...rest}) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} {...rest}>
      <Text style={styles.buttonText}>{buttonTitle}</Text>
    </TouchableOpacity>
  );
};

export default FormButton;

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 15,
    marginBottom: 15,
    width: '100%',
    height: windowHeight / 15,
    backgroundColor: '#2e64e5',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 20,
    color: '#FFFFFF',
    fontFamily: 'OpenSans-Bold',
  },
});
