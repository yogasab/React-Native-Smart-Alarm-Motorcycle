import React from 'react';
import {StatusBar, Text, View, Image, StyleSheet} from 'react-native';
import Colors from '../assets/colors/Colors';
import AppIntroSlider from 'react-native-app-intro-slider';
import LinearGradient from 'react-native-linear-gradient';

const data = [
  {
    title: 'Pantau lokasi sepeda motor',
    text: 'Dengan menggunakan pelacak lokasi yang terhubung dengan Google Maps',
    image: require('../assets/images/Onboard1.png'),
  },
  {
    title: 'Amankan sepeda motor',
    text: 'Dengan autentikasi kartu E-KTP membuat sistem motor lebih aman',
    image: require('../assets/images/Onboard2.png'),
  },
  {
    title: 'Kontrol Sepeda Motor',
    text: 'Dengan Smartphone kamu bisa mengontrol sepeda motor',
    image: require('../assets/images/Onboard3.png'),
  },
];

const Onboard = props => {
  const renderItem = ({item}) => {
    return (
      <View style={styles.slide}>
        <Image source={item.image} style={styles.image} />
        <View>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.text}>{item.text}</Text>
        </View>
      </View>
    );
  };

  const keyExtractor = item => item.title;

  const renderDoneButton = () => {
    return (
      <LinearGradient
        colors={['#B37A81', '#8E3D49']}
        style={styles.linearGradient}
        start={{x: 0, y: 0.5}}
        end={{x: 1, y: 0.5}}
        style={styles.doneButtonWrapper}>
        <Text style={styles.doneButtonText}>Done</Text>
      </LinearGradient>
      // <View style={styles.doneButtonWrapper}>
      //   <Text style={styles.doneButtonText}>Done</Text>
      // </View>
    );
  };

  const renderNextButton = () => {
    return (
      <View style={styles.nextTextWrapper}>
        <Text style={styles.nextText}>Next</Text>
      </View>
    );
  };

  const renderPrevButton = () => {
    return (
      <View style={styles.backTextWrapper}>
        <Text style={styles.backText}>Back</Text>
      </View>
    );
  };

  const handleDone = () => {
    props.handleDone();
  };

  return (
    <View style={{flex: 1}}>
      <StatusBar translucent backgroundColor="transparent" />
      <AppIntroSlider
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        renderDoneButton={renderDoneButton}
        renderNextButton={renderNextButton}
        renderPrevButton={renderPrevButton}
        showPrevButton
        dotStyle={styles.dotStyle}
        activeDotStyle={styles.activeDotStyle}
        data={data}
        onDone={handleDone}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
  },
  image: {
    marginVertical: 50,
  },
  title: {
    fontSize: 23,
    color: Colors.black,
    textAlign: 'center',
    fontFamily: 'OpenSans-Bold',
    // marginHorizontal: 60,
    paddingTop: 10,
  },
  text: {
    fontSize: 14,
    color: Colors.black,
    textAlign: 'center',
    fontFamily: 'OpenSans-Bold',
    marginHorizontal: 60,
    paddingTop: 10,
  },
  nextTextWrapper: {
    height: 40,
    width: 40,
    marginRight: 20,
    marginTop: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nextText: {
    color: Colors.maroon,
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 15,
  },
  backTextWrapper: {
    height: 40,
    width: 40,
    marginLeft: 20,
    marginTop: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backText: {
    color: Colors.maroon,
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 15,
  },
  doneButtonWrapper: {
    flex: 1,
    paddingLeft: 35,
    paddingRight: 50,
    paddingVertical: 10,
    borderRadius: 25,
    marginRight: -40,
  },
  doneButtonText: {
    fontSize: 14,
    fontFamily: 'OpenSans-SemiBold',
    textAlign: 'center',
    color: Colors.white,
  },
  dotStyle: {
    backgroundColor: Colors.lightMarron,
  },
  activeDotStyle: {backgroundColor: Colors.maroon},
});
export default Onboard;
