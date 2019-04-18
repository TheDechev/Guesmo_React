
import React, {Component} from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { HomeScreen, LoginScreen } from './src/screens';

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
});

const Apps = createAppContainer(AppStackNavigator)

export default App;
