import React, { Component } from 'react'
import { KeyboardAvoidingView, StyleSheet, Alert} from 'react-native'
import { Input, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
 
export default class SignUp extends Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        reEnterPassword: ''
    }
    setFirstName = (name) => {
        this.setState({firstName: name})
    }
    setLastName = (name) => {
        this.setState({lastName: name})
    }
    setEmail = (email) => {
        this.setState({email: email})
    }
    setPassword = (password) => {
        this.setState({password: password})
    }
    setReEnteredPassword = (password) => {
        this.setState({reEnterPassword: password})
    }
    
    static navigationOptions = {
        title: "SignUp",
        headerStyle: {
            backgroundColor: 'white',
        },
    }    
    render() {
        return (
                <KeyboardAvoidingView style = {styles.container} behavior = "padding" enabled>
                    <Input label='First Name' onChangeText={this.setFirstName}/>
                    <Input label='Last Name' onChangeText={this.setLastName}/>
                    <Input label='Email' onChangeText={this.setEmail}/>
                    <Input label='Password' onChangeText={this.setPassword} secureTextEntry = {true}/>
                    <Input label='Re-Enter Password' onChangeText={this.setReEnteredPassword} secureTextEntry = {true} />
                    <Button style = {styles.button} title='Submit'
                    onPress={() => {
                        if(this.state.password === this.state.reEnterPassword)
                        {
                            this.props.navigation.navigate('Home')
                        }
                        else
                        {
                            Alert.alert("Passwords Don't Match")
                        }
                    }

                    }></Button>
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
        backgroundColor: 'white'
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
       margin: 15,
       borderColor: 'white',
       borderStyle: 'dashed'
    },
    submitButton: {
       backgroundColor: 'white',
       padding: 10,
       margin: 15,
       height: 40,
    },
    submitButtonText:{
       color: 'white'
    }
})