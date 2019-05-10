import React, {Component} from 'react';
import { createAppContainer } from 'react-navigation';
import { MainStackNavigator } from './AppNavigators';
import { Provider as PaperProvider } from 'react-native-paper';

export default class App extends Component {

  render() {
    return (
      <PaperProvider>
          <MainApp />
      </PaperProvider>
    );
  }
}

const MainApp = createAppContainer(MainStackNavigator);
