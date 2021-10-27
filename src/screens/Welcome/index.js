// import React from 'react';
// import {
//   StyleSheet,
//   SafeAreaView,
//   Image,
//   Text,
//   View,
// } from 'react-native';
// import {useNavigation} from '@react-navigation/native';

// import {images} from '../../constants';
// import appTheme from '../../constants/theme';
// import {Button} from 'react-native-elements';
// import AuthButton from '../../components/AuthButton';

// const Welcome = () => {
//   const navigator = useNavigation();
//   return (
//     <SafeAreaView
//       style={{
//         flex: 1,
//         backgroundColor: appTheme.COLORS.mainBackground,
//       }}>
//       <View>
//         <View style={{alignItems: 'center'}}>
//           <Image
//             resizeMode="center"
//             width={200}
//             height={100}
//             source={images.AbInBev}
//           />
//         </View>
//         <View style={{alignItems: 'center'}}>
//           <Text style={{fontSize: 17}}>
//             Welcome to AbInBev Distributor Central
//           </Text>
//           <Text style={{fontSize: 17}}>Click the button below to continue</Text>
//         </View>
//       </View>

//       <View style={{alignItems: 'center', flex: 1, marginTop: 20}}>
//         <AuthButton
//           title="Continue"
//           Onpress={() => navigator.navigate('HomeScreen')}
//         />
//       </View>
//     </SafeAreaView>
//   );
// };

// export default Welcome;

// const styles = StyleSheet.create({});

// import React from 'react';
// import {ActivityIndicator, Platform, Alert} from 'react-native';
// import {LoginView} from 'ad-b2c-react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import appTheme from '../../constants/theme';

// export default class Login extends React.PureComponent {
//   static navigationOptions = {header: null};

//   constructor(props) {
//     super(props);
//     this.onLogin = this.onLogin.bind(this);
//     this.onFail = this.onFail.bind(this);
//     this.spinner = this.spinner.bind(this);
//   }

//   onLogin() {
//     const {navigation} = this.props;
//     navigation.navigate('App');
//   }

//   onFail(reason) {
//     Alert.alert(reason);
//   }

//   spinner() {
//     return (
//       <ActivityIndicator
//         color={Platform.OS === 'android' ? appTheme.COLORS.mainRed : undefined}
//         animating={true}
//         size="large"
//       />
//     );
//   }

//   render() {
//     return (
//       <LoginView
//         appId="myAppId"
//         redirectURI="myRedirectURI"
//         tenant="myTenant"
//         loginPolicy="B2C_1_SignUpSignIn"
//         passwordResetPolicy="B2C_1_PasswordReset"
//         profileEditPolicy="B2C_1_ProfileEdit"
//         onSuccess={this.onLogin}
//         onFail={this.onFail}
//         secureStore={AsyncStorage}
//         renderLoading={this.spinner}
//         scope="openid offline_access myScope1 myScope2 ...." //optional, but see the notes above
//       />
//     );
//   }
// }
