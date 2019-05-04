
import React, {Component} from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { HomeScreen, LoginScreen, ProfileScreen, GroupScreen, PostScreen } from './screens';
import firebase from 'firebase';

class App extends Component {

  render() {
    return (
      <ScreensNavigation/>
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

const ScreensNavigation = createAppContainer(AppStackNavigator)

export default App;
