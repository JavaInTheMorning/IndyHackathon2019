import React, { Component } from 'react';
import { StyleSheet, Text, View, Route, Alert, TextInput } from 'react-native';
import {Input, Button, Header, Icon } from 'react-native-elements';
import { bindActionCreators } from 'redux';
import { getTracks } from '../../api/tracks';


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header:{
    backgroundColor: '#fff',
    alignItems: 'center',
  }
});


export default class Dashboard extends Component{
  render(){

  return (
    <View>
       
    </View>
  );
  }
}



const mapStateToProps = ({ tracks }) => {
  return {
    tracks: tracks.tracks,
  };
};

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    getTracks,
  },
  dispatch,
);

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
