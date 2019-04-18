import React, {Component} from 'react';
import { StyleSheet, Text} from 'react-native';
import { Provider as PaperProvider, Appbar  } from 'react-native-paper';

class HomeScreen extends Component {
    render() {
      return (
        <PaperProvider>
          <Appbar style={stylesAppBar.bottom}>
          <Appbar.Action icon="archive" onPress={() => console.log('Pressed archive')} />
          <Appbar.Action icon="mail" onPress={() => console.log('Pressed mail')} />
          <Appbar.Action icon="label" onPress={() => console.log('Pressed label')} />
          <Appbar.Action icon="delete" onPress={() => this.props.navigation.navigate('Home')} />
          </Appbar>
          <Text>Hey Screen 2!</Text>
        </PaperProvider>
      )
    }
}

export { HomeScreen };

const stylesAppBar = StyleSheet.create({
bottom: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
},
});
