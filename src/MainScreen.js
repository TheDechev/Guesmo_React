import React, { Component } from 'react';
import {Text, View } from 'react-native';
import { AppContainer } from './AppNavigator';
import Icon from 'react-native-vector-icons/Ionicons';
import { ProfileContainer } from './containers';

class MainScreen extends Component {
  static navigationOptions = {
    headerLeft: <Icon style={{paddingaLeft: 10}} name="ios-contact" size={22}
                  onPress={() => this.props.navigation.navigate('Profile')} />,
    title:'Guesmo?',
    headerRight: <Icon style={{paddingaRight: 10}} name="ios-search" size={22} />,
    headerStyle: {
      backgroundColor: '#48d1cc',
    }
  }
  render() {
    return (
      <AppContainer />
    );
  }
}

export { MainScreen };
