import firebase from 'firebase';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: 'AIzaSyCzPLnDSFvuBGjYqJ8xCw7Nb1TD42fOmO0',
  authDomain: 'smartalarmmotorcycledb.firebaseapp.com',
  databaseURL: 'https://smartalarmmotorcycledb-default-rtdb.firebaseio.com',
  projectId: 'smartalarmmotorcycledb',
  storageBucket: 'smartalarmmotorcycledb.appspot.com',
  messagingSenderId: '964601244869',
  appId: '1:964601244869:web:39439a0cd44ea102aed4ac',
  measurementId: 'G-HSD618C5HH',
};

firebase.initializeApp(firebaseConfig);

export default firebase;
