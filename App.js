import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import AccountScreen from './src/screens/account/AccountScreen';
import SigninScreen from './src/screens/sign/SigninScreen';
import SignupScreen from './src/screens/sign/SingupScreen';
import TrackCreateScreen from './src/screens/track/TrackCreateScreen';
import TrackDetailScreen from './src/screens/track/TrackDetailScreen';
import TrackListScreen from './src/screens/track/TrackListScreen';
import {Provider as AuthProvider} from './src/context/AuthContext';
import {setNavigator} from './src/navigationRef';
import ResovleAuthScreen from './src/screens/ResovleAuthScreen';

const switchNavigator = createSwitchNavigator({
  ResovleAuth: {
    screen: ResovleAuthScreen,
  },
  loginFlow: createStackNavigator({
    Signup: {
      screen: SignupScreen,
    },
    Signin: {
      screen: SigninScreen,
    },
  }),
  mainFlow: createBottomTabNavigator({
    trackListFlow: createStackNavigator({
      TrackList: {
        screen: TrackListScreen,
      },
      TrackDetail: {
        screen: TrackDetailScreen,
      },
    }),
    TracCreate: {
      screen: TrackCreateScreen,
    },
    Account: {
      screen: AccountScreen,
    },
  }),
});

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <AuthProvider>
      <App ref={navigator => setNavigator(navigator)} />
    </AuthProvider>
  );
};
