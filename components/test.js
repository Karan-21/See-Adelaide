// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import * as SignIn from './modules/googlesignin.js';

export default function App() {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => SignIn.googleSignIn()}><Text>Sign-in</Text></TouchableOpacity>
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
