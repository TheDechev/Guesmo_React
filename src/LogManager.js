import AsyncStorage from '@react-native-community/async-storage';
import { GoogleSignin } from 'react-native-google-signin';
import firebase from 'firebase';
import { LoginManager } from 'react-native-fbsdk';


export const firebaseInit = () => {
    var firebaseConfig = {
        apiKey: "AIzaSyCLapg10XLGbVCY3gTac_KuiTsGJXZFmqQ",
        authDomain: "guesmo-435c0.firebaseapp.com",
        databaseURL: "https://guesmo-435c0.firebaseio.com",
        projectId: "guesmo-435c0",
        storageBucket: "guesmo-435c0.appspot.com",
        messagingSenderId: "549027192085"
    };

    if (!firebase.apps.length){
      firebase.initializeApp(firebaseConfig);
      console.log("initiialized firebase configuration");
    }
    else{
      firebase.app();
    }
}

export const handleLogin = (navigation) => {
    getCredentials(navigation);
}

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


export const getCredentials = (navigation) => {
    console.log("in cradentials login")
    try{
        AsyncStorage.getItem('facebookCredentials').then(
          (token) => {
            if (token){
              console.log("got facebook cred", token);
              navigation.replace("Dashboard");
            }
          });

          AsyncStorage.getItem('googleCredentials').then(
            (token) => {
              if (token){
              console.log("got google cred", token);
              navigation.replace("Dashboard");
              }
          });
      }
      catch (error){
        console.log("AsyncStorage error: ", error);
      }
}

const logoutFirebase = (navigation) => {
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
      .then(() => { navigation.replace("login");});
}

export const logoutFacebook = async (navigation) => {
    LoginManager.logOut();
    logoutFirebase(navigation);
    await AsyncStorage.removeItem('facebookCredentials')
      .then(() => { navigation.replace("login");});
}

/*======================================================================== */
/* These are used for login walkaround. DO NOT use in normal flow */
export const basicLogin = (navigation) => {
    console.log("in basic login")
    navigation.replace("Dashboard")
}

export const basicLogout = (navigation) => {
    console.log("in basic logout")
    navigation.replace("login")
}
/*======================================================================== */
/*======================================================================== */