import { StyleSheet, View } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import React, {Component} from 'react';
import firebase from 'firebase';
import { GoogleSignin, GoogleSigninButton, statusCodes } from 'react-native-google-signin';

class GoogleButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: '',
      isLoggedIn: false
    };
  }

  handleLogin (){
		if (this.props.loginCB)
			this.props.loginCB();
	};

	handleLogout (){
		if (this.props.logoutCB)
			this.props.logoutCB();
  };

  componentDidMount() {
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'],
      webClientId:
        '549027192085-kf4f2j7oa7msqc286pufeqp6cifrhd3t.apps.googleusercontent.com',
    });
  }
  signIn = async () => {
    //Prompts a modal to let the user sign in into your application.
    try {
      console.log('before Signing In');

      await GoogleSignin.hasPlayServices({
        //Check if device has Google Play Services installed.
        //Always resolves to true on iOS.
        showPlayServicesUpdateDialog: true,
      });
      const userInfo = await GoogleSignin.signIn()
        .then((userProp) => {
            this.setState({ userInfo: userInfo, isLoggedIn: true })
            this.googleLogin(userProp);
          });
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('User Cancelled the Login Flow');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('Signing In');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('Play Services Not Available or Outdated');
      } else {
        console.log('Unknown error - ', error.message);
      }
    }
  };

  googleLogin = (userProp) => {
    console.log('User Props --> ', userProp);
    const credentials = firebase.auth.GoogleAuthProvider.credential(userProp.idToken, userProp.accessToken);
    firebase.auth().signInAndRetrieveDataWithCredential(credentials);
		AsyncStorage.setItem('googleCredentials',JSON.stringify(credentials));
    this.handleLogin();
  };

  signOut = async () => {
    //Remove user session from the device.
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      this.setState({ userInfo: null, isLoggedIn: false });
		  AsyncStorage.removeItem('googleCredentials');
      this.handleLogout();
    } catch (error) {
      console.error(error);
    }
  };

  buttonPress = async () => {
    if (this.state.isLoggedIn){
      console.log('user logged in, going to sign out');
      this.signOut();
    }
    else{
      console.log('user not logged in, going to sign');
      this.signIn();
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <GoogleSigninButton
          style={{ width: 312, height: 48 }}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Light}
          onPress={this.buttonPress}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    marginTop: 25,
    marginBottom: 25,
  },
});

export { GoogleButton };
