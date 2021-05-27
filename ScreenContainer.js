import { Text, View, SafeAreaView} from 'react-native';
import * as React from 'react';
import styles from './src/styles/screens.style';
import LoginScreen from './src/screens/LoginScreen';
import HomeNav from './src/navigations/HomeNav';
import LoginScrNav from './src/navigations/LoginScrNav' ;
import { Saved } from './src/screens/Saved';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

export function Notifications() {
  return (
    <View style={styles.container}>
      <Text>Notifications!</Text>
    </View>
  );
}

export function Profile() {
  return (
    <LoginScreen />
  );
}

const Tab = createMaterialBottomTabNavigator();

export function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="HomeNav"
      activeColor="black"
      inactiveColor="#b0acb0"
      barStyle={{ backgroundColor: 'white'}}
    >
      <Tab.Screen
        name="HomeNav"
        component={HomeNav}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Saved"
        component={Saved}
        options={{
          tabBarLabel: 'Saved',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="heart" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarLabel: 'Updates',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}