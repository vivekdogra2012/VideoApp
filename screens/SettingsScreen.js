import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../context/AuthContext';

const SettingsScreen = () => {
  const navigation = useNavigation();
  const { userDataAll, userToken, signOut } = useAuth();
  
  const handleLogout = () => {
    signOut();
    navigation.navigate('Home');
  };

  const handleLogin = ()=>{
    navigation.navigate('Login');
  };

  const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        textAlign: 'left',
    },
    margin: {
        fontSize: 20,
        marginBottom: 10,
    }
  });

  const imageUrl = userDataAll?.image ? userDataAll?.image : null;

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {
        userToken ? (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Image         
                    style={{ width: 300, height: 300, borderRadius: 8 }}
                    source={{ uri: imageUrl }}
                />
                <Text style={styles.text}>Name: {userDataAll.firstName} {userDataAll.lastName}</Text>
                <Text style={styles.margin} >Email: {userDataAll.email}</Text>
                <Button title="Logout" onPress={handleLogout} />
            </View>
        ) : (
            <Button title="Login" onPress={handleLogin} />
        )
      }
  
    </View>
  );
};

export default SettingsScreen;
