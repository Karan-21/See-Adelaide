import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../screens/LoginScreen';
import Register from '../components/Register';
import Login from '../components/Login';


const Stack = createStackNavigator();

function LoginScrNav() {
    return (
      // <NavigationContainer independent={true}>
        <Stack.Navigator initialRouteName='Register' screenOptions={{ headerShown: false }}>
        {/* <Stack.Navigator initialRouteName='Home_2' headerMode='none'> */}
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          {/* <Stack.Screen name="MapScreen" component={MapScreen} /> */}
        </Stack.Navigator>
      // </NavigationContainer>
    );
  }
  
  export default LoginScrNav;