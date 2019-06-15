import React, { Component } from 'react';
import { StyleSheet, Text, View, Route, Alert, Header, KeyboardAvoidingView } from 'react-native';
import { Input, Button } from 'react-native-elements'

export default class Register extends Component {
  render(){
  return (
    <KeyboardAvoidingView style={styles.container} behavior = "padding" enabled>
        <Input label = "Email Address" />
        <Input label = "Username" />
        <Input label = "Password" secureTextEntry = {true} />
        <Button title="Submit" onPress= {() => {this.props.navigation.navigate('MyDashboard')}} type="outline"></Button>
    </KeyboardAvoidingView>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});