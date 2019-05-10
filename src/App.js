import React, {Component} from 'react';
import { createAppContainer } from 'react-navigation';
import { AppSwitchNavigator } from './AppNavigators';

export default class App extends Component {

  render() {
    return (
      <AppContainer />
    );
  }
}

const AppContainer = createAppContainer(AppSwitchNavigator);
