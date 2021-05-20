// import React, {useContext, useEffect, useState} from 'react';
// import {
//   Alert,
//   ImageBackground,
//   StyleSheet,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   View,
// } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import BottomSheet from 'reanimated-bottom-sheet';
// import Animated from 'react-native-reanimated';
// import {AuthContext} from '../Authentication/AuthProvider';
// import firestore from '@react-native-firebase/firestore';

// const AccountSetting = ({navigation}) => {
//   const {user} = useContext(AuthContext);
//   const [image, setImage] = useState(null);
//   const [nama, setNama] = useState('');
//   const [nomorHP, setNomorHP] = useState('');
//   const [lokasi, setLokasi] = useState('');
//   const [email, setEmail] = useState('');
//   const [motor, setMotor] = useState('');

//   const getCurrentUser = async () => {
//     await firestore()
//       .collection('users')
//       .doc(user.uid)
//       .get()
//       .then(documentSnapshot => {
//         if (documentSnapshot.exists) {
//           console.log('Current User Profile ', documentSnapshot.data());
//           setNama(documentSnapshot.data().name);
//           setNomorHP(documentSnapshot.data().phone);
//           setLokasi(documentSnapshot.data().location);
//           setEmail(documentSnapshot.data().email);
//           setMotor(documentSnapshot.data().motor);
//         }
//       });
//   };

//   useEffect(() => {
//     getCurrentUser();
//   }, []);

//   const handleUpdate = () => {
//     firestore()
//       .collection('users')
//       .doc(user.uid)
//       .update({
//         name: nama,
//         phone: nomorHP,
//         location: lokasi,
//         email: email,
//         motor: motor,
//       })
//       .then(() => {
//         console.log('User Updated');
//         Alert.alert(
//           'User Updated',
//           'Your profile has been updated succesfully',
//         );
//         navigation.goBack();
//       });
//   };

//   bs = React.createRef();
//   fall = new Animated.Value(1);

//   // renderInner = () => (
//   //   <View style={styles.panel}>
//   //     <View style={{alignItems: 'center'}}>
//   //       <Text style={styles.panelTitle}>Upload Photo</Text>
//   //       <Text style={styles.panelSubtitle}>Choose Your Profile Picture</Text>
//   //     </View>
//   //     <TouchableOpacity
//   //       style={styles.panelButton}
//   //       onPress={takePhotoFromCamera}>
//   //       <Text style={styles.panelButtonTitle}>Take from camera</Text>
//   //     </TouchableOpacity>
//   //     <TouchableOpacity style={styles.panelButton}>
//   //       <Text style={styles.panelButtonTitle}>Choose from gallery</Text>
//   //     </TouchableOpacity>
//   //     <TouchableOpacity
//   //       onPress={() => this.bs.current.snapTo(1)}
//   //       style={[styles.panelButton, {backgroundColor: '#1E4E5F'}]}>
//   //       <Text style={styles.panelButtonTitle}>Cancel</Text>
//   //     </TouchableOpacity>
//   //   </View>
//   // );
//   // renderHeader = () => (
//   //   <View style={styles.header}>
//   //     <View style={styles.panelHeader}>
//   //       <View style={styles.panelHandle}></View>
//   //     </View>
//   //   </View>
//   // );
//   return (
//     <View style={styles.container}>
//       {/* Bottomsheet */}
//       <BottomSheet
//         ref={this.bs}
//         renderContent={this.renderInner}
//         renderHeader={this.renderHeader}
//         snapPoints={[330, 0]}
//         initialSnap={1}
//         callbackNode={this.fall}
//         enabledGestureInteraction={true}
//       />

//       <Animated.View
//         style={{
//           margin: 20,
//           opacity: Animated.add(0.3, Animated.multiply(this.fall, 1.0)),
//         }}>
//         {/* Avatar Profile */}
//         <View style={{alignItems: 'center'}}>
//           {/* <TouchableOpacity onPress={() => this.bs.current.snapTo(0)}>
//             <View style={styles.profileWrapper}>
//               <ImageBackground
//                 source={require('../../../assets/images/avatar.jpg')}
//                 style={{width: 100, height: 100}}
//                 imageStyle={{borderRadius: 15}}>
//                 <View>
//                   <Icon
//                     name="camera"
//                     size={32}
//                     color="#FFF"
//                     style={{
//                       opacity: 0.5,
//                       borderWidth: 1,
//                       borderColor: '#FFF',
//                       alignItems: 'center',
//                       justifyContent: 'center',
//                       borderRadius: 10,
//                       margin: 34,
//                     }}
//                   />
//                 </View>
//               </ImageBackground>
//             </View>
//           </TouchableOpacity> */}
//           {/* <Text
//             style={{marginTop: 10, fontFamily: 'OpenSans-Bold', fontSize: 23}}>
//             {nama}
//           </Text> */}
//           {/* <Text>{user.uid}</Text> */}
//         </View>
//         {/* Biodata Textinput */}
//         <View style={styles.action}>
//           <FontAwesome name="user" color="black" size={24} />
//           <TextInput
//             value={nama}
//             onChangeText={text => setNama(text)}
//             placeholder="Name"
//             placeholderTextColor="#666666"
//             autoCorrect={false}
//             style={[styles.textInput, {color: 'black'}]}
//           />
//         </View>
//         <View style={styles.action}>
//           <FontAwesome name="phone" color="black" size={24} />
//           <TextInput
//             value={nomorHP}
//             onChangeText={text => setNomorHP(text)}
//             placeholder="Phone"
//             placeholderTextColor="#666666"
//             keyboardType="number-pad"
//             autoCorrect={false}
//             style={[styles.textInput, {color: 'black'}]}
//           />
//         </View>
//         <View style={styles.action}>
//           <Ionicons
//             name="location"
//             color="black"
//             size={22}
//             style={{marginLeft: -2}}
//           />
//           <TextInput
//             onChangeText={text => setLokasi(text)}
//             value={lokasi}
//             placeholder="Location"
//             placeholderTextColor="#666666"
//             keyboardType="email-address"
//             autoCorrect={false}
//             style={[styles.textInput, {color: 'black'}]}
//           />
//         </View>
//         <View style={styles.action}>
//           <FontAwesome name="envelope" color="black" size={22} />
//           <TextInput
//             onChangeText={text => setEmail(text)}
//             placeholder="Email"
//             placeholderTextColor="#666666"
//             keyboardType="email-address"
//             autoCorrect={false}
//             value={email}
//             style={[styles.textInput, {color: 'black'}]}
//           />
//         </View>
//         <View style={styles.action}>
//           <FontAwesome
//             name="motorcycle"
//             color="black"
//             size={24}
//             style={{marginLeft: -5}}
//           />
//           <TextInput
//             onChangeText={text => setMotor(text)}
//             placeholder="Motor"
//             placeholderTextColor="#666666"
//             autoCorrect={false}
//             style={[styles.textInput, {color: 'black'}]}
//             value={motor}
//           />
//         </View>
//         {/* Submit Button */}
//         <TouchableOpacity
//           style={styles.commandButton}
//           onPress={() => handleUpdate()}>
//           <Text style={styles.panelButtonTitle}>Update</Text>
//         </TouchableOpacity>
//       </Animated.View>
//     </View>
//   );
// };

// export default AccountSetting;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#FFF',
//   },
//   profileWrapper: {
//     height: 100,
//     width: 100,
//     borderRadius: 15,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   commandButton: {
//     padding: 15,
//     borderRadius: 10,
//     backgroundColor: '#1E4E5F',
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   panel: {
//     padding: 20,
//     backgroundColor: '#FFFFFF',
//     paddingTop: 20,
//   },
//   header: {
//     backgroundColor: '#FFFFFF',
//     shadowColor: '#333333',
//     shadowOffset: {width: -1, height: -3},
//     shadowRadius: 2,
//     shadowOpacity: 0.4,
//     // elevation: 5,
//     paddingTop: 20,
//     borderTopLeftRadius: 20,
//     borderTopRightRadius: 20,
//   },
//   panelHeader: {
//     alignItems: 'center',
//   },
//   panelHandle: {
//     width: 40,
//     height: 8,
//     borderRadius: 4,
//     backgroundColor: '#00000040',
//     marginBottom: 10,
//   },
//   panelTitle: {
//     fontSize: 27,
//     height: 35,
//   },
//   panelSubtitle: {
//     fontSize: 14,
//     color: 'gray',
//     height: 30,
//     marginBottom: 10,
//   },
//   panelButton: {
//     padding: 13,
//     borderRadius: 10,
//     backgroundColor: '#1E4E5F',
//     alignItems: 'center',
//     marginVertical: 7,
//   },
//   panelButtonTitle: {
//     fontSize: 17,
//     fontWeight: 'bold',
//     color: 'white',
//   },
//   action: {
//     flexDirection: 'row',
//     marginTop: 10,
//     // marginBottom: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#f2f2f2',
//     paddingBottom: -2,
//   },
//   actionError: {
//     flexDirection: 'row',
//     marginTop: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#FF0000',
//     paddingBottom: 5,
//   },
//   textInput: {
//     flex: 1,
//     marginTop: -10,
//     paddingLeft: 10,
//     color: '#05375a',
//     alignItems: 'center',
//     justifyContent: 'center',
//     fontFamily: 'OpenSans-Regular',
//     fontSize: 17,
//   },
// });
