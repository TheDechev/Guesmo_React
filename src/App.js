
import React, {Component} from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { HomeScreen, LoginScreen, ProfileScreen, GroupScreen, PostScreen } from './screens';
class App extends Component {

  // componentWillMount(){
  //   var config = {
  //       apiKey: "AIzaSyCLapg10XLGbVCY3gTac_KuiTsGJXZFmqQ",
  //       authDomain: "guesmo-435c0.firebaseapp.com",
  //       databaseURL: "https://guesmo-435c0.firebaseio.com",
  //       projectId: "guesmo-435c0",
  //       storageBucket: "guesmo-435c0.appspot.com",
  //       messagingSenderId: "549027192085"
  //   };

  //   firebase.initializeApp(config);
  //   console.log("initiialized firebase configuration");
  // }

  render() {
    return (
      <Apps/>
    );
  }
}

const AppStackNavigator = createStackNavigator({
  Login: {
    screen: LoginScreen
  },
  Home:{
    screen: HomeScreen
  },
  Profile:{
    screen: ProfileScreen
  },
  Group:{
    screen: GroupScreen
  },
  Post:{
    screen: PostScreen
  },
});

const Apps = createAppContainer(AppStackNavigator)

export default App;
