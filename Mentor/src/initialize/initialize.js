import React, { Component } from 'react'
import { KeyboardAvoidingView, StyleSheet, Alert} from 'react-native'
import { Input, Button } from 'react-native-elements';

export default class InitializeScreen extends Component {
    signUp = () => {
        this.props.navigation.navigate('SignUp')
    }
    login = () => {
        this.props.navigation.navigate('Login')
    }
    static navigationOptions = {
        title: "Hackathon",
        headerStyle: {
            backgroundColor: '#fff',
        },
    }  
    render() {
        return (
            <KeyboardAvoidingView style = {styles.container} behavior = "padding" enabled>
            <Button label = "Create an Account: " style = {styles.button} title='SignUp'
            onPress={this.signUp}
            ></Button>
            <Button label = "Already Have An Account?" style = {styles.button} title='Login'
            onPress={this.login}
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