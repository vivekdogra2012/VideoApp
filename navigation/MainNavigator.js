import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import PlayerScreen from '../screens/PlayerScreen';
import SettingsScreen from '../screens/SettingsScreen';
import LoginScreen from '../screens/LoginScreen';
import { Ionicons } from '@expo/vector-icons';
import { useAuth } from '../context/AuthContext';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function MainNavigator() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Video App" component={TabNavigator} />
        <Stack.Screen name="Player" component={PlayerScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function TabNavigator() {
const { userToken } = useAuth();
  return (
    <Tab.Navigator>
        <Tab.Screen 
            name="All" 
            component={HomeScreen}    
            options= {{
                headerShown: false,
                tabBarLabel: 'Home',
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="home" color={color} size={size} />
                ),
            }}
        />
        <Tab.Screen 
            name="Search" 
            component={SearchScreen}    
            options= {{
                tabBarLabel: 'Search',
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="search" color={color} size={size} />
                ),
            }}
        />
        {userToken && (
        <Tab.Screen 
            name="Settings" 
            component={SettingsScreen} 
            options={{
                tabBarLabel: 'Settings',
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="settings" color={color} size={size} />
                ),
            }}
        /> 
        )}
    </Tab.Navigator>
  );
}
