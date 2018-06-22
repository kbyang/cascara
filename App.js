import React from 'react';
import {
  createStackNavigator,
} from 'react-navigation';

import HomeScreen from './src/HomeScreen'
import DetailScreen from './src/DetailScreen'

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}