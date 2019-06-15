import React, { Component } from 'react'
import { ScrollView, View, StyleSheet, Alert, Dimensions} from 'react-native'
import { Input, Button, ListItem, Avatar, Image, Text } from 'react-native-elements';
import house from './Housing.png';

export default class HomeScreen extends Component {
    static navigationOptions = {
        title: "Hello World",
        headerStyle: {
            backgroundColor: '#034'
        },
    }
    resources = [
        {
            step: 'Food',
            number: 'Step 1',
            image: house
        },
        {
            step: 'Housing',
            number: 'Step 2',
            image: house

        },
        {
            step: 'Housing',
            number: 'Step 2',
            image: house

        },
        {
            step: 'Housing',
            number: 'Step 2',
            image: house

        },
        {
            step: 'Housing',
            number: 'Step 2',
            image: house

        },
        {
            step: 'Housing',
            number: 'Step 2',
            image: house

        },
        {
            step: 'Housing',
            number: 'Step 2',
            image: house

        },
        {
            step: 'Housing',
            number: 'Step 2',
            image: house

        },
        {
            step: 'Housing',
            number: 'Step 2',
            image: house

        },
        {
            step: 'Housing',
            number: 'Step 2',
            image: house

        },
        {
            step: 'Housing',
            number: 'Step 2',
            image: house

        },
        {
            step: 'Housing',
            number: 'Step 2',
            image: house

        },
        {
            step: 'Housing',
            number: 'Step 2',
            image: house

        },
        {
            step: 'Housing',
            number: 'Step 2',
            image: house

        },
        {
            step: 'Employment',
            number: 'Step 3',
            image: house

        }        
    ]
    render() {
        return (
            <ScrollView contentContainerStyle = {styles.listView}>
           {
      this.resources.map((l, i) => (
      <View 
       style = {styles.card}
       key = {i}>
      
      <Text>{l.number}</Text>
      <Text>{l.step}</Text> 
      <Avatar
            style = {styles.avatar}
            rounded
            source = {l.image}
        onPress={()=>{this.props.navigation.navigate('Initialization')}}/>
      </View>
     ))
               }           
  </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: '#034'
    },
    listView: {
        flexDirection: 'row',
        flexWrap: 'wrap'
      },
      card: {
        width: (Dimensions.get('window').width / 2) - 15,
        height: 150,
        marginLeft: 10,
        marginTop: 10
      },
    button: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 100,
        overflow:'hidden'
        },
    input: {
       margin: 15,
       borderColor: '#000',
       borderStyle: 'dashed'
    },
    submitButton: {
       backgroundColor: '#000',
       padding: 10,
       margin: 15,
       height: 40,
    },
    submitButtonText:{
       color: 'white'
    }
})
