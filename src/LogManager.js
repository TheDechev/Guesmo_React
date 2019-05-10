import AsyncStorage from '@react-native-community/async-storage';
import { GoogleSignin } from 'react-native-google-signin';
import firebase from 'firebase';
import { LoginManager } from 'react-native-fbsdk';


export const handleLogout = (navigation) => {
    try{
      AsyncStorage.getItem('facebookCredentials').then(
        (token) => {
          if (token){
            console.log("got facebook cred in logout", token);
            logoutFacebook(navigation);
          }
        });

        AsyncStorage.getItem('googleCredentials').then(
          (token) => {
            if (token){
              console.log("got google cred in logout", token);
              logoutGoogle(navigation);
            }
        });
    }
    catch (error){
      console.log("asyncstorage error: ", error);
    }
  }

  export const logoutFirebase = (navigation) => {
    firebase.auth().signOut()
    .then(function() {
      // Sign-out successful.
    })
    .catch(function(error) {
      // An error happened
    });
  }

  export const logoutGoogle = async (navigation) => {
    GoogleSignin.revokeAccess();
    GoogleSignin.signOut();
    logoutFirebase(navigation);
    await AsyncStorage.removeItem('googleCredentials')
      .then(() => { navigation.navigation.replace("login");});
  }

  export const logoutFacebook = async (navigation) => {
    LoginManager.logOut();
    logoutFirebase(navigation);
    await AsyncStorage.removeItem('facebookCredentials')
      .then(() => { navigation.navigation.replace("login");});
  }