import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Login from './pages/Login/';
import AuthLoadingScreen from './pages/AuthLoadingScreen';
import Main from './pages/Main';
/* import Users from './pages/Users';
import Works from './pages/Works';
import NewWork from './pages/NewWork';
import WorkTimeLine from './pages/WorkTimeLine'; */

const AppStack = createStackNavigator(
  {
    Main: {
      screen: Main,
      navigationOptions: {
        title: 'Menu',
        headerTitleAlign: 'center'
      }
    }
  },
  {
    defaultNavigationOptions: {
      headerBackTitleVisible: false,
      headerTintColor: '#FFF',
      headerStyle: {
        backgroundColor: '#2f3236'
      }
    }
  }
);

const AuthStack = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      title: 'Bem-vindo!',
      headerTitleAlign: 'center',
      headerTintColor: '#FFF',
      headerStyle: {
        backgroundColor: '#2f3236'
      }
    }
  }
});

const Routes = createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: AppStack,
      Auth: AuthStack
    },
    {
      initialRouteName: 'AuthLoading'
    }
  )
);

export default Routes;
