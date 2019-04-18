
import React, {Component} from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';

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
