import React, {createContext, useState} from 'react';
import {View, Text, Alert} from 'react-native';
import firebase from '../../database/Firebase';
import firestore from '@react-native-firebase/firestore';

export const AuthContext = createContext();

export const AuthProvider = ({children, navigation}) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');
  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        error,
        setError,
        login: async (email, password) => {
          try {
            await firebase.auth().signInWithEmailAndPassword(email, password);
          } catch (err) {
            setError(err.message);
          }
        },
        register: async (email, password, nama, motor, lokasi, nomorHP) => {
          try {
            await firebase
              .auth()
              .createUserWithEmailAndPassword(email, password)
              .then(() => {
                firestore()
                  .collection('users')
                  .doc(firebase.auth().currentUser.uid)
                  .set({
                    email: email,
                    createdAt: firestore.Timestamp.fromDate(new Date()),
                    nama,
                    motor,
                    lokasi,
                    nomorHP,
                  })
                  .catch(error => {
                    console.log('Something error ', error);
                  });
                // console.log('User deleted!');
              });
          } catch (err) {
            setError(err.message);
          }
        },
        logout: async () => {
          try {
            await firebase.auth().signOut();
          } catch (err) {
            setError(err.message);
          }
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
