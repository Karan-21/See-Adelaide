import React, {useEffect, useState} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import { NavigationContainer } from '@react-navigation/native';
import { Home } from '../screens/Home';
import Home_2 from '../screens/Home_2';
import { Detail } from '../screens/Detail';
import Detail_2 from '../screens/Detail_2';
import { DestinationDetail } from '../screens/DestinationDetail';
import MapScreen from '../components/MapScreen'
import LoginScreen from '../screens/LoginScreen';
import * as firebase from 'firebase' ;

const Stack = createStackNavigator();

function HomeNav() {
  const [state, setState] = useState(false) ;
  const [isLoading, setIsLoading] = useState(false) ;
  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((authUser) => {
        if (authUser) {
            setState(true) ;
        } 
        else {
            setState(false) ;
        }
    })
    console.log(state) ;
    return unsubscribe ;
}) ;
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {(state) ? (
            <>
            <Stack.Screen name="Home_2" component={Home_2} />
            <Stack.Screen name="Detail_2" component={Detail_2} />
            <Stack.Screen name="DestinationDetail" component={DestinationDetail} />
            <Stack.Screen name="MapScreen" component={MapScreen} />
            </>
          ) : (
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
          )}
        </Stack.Navigator>
    );
  }
  
  export default HomeNav;