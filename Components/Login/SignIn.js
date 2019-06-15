import React, { Component } from 'react';
import { StyleSheet, Text, View, Route, Alert, TextInput, KeyboardAvoidingView } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage, Input, Button } from 'react-native-elements'

export default class SignIn extends Component{
  render(){
  return (
    <KeyboardAvoidingView style={styles.container} behavior = "padding" enabled>
        <Input label = "Email Address" />
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