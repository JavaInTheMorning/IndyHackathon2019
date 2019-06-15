import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Route, Alert, TextInput } from 'react-native';
import {Input } from 'react-native-elements'

export default function Resources(){
  return (
    <View style={styles.container}>
        <Text>Resources go here</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});