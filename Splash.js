import React, { Component } from 'react';
import { StyleSheet, Text, View, Route, Alert, TextInput } from 'react-native';
import { Button, Header, Icon } from 'react-native-elements'


export default class Splash extends Component{
  render(){
    return (
    <View style={styles.container}>
    <Header></Header>
      <Button title="Register" color='green' onPress = {() => {this.props.navigation.navigate('Registration')}} type="outline"></Button>
      <Button title="Log In" color='green' onPress = {() => {this.props.navigation.navigate('SignInPage')}} type="outline"></Button>
    </View>
  );
    }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});