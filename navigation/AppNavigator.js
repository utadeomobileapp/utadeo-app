import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { HomeScreen } from '../containers/HomeScreen'
//import ScheduleScreen from '../containers/ScheduleScreen'
// TODO import global styles
//import styles from './Styles/NavigationStyles'

import MainTabNavigator from './MainTabNavigator';

export default createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    Main: MainTabNavigator
    //TODO add other screens
    /*,
    Schedule: { screen: ScheduleStack },
    Location: { screen: LocationScreen },
    About: { screen: AboutScreen }*/
  })
);
