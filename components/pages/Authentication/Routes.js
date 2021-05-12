import React, {useState, useEffect, useContext} from 'react';
import AuthStack from './AuthStack';
import Home from '../Home/Home';
import {AuthContext} from './AuthProvider';
import firebase from '../../database/Firebase';

const Routes = () => {
  const {user, setUser} = useContext(AuthContext);
  const [initializing, setInitializing] = useState(true);
  const onAuthStateChanged = user => {
    setUser(user);
    if (initializing) setInitializing(false);
  };

  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (initializing) return null;

  return <>{user ? <Home /> : <AuthStack />}</>;
};

export default Routes;
