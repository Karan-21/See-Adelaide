import * as Google from 'expo-google-app-auth';

// First- obtain access token from Expo's Google API

export const googleSignIn = async () => {
      const { type, accessToken, user } = await Google.logInAsync({
        androidClientId: '1028854562585-mmqdqdtqrit6e8e0a01sro57tkd9mob8.apps.googleusercontent.com',
        iosClientId: '1028854562585-9pmab1onorsna0i3ariuuab2pmoaakaq.apps.googleusercontent.com',
        scopes: ['profile', 'email'],
      });

      if (type === 'success') {
        // Then you can use the Google REST API
        // let userInfoResponse = await fetch('https://www.googleapis.com/userinfo/v2/me', {
        //   headers: { Authorization: `Bearer ${accessToken}` },
        // });
        //Test.testFunc();
        alert("success!");
        return;
      }
      else {
        alert("failed.");
        return;
      }
    }