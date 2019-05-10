/*This is th Example of google Sign in*/
import { StyleSheet, View } from 'react-native';
import React, {Component} from 'react';
import { GoogleButton, FacebookButton } from './../components';
import { withNavigation } from 'react-navigation';
import * as logManager from './../LogManager';
import { Headline, Button } from 'react-native-paper';


class LoginScreenA extends Component {

  componentDidMount() {
    logManager.handleLogin(this.props.navigation);
  }

  componentWillMount(){
    logManager.firebaseInit();
  }

  render() {
    return (
      <View style = {styles.parentViewStyle}>
        <Button
          style = {styles.buttonStyle}
          onPress = {() => logManager.basicLogin(this.props.navigation)}>
            Fake Login
        </Button>

        <Headline style={styles.headlineStyle}>
          Guesmo
        </Headline>

        <View style={styles.loginButtonsStyle}>
            <GoogleButton
              loginCB={() => logManager.basicLogin(this.props.navigation)}
              logoutCB={() => logManager.logoutGoogle(this.props.navigation)}
            />
            <FacebookButton
              loginCB={() => logManager.basicLogin(this.props.navigation)}
              logoutCB={() => logManager.logoutFacebook(this.props.navigation)}
            />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  parentViewStyle:{
    height: 400
  },
  buttonStyle:{
    flex: 1,
    alignSelf: 'flex-end',
    right: 0
  },
  headlineStyle: {
    marginTop: 50,
    paddingLeft: 155,
  },
  loginButtonsStyle: {
    alignItems: 'center',
    marginTop: 150,
    flexDirection: 'column',
  },
});

const LoginScreen = withNavigation(LoginScreenA);
export { LoginScreen };
