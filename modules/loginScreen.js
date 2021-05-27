import React from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import styles from './loginScreen.style.js'
import * as SignIn from './googlesignin.js';

export default class LoginScreen extends React.Component{
  state={
    email:"",
    password:""
  }
  render() {
      return (
      <View style={styles.container}>
          <Text style={styles.logo}>SeeAdelaide</Text>
          <View style={styles.inputView}>
              <TextInput
                  style={styles.inputText}
                  placeholder="Email..."
                  placeholderTextColor="#003f5c"
                  onChangeText={text => this.setState({ email: text })} />
          </View>
          <View style={styles.inputView}>
              <TextInput
                  secureTextEntry
                  style={styles.inputText}
                  placeholder="Password..."
                  placeholderTextColor="#003f5c"
                  onChangeText={text => this.setState({ password: text })} />
          </View>
          <TouchableOpacity>
              <Text style={styles.forgot}>Forgot Password?</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.loginBtn} onPress={() => SignIn.googleSignIn()}>
              <Text style={styles.loginText}>LOGIN</Text>
          </TouchableOpacity>
          <TouchableOpacity>
              <Text style={styles.loginText}>Signup</Text>
          </TouchableOpacity>


      </View>
      );
  };
}
