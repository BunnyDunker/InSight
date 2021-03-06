import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  TouchableOpacity,
} from 'react-native';
import CourseScreen from './src/views/Course';
import Login from './src/views/Login';
import MapScreen from './src/views/Map';
import ProfileScreen from './src/views/Profile';
import ToolsScreen from './src/views/Tools';
import QuizScreen from './src/views/Quiz';
import LoanScreen from './src/views/Loan';
import Colors from './src/constants/Colors';

// This is the entry point for Expo! We cann't move this file - so instead,
// we are using it to return the rest of our app views.
export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

// This is our navigation router, these are the pages names, and the screens.
const CourseNavigator = createStackNavigator(
  {
    Map: {
      screen: MapScreen,
      navigationOptions: ({ navigation }) => ({
        headerTitle: 'Map',
        headerTitleStyle: {
          fontSize: 30,
          fontWeight: 'normal',
        },
        headerStyle: {
          backgroundColor: Colors.secondary,
        },
        headerTintColor: '#fff',
        headerLeft: (
          <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
            <Icon
              name="bars"
              style={{
                color: 'white',
                padding: 10,
                marginLeft: 10,
                fontSize: 20,
              }}
            />
          </TouchableOpacity>
        ),
      }),
    },
    Course: {
      screen: CourseScreen,
      navigationOptions: ({ navigation }) => ({
        headerTitle: `${navigation.state.params.name}`,
        headerTitleStyle: {
          fontSize: 30,
          fontWeight: 'normal',
        },
        headerStyle: {
          backgroundColor: Colors.secondary,
        },
        headerTintColor: '#fff',
      }),
    },
    Quiz: {
      screen: QuizScreen,
      navigationOptions: ({ navigation }) => ({
        headerTitle: 'Quiz',
        headerTitleStyle: {
          fontSize: 30,
          fontWeight: 'normal',
        },
        headerStyle: {
          backgroundColor: Colors.secondary,
        },
        headerTintColor: '#fff',
      }),
    },
  },
  {
    initialRouteName: 'Map',
    headerLayoutPreset: 'center',
  },
);

const AppNavigator = createDrawerNavigator(
  {
    Main: Login,
    Profile: ProfileScreen,
    Map: CourseNavigator,
    'Budget Tool': ToolsScreen,
    'Loan Tool': LoanScreen,
  },
  {
    initialRouteName: 'Main',
  },
);

const AppStack = createStackNavigator({ Home: Login });
const AuthStack = createStackNavigator({ Home: Login });

const AppLogin = createSwitchNavigator(
  {
    AuthLoading: AppStack,
    Login: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  },
);

const AppContainer = createAppContainer(AppNavigator, AppLogin);
