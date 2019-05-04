/*This is an Example of Facebook Login*/
import React, { Component } from 'react';
import { View,StyleSheet } from 'react-native';
import { LoginButton, AccessToken, LoginManager } from 'react-native-fbsdk';
import AsyncStorage from '@react-native-community/async-storage';

import firebase from 'firebase';

class FacebookButton extends Component {
	constructor(props) {
		super(props);
		this.state = {
			userInfo: '',
			isLoggedIn: false,
		};
	}

	handleLogin (credentials){
		console.log('in handle login');
		firebase.auth().signInAndRetrieveDataWithCredential(credentials);
		isLoggedIn = true;
		AsyncStorage.setItem('facebookCredentials',JSON.stringify(credentials));

		if (this.props.loginCB){
			console.log('callback exists');
			this.props.loginCB();
		}
	};

	handleLogout (){
		console.log('in handle logout');
		AsyncStorage.removeItem('facebookCredentials');
		LoginManager.logOut();

		if (this.props.logoutCB){
			console.log('callback exists');
			this.props.logoutCB();
		}
	};

  	render() {
	return (
		<View style={styles.container}>
			<LoginButton
			data-use-continue-as="true"
			readPermissions={['public_profile', 'email']}
			style={{ width: 305, height: 40 }}
			onLoginFinished={
				(error, result) => {
				if (error) {
					console.log('login has error: ' + result.error);
				} else if (result.isCancelled) {
					console.log('login is cancelled.');
				} else { // Successfully logged in
					AccessToken.getCurrentAccessToken().then(
					(data) => {
						// console.log(data.accessToken.toString());
						const credentials = firebase.auth.FacebookAuthProvider.credential(data.accessToken.toString());
						this.handleLogin(credentials);
					}
					);
				}
				}
			}

			onLogoutFinished={() => this.handleLogout()}
			/>

		</View>
		);
  }
}
const styles = StyleSheet.create({
  container: {
	flex: 1,
	marginTop: 25,
	marginBottom: 25,
  },
});

export { FacebookButton };