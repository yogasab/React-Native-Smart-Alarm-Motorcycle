// import React, {useEffect, useState, Component} from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   SafeAreaView,
//   TouchableOpacity,
// } from 'react-native';
// import {Avatar, Caption, Title} from 'react-native-paper';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import Firebase from '../../database/Firebase';

// export default class ProfileScreen extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       nama: '',
//       nomorHP: '',
//       email: '',
//       alamat: '',
//       motor: '',
//     };
//   }

//   componentDidMount() {
//     Firebase.database()
//       .ref('Biodata')
//       .once('value', querySnapshot => {
//         let data = querySnapshot.val() ? querySnapshot.val() : {};
//         let biodataItem = {...data};
//         this.setState({
//           nama: biodataItem,
//           nomorHP: biodataItem,
//           email: biodataItem,
//           alamat: biodataItem,
//           motor: biodataItem,
//         });
//       });
//   }

//   render() {
//     return (
//       <SafeAreaView style={styles.container}>
//         <>
//           <View style={styles.userInfoSection}>
//             <View
//               style={{marginTop: 15, marginLeft: -10, flexDirection: 'row'}}>
//               <View style={{marginLeft: 20, marginTop: 10}}>
//                 <Title style={styles.title}>Yoga Baskoro</Title>
//                 <Caption style={styles.caption}>Honda Vario</Caption>
//               </View>
//             </View>
//           </View>
//           <View style={styles.userInfoSection}>
//             <View style={styles.row}>
//               <Icon name="map-marker-radius" color="#777777" size={20} />
//               <Text style={{color: '#777777', marginLeft: 15}}>Jakarta</Text>
//             </View>
//             <View style={styles.row}>
//               <Icon name="phone" color="#777777" size={20} />
//               <Text style={{color: '#777777', marginLeft: 15}}>0895</Text>
//             </View>
//             <View style={styles.row}>
//               <Icon name="email" color="#777777" size={20} />
//               <Text style={{color: '#777777', marginLeft: 15}}>
//                 baskoroyoga40@gmail.com
//               </Text>
//             </View>
//           </View>

//           <View style={styles.logOutContainer}>
//             <TouchableOpacity onPress={() => logout()}>
//               <View style={styles.wrapperButton}>
//                 <Text style={styles.text}>Logout</Text>
//               </View>
//             </TouchableOpacity>
//           </View>
//         </>
//       </SafeAreaView>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   userInfoSection: {
//     paddingHorizontal: 30,
//     marginBottom: 25,
//   },
//   title: {
//     fontSize: 24,
//     fontFamily: 'OpenSans-Bold',
//   },
//   caption: {
//     fontSize: 16,
//     fontFamily: 'OpenSans-Bold',
//     lineHeight: 19,
//   },
//   row: {
//     flexDirection: 'row',
//     marginBottom: 10,
//   },
//   wrapperButton: {
//     marginTop: 20,
//     height: 100,
//     width: 100,
//     backgroundColor: 'red',
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderRadius: 50,
//   },
//   text: {fontFamily: 'OpenSans-Bold'},
//   logOutContainer: {
//     alignItems: 'center',
//   },
// });
