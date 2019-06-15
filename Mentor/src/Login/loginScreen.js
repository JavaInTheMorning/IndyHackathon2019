import React, { Component } from 'react'
import { KeyboardAvoidingView, StyleSheet, Alert} from 'react-native'
import { Input, Button } from 'react-native-elements';

export default class LoginScreen extends Component {
    state = {
        email: '',
        password: '',
    }
    setEmail = (email) => {
        this.setState({email: email})
    }
    setPassword = (password) => {
        this.setState({password: password})
    }
    static navigationOptions = {
        title: "Login",
        headerStyle: {
            backgroundColor: '#fff',
        },
    }        
    render() {
        return (
            <KeyboardAvoidingView style = {styles.container} behavior = "padding" enabled>
            <Input label='Email' onChangeText={this.setEmail}/>
            <Input label='Password' onChangeText={this.setPassword} secureTextEntry = {true}/>
            <Button style = {styles.button} title='Submit'
            onPress={() => {this.props.navigation.navigate('Home')}}
            ></Button>
        </KeyboardAvoidingView>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
       margin: 15,
       borderColor: '#fff',
       borderStyle: 'dashed'
    },
    submitButton: {
       backgroundColor: '#fff',
       padding: 10,
       margin: 15,
       height: 40,
    },
    submitButtonText:{
       color: 'white'
    }
})