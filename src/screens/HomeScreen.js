import React, {Component} from 'react';
import { StyleSheet, Text } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { Button } from 'react-native-paper';

class HomeScreen extends Component {

    render() {
      return (
        <PaperProvider>
          <Button onPress={() =>
            {
              this.handleLogout();
            }
          }>
            Logout
          </Button>
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
  textStyle: {
    fontWeight:'bold',
    textAlign:'center',
    fontSize:20,
    marginBottom:10
  }
});
