import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import SplashScreen from 'react-native-splash-screen';
import Home from './components/pages/Home/Home';
import Onboard from './components/Onboard';
import AuthStack from './components/pages/Authentication/AuthStack';
import Providers from './components/pages/Authentication';

const App = () => {
  const [showOnboard, setShowOnboard] = useState(true);
  const [firstLaunched, setFirstLaunched] = useState(null);

  const handleOnboardFinish = () => {
    setShowOnboard(false);
  };

  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then(value => {
      if (value == null) {
        AsyncStorage.setItem('alreadyLaunched', 'true');
        setFirstLaunched(true);
      } else {
        setFirstLaunched(false);
      }
    });
    SplashScreen.hide();
  }, []);

  if (firstLaunched == null) {
    return null;
  } else if (firstLaunched == true) {
    return (
      <>
        {showOnboard ? (
          <Onboard handleDone={handleOnboardFinish} />
        ) : (
          // <Home />
          // <AuthStack />
          // <Providers />
          <Providers />
        )}
      </>
    );
  } else {
    return (
      <>
        {/* <Home /> */}
        {/* <AuthStack /> */}
        {/* <Providers /> */}
        <Providers />
      </>
    );
  }
};

export default App;
