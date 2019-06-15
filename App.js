import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Route, Alert, Header } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import SignIn from './SignIn';
import Register from './Register'
import Splash from './Splash';
import Dashboard from './Dashboard';
import Resources from './Resources';
import Sidebar from './Sidebar';


export default createAppContainer(createStackNavigator({
  Home: Splash,
  Registration: Register,
  SignInPage: SignIn,
  MyDashboard: Dashboard,
  MyResources: Resources,
  HamburgerMenu: Sidebar,
},{

}));

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
