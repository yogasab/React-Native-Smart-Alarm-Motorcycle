// import React from 'react';
// import {StyleSheet, Text, View, TextInput} from 'react-native';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';

// const InputData = ({
//   placeholder,
//   keyboardType,
//   onChangeText,
//   namaState,
//   value,
//   name,
//   size,
// }) => {
//   console.log(value);
//   return (
//     <>
//       <View style={styles.action}>
//         <FontAwesome name={name} size={size} />
//         <TextInput
//           placeholder={placeholder}
//           placeholderTextColor="#666666"
//           keyboardType={keyboardType}
//           style={styles.textInput}
//           value={value}
//           onChangeText={item => onChangeText(namaState, item)}
//         />
//       </View>
//     </>
//   );
// };

// export default InputData;

// const styles = StyleSheet.create({
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
// });
