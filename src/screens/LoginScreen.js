/*This is th Example of google Sign in*/
import { StyleSheet, View, Text } from 'react-native';
import React, {Component} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { GoogleButton, FacebookButton } from './../components';
import firebase from 'firebase';

class LoginScreen extends Component {

  state = { loggedGoogle: false, loggedFacebook: false  };

  getCredentials(){
    try{
      AsyncStorage.getItem('facebookCredentials').then(
        (token) => {
          if (token){
            console.log("got facebook cred", token);

            this.props.navigation.replace("Home");
          }
        });
        console.log("no facebook cred");

        AsyncStorage.getItem('googleCredentials').then(
          (token) => {
            if (token){
            console.log("got google cred", token);

              this.props.navigation.replace("Home");
            }
        });
        console.log("no google cred");
    }
    catch (error){
      console.log("asyncstorage error: ", error);
    }
  }

  componentDidMount(){
    console.log("component mounted");

    this.getCredentials();
  }

  componentWillMount(){
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

    // firebase.auth().onAuthStateChanged((user) => {
    //   if (user){
    //     console.log("user is logged in");
    //     this.props.navigation.navigate('Home')
    //   }
    //   else{
    //     console.log("user is NOT logged in");
    //   }
    // });
  }

  render() {
    return (
      <View style={styles.container}>
      <Text>Guesmo</Text>
        <GoogleButton
          loginCB={() =>
            {
              this.setState({loggedGoogle: true })
              this.props.navigation.replace("Home")
            }}
          logoutCB={() => {
              this.logoutGoogle()
              this.props.navigation.navigate('Login')
          }}
        />
        <FacebookButton
          loginCB={() =>
            {
              this.setState({loggedFacebook: true })
              this.props.navigation.replace("Home")
            }
          }
          logoutCB={() =>
            {
              this.setState({loggedFacebook: false })
              this.props.navigation.navigate('Login')
            }
        }
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    marginTop: 150,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
  },
});

export { LoginScreen };
