import React, {Component} from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import { StatusBar } from 'react-native';
import { MainScreen } from './MainScreen';

StatusBar.setBarStyle('light-content', true);

class App extends Component {
  render() {
    return (
      <Container />
    );
  }
}

const AppStackNavigator = createStackNavigator({
  Main: {
    screen: MainScreen
  }
})

const Container = createAppContainer(AppStackNavigator)
export default App;
