// import React, {Component} from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   Button,
//   TouchableOpacity,
//   ImageBackground,
//   TextInput,
//   TouchableOpacityBase,
//   Alert,
// } from 'react-native';
// import Firebase from '../../database/Firebase';
// import InputData from './InputData';
// import BottomSheet from 'reanimated-bottom-sheet';
// import Animated from 'react-native-reanimated';

// export default class EditProfileScreen extends Component {
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

//   onChangeText = (namaState, value) => {
//     this.setState({
//       [namaState]: value,
//     });
//   };

//   onSubmit = () => {
//     if (
//       this.state.nama &&
//       this.state.nomorHP &&
//       this.state.email &&
//       this.state.alamat &&
//       this.state.motor
//     ) {
//       const profilReferensi = Firebase.database().ref('Biodata');
//       const profile = {
//         nama: this.state.nama,
//         nomorHP: this.state.nomorHP,
//         email: this.state.email,
//         alamat: this.state.alamat,
//         motor: this.state.motor,
//       };
//       // Create Data to Firebase with push method
//       profilReferensi
//         .push(profile)
//         .then(data => {
//           alert('Sukses', 'Data tersimpan');
//         })
//         .catch(error => {
//           alert(error, ' Error saat menyimpan data');
//         });
//     } else {
//       alert('Biodata harus lengkap');
//     }
//   };

//   renderInner = () => (
//     <View style={styles.panel}>
//       <View style={{alignItems: 'center'}}>
//         <Text style={styles.panelTitle}>Upload Photo</Text>
//         <Text style={styles.panelSubtitle}>Choose Your Profile Picture</Text>
//       </View>
//       <TouchableOpacity
//         style={styles.panelButton}
//         onPress={() => alert('Clicked')}>
//         <Text style={styles.panelButtonTitle}>Take Photo</Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         style={styles.panelButton}
//         onPress={() => alert('Clicked')}>
//         <Text style={styles.panelButtonTitle}>Choose From Library</Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         style={styles.panelButton}
//         onPress={() => this.bs.current.snapTo(1)}>
//         <Text style={styles.panelButtonTitle}>Cancel</Text>
//       </TouchableOpacity>
//     </View>
//   );

//   renderHeader = () => (
//     <View style={styles.header}>
//       <View style={styles.panelHeader}>
//         <View style={styles.panelHandle} />
//       </View>
//     </View>
//   );

//   bs = React.createRef();
//   fall = new Animated.Value(1);

//   render() {
//     console.log(this.props);
//     return (
//       <View style={styles.container}>
//         <BottomSheet
//           ref={this.bs}
//           snapPoints={[330, 0]}
//           renderContent={this.renderInner}
//           renderHeader={this.renderHeader}
//           initialSnap={1}
//           callbackNode={this.fall}
//           enabledGestureInteraction={true}
//         />
//         <View style={{margin: 1, marginTop: 25}}>
//           <InputData
//             namaState="nama"
//             name="user"
//             size={20}
//             placeholder="Masukan nama"
//             value={this.state.nama}
//             onChangeText={this.onChangeText}
//           />
//           <InputData
//             namaState="nomorHP"
//             name="phone"
//             size={20}
//             placeholder="Masukan nomor HP"
//             value={this.state.nomorHP}
//             onChangeText={this.onChangeText}
//           />
//           <InputData
//             namaState="email"
//             name="envelope"
//             size={20}
//             placeholder="Masukan email"
//             value={this.state.email}
//             onChangeText={this.onChangeText}
//           />
//           <InputData
//             namaState="alamat"
//             name="map-marker"
//             size={20}
//             placeholder="Masukan alamat"
//             value={this.state.alamat}
//             onChangeText={this.onChangeText}
//           />
//           <InputData
//             namaState="motor"
//             name="motorcycle"
//             size={20}
//             placeholder="Masukan motor"
//             value={this.state.motor}
//             onChangeText={this.onChangeText}
//           />
//           <TouchableOpacity
//             style={styles.commandButton}
//             onPress={() => this.onSubmit()}>
//             <Text style={{fontFamily: 'OpenSans-Bold', fontSize: 20}}>
//               Submit
//             </Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   action: {
//     flexDirection: 'row',
//     marginTop: 3,
//     marginBottom: 0,
//     borderBottomWidth: 1,
//     borderBottomColor: '#f2f2f2',
//     paddingBottom: 0,
//     marginLeft: 10,
//   },
//   textInput: {
//     flex: 1,
//     marginTop: Platform.OS === 'ios' ? 0 : -12,
//     paddingLeft: 10,
//     color: '#05375a',
//     fontSize: 16,
//     fontFamily: 'OpenSans-Bold',
//   },
//   textInputArea: {
//     flex: 1,
//     marginTop: Platform.OS === 'ios' ? 0 : -12,
//     paddingLeft: 10,
//     color: '#05375a',
//     fontSize: 16,
//     fontFamily: 'OpenSans-Bold',
//     textAlignVertical: 'top',
//     padding: 10,
//   },
//   commandButton: {
//     padding: 10,
//     borderRadius: 10,
//     backgroundColor: '#009387',
//     alignItems: 'center',
//     marginTop: 10,
//     marginLeft: 7,
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
//   panel: {
//     padding: 20,
//     backgroundColor: '#FFFFFF',
//     paddingTop: 20,
//     // borderTopLeftRadius: 20,
//     // borderTopRightRadius: 20,
//     // shadowColor: '#000000',
//     // shadowOffset: {width: 0, height: 0},
//     // shadowRadius: 5,
//     // shadowOpacity: 0.4,
//   },
//   panelTitle: {
//     fontSize: 27,
//     height: 35,
//     fontFamily: 'OpenSans-SemiBold',
//   },
//   panelSubtitle: {
//     fontSize: 14,
//     color: 'gray',
//     height: 30,
//     marginBottom: 10,
//     fontFamily: 'OpenSans-SemiBold',
//   },
//   panelButton: {
//     padding: 13,
//     borderRadius: 10,
//     backgroundColor: '#FF6347',
//     alignItems: 'center',
//     marginVertical: 7,
//   },
// });
