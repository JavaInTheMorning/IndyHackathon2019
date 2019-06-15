import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Route, Alert, Header } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import SignIn from './Components/Login/SignIn';
import Register from './Components/Login/Register'
import Splash from './Components/Splash';
import Dashboard from './Components/Dashboard/Dashboard';
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
