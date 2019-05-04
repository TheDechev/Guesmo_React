import React, {Component} from 'react';
import { StyleSheet, Text } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { Provider as PaperProvider, Appbar  } from 'react-native-paper';
import { Button } from 'react-native-paper';
import { GoogleSignin } from 'react-native-google-signin';
import firebase from 'firebase';
import { LoginManager } from 'react-native-fbsdk';

class HomeScreen extends Component {

  logoutFirebase(){
    firebase.auth().signOut()
    .then(function() {
      // Sign-out successful.
    })
    .catch(function(error) {
      // An error happened
    });
  }

  handleLogout(){
    try{
      AsyncStorage.getItem('facebookCredentials').then(
        (token) => {
          if (token){
            console.log("got facebook cred in logout", token);
            this.logoutFacebook();
          }
        });

        AsyncStorage.getItem('googleCredentials').then(
          (token) => {
            if (token){
              console.log("got google cred in logout", token);
              this.logoutGoogle();
            }
        });
    }
    catch (error){
      console.log("asyncstorage error: ", error);
    }
  }

  async logoutGoogle()
  {
    GoogleSignin.revokeAccess();
    GoogleSignin.signOut();
    this.logoutFirebase();
    await AsyncStorage.removeItem('googleCredentials')
      .then(() => { this.props.navigation.replace("Login");});
  }

  async logoutFacebook()
  {
    LoginManager.logOut();
    this.logoutFirebase();
    await AsyncStorage.removeItem('facebookCredentials')
      .then(() => { this.props.navigation.replace("Login");});
  }

    render() {
      return (
        <PaperProvider>
          <Button onPress={() =>
            {
              this.handleLogout();
            }
          }>
            Logout
          </Button>
          <Appbar style={stylesAppBar.bottom}>
          <Appbar.Action icon="archive" onPress={() => this.props.navigation.navigate('Home')} />
          <Appbar.Action icon="mail" onPress={() => this.props.navigation.navigate('Profile')} />
          <Appbar.Action icon="label" onPress={() => this.props.navigation.navigate('Group')} />
          <Appbar.Action icon="delete" onPress={() => this.props.navigation.navigate('Post')} />
          </Appbar>
            <Text style={stylesAppBar.textStyle}>Home screen!</Text>
            <Text style={stylesAppBar.textStyle}>Use archive icon for 'HomeScreen'</Text>
            <Text style={stylesAppBar.textStyle}>Use mail icon for 'ProfileScreen'</Text>
            <Text style={stylesAppBar.textStyle}>Use label icon for 'GroupScreen'</Text>
            <Text style={stylesAppBar.textStyle}>Use delete icon for 'PostScreen'</Text>
        </PaperProvider>
      )
    }
}

export { HomeScreen };

const stylesAppBar = StyleSheet.create({
  bottom: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
  textStyle: {
    fontWeight:'bold',
    textAlign:'center',
    fontSize:20,
    marginBottom:10
  }
});
