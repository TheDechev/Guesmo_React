
import React, {Component} from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { HomeScreen, LoginScreen, ProfileScreen, GroupScreen, PostScreen } from './screens';

class App extends Component {
  render() {
    return (
      <Apps/>
    );
  }
}

const AppStackNavigator = createStackNavigator({
  Login: {
    screen: HomeScreen
  },
  Home:{
    screen: LoginScreen
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
