import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { NotificationsContainer, HomeContainer, LoginScreen, ProfileContainer, GroupContainer, PostScreen } from './containers';
import { createBottomTabNavigator, createDrawerNavigator, createSwitchNavigator, createAppContainer, createStackNavigator } from 'react-navigation';
import { WelcomeScreen } from './WelcomeScreen';


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


const DashboardStackNavigator = createStackNavigator({
  DashboardTabNavigator: AppBottomTabNavigator
  },{
  defaultNavigationOptions:({navigation})=>{
    return{
      headerRight: <Icon name="md-menu" size={22}
                    onPress={()=>navigation.openDrawer()}/>,
      title:'Guesmo?',
      headerLeft: <Icon name="ios-contact" size={22}
                    onPress={()=>navigation.navigate('Groups')}/>,
      headerStyle: {
        backgroundColor: '#48d1cc',
      }
    }
  }
})

const AppDrawerNavigator = createDrawerNavigator({
  Dashboard: {
    screen: DashboardStackNavigator
  }

})

const AppSwitchNavigator = createSwitchNavigator({
  welcome: { screen: WelcomeScreen },
  Dashboard: { screen: AppDrawerNavigator }
})

const AppContainer = createAppContainer(AppBottomTabNavigator)

export { AppSwitchNavigator };
