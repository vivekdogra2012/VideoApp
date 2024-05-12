import React, { useContext, useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../context/AuthContext';

const LoginScreen = () => {
  const navigation = useNavigation();
  const { signIn } = useContext(AuthContext);
  const { userDataFunc } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    // Check for empty fields
    if (!username.trim() || !password.trim()) {
      Alert.alert('Login Error', 'Please fill in all fields.');
      return;
    }
    

    try {
      const response = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username,
          password,
          expiresInMins: 30, // optional, defaults to 60
        })
      });

      const data = await response.json();
      if (response.ok) {
        userDataFunc(data);
        signIn(data.token);
        navigation.navigate('All');
      } else {
        // Display error message
        Alert.alert('Login Failed', data.message);
      }
    } catch (error) {
      console.error('Error logging in:', error);
      // Display error message
      Alert.alert('Error', 'An error occurred while logging in. Please try again later.');
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 25 }}>Login</Text>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        style={{ borderWidth: 1, padding: 10, margin: 10, width: 200, borderRadius: 10 }}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{ borderWidth: 1, padding: 10, margin: 10, width: 200, borderRadius: 10 }}
      />
      <Button title="Log In" onPress={handleLogin} style={{ borderRadius: 20 }} />
    </View>
  );
};

export default LoginScreen;
