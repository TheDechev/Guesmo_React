import React, { Component } from 'react';
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import { NotificationsContainer, HomeContainer, LoginScreen, ProfileContainer, GroupContainer, PostScreen } from './containers';


const AppBottomTabNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeContainer,
    navigationOptions: {
      tabBarIcon:  ({ tintColor }) => (
          <Icon name="ios-home" size={22} />
        ),
    },
  },
  Groups:{
    screen: GroupContainer,
    navigationOptions: {
      tabBarIcon:  ({ tintColor }) => (
          <Icon name="ios-people" size={22} />
        ),
    },
  },
  Notifications:{
    screen: NotificationsContainer,
    navigationOptions: {
      tabBarIcon:  ({ tintColor }) => (
          <Icon name="ios-notifications-outline" size={22} />
        ),
    },
  },
  More:{
    screen: HomeContainer,
    navigationOptions: {
      tabBarIcon:  ({ tintColor }) => (
          <Icon name="ios-more" size={22} />
        ),
    },
  },
  }, {
    tabBarOptions : {
      showLabel: false,
        style: {
          justifyContent:'center',
          backgroundColor: '#48d1cc',
        },
      },
      tabBarPosition: 'bottom',
});


const AppContainer = createAppContainer(AppBottomTabNavigator)

export { AppBottomTabNavigator, AppContainer };
