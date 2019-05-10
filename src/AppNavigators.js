import React from 'react';
import { View, SafeAreaView, Button} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { NotificationsContainer, LoginContainer, GroupContainer } from './containers';
import { createBottomTabNavigator, createDrawerNavigator, createStackNavigator } from 'react-navigation';
import { LoginScreen, HomeScreen } from './screens';
import * as logManager from './LogManager';


const AppBottomTabNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeScreen,
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
    screen: LoginContainer,
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


const DashboardStackNavigator = createStackNavigator(
  {
    DashboardTabNavigator: AppBottomTabNavigator
  },
  {
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
  }
)

const AppDrawerNavigator = createDrawerNavigator(
  {
    Dashboard: {
      screen: DashboardStackNavigator
    }
  },
  {
    contentComponent:(props) => (
        <View style={{flex:1}}>
            <SafeAreaView forceInset={{ top: 'always', horizontal: 'never' }}>
                <Button title="Logout" onPress={() => logManager.handleLogout(props.navigation)}/>
                <Button title="Fake Logout" onPress={() => logManager.basicLogout(props.navigation)}/>
            </SafeAreaView>
        </View>
    ),
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle'
  }
)

const MainStackNavigator = createStackNavigator({
  login: { screen: LoginScreen },
  Dashboard: { screen: AppDrawerNavigator }
})

export { MainStackNavigator };
