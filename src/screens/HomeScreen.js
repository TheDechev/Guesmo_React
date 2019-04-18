import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider as PaperProvider, Appbar  } from 'react-native-paper';

class HomeScreen extends Component {
    render() {
      return (
        <PaperProvider>
          <Appbar style={stylesAppBar.bottom}>
          <Appbar.Action icon="archive" onPress={() => this.props.navigation.navigate('Home')} />
          <Appbar.Action icon="mail" onPress={() => this.props.navigation.navigate('Profile')} />
          <Appbar.Action icon="label" onPress={() => this.props.navigation.navigate('Group')} />
          <Appbar.Action icon="delete" onPress={() => this.props.navigation.navigate('Post')} />
          </Appbar>
            <Text style={stylesAppBar.textStyle}>Home screen!</Text>
            <Text style={stylesAppBar.textStyle}>Use archive icon for 'HomeScreen'</Text>
            <Text style={stylesAppBar.textStyle}>Use mail icon for 'ProfileScreen'</Text>
            <Text style={stylesAppBar.textStyle}>Use label icon for 'GroupScreen'</Text>
            <Text style={stylesAppBar.textStyle}>Use delete icon for 'PostScreen'</Text>
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
