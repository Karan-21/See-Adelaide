import React, {useState, useEffect} from 'react' ;
import { StyleSheet, Text, View, KeyboardAvoidingView } from 'react-native' ;
import { Button, Input, Image } from 'react-native-elements' ;
import { StatusBar } from 'expo-status-bar' ;
import * as firebase from 'firebase' ;
import * as SignIn from '../components/GoogleSignIn.js';

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState("") ;
    const [password, setPassword] = useState("") ;

    const signIn = () => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((result) => {
                console.log(result)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const signUp = () => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((result) => {
                firebase.firestore().collection("users")
                    .doc(firebase.auth().currentUser.uid)
                    .set({
                        email
                    })
                console.log(result)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style = {{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'white'}} >
            <Image
                source={require('../images/onboarding_image.jpg')}
                style = {{width: 250, height: 250}}
            />
            <Input 
                placeholder="Email" 
                type="email" 
                value={email}
                containerStyle = {{width: 300}}
                onChangeText={(text) => setEmail(text)}
            />
            <Input 
                placeholder="Password" 
                secureTextEntry 
                type="password" 
                value={password}
                containerStyle = {{width: 300}}
                onChangeText={(text) => setPassword(text)}
            />
            
            <Button containerStyle={{width: 250}} onPress={signIn} title="Login" />
            <Button containerStyle={{width: 250}} onPress={signUp} type="outline" title="Register" />
            <Button containerStyle={{width: 250, marginTop: 20, marginBottom: 10}} onPress={() => SignIn.googleSignIn()} type="outline" title="Sign in with Google" />

            <View style={{height: 100}} />
        </KeyboardAvoidingView>
    )
}

export default LoginScreen ;