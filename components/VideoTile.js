import React from 'react';
import { View, Text, Image, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../context/AuthContext';



const VideoTile = ({ video }) => {

const { userToken } = useAuth();    

const navigation = useNavigation();

  if (!video) {
    return null; // If video is undefined, render nothing
  }

  const handlePlay = () => {
    // Handle play
    if (userToken) {
        navigation.navigate('Player', { video });
      } else {
        navigation.navigate('Login');
      }
  };

  const imageUrl = video?.image ? video.image : null;
  const userName = video?.user?.name ?? 'Unknown';

  return (
    <View style={{ marginBottom: 20, padding: 10 }}>
      {imageUrl && ( // Render image only if available
        <Image
          source={{ uri: imageUrl }}
          style={{ width: 300, height: 150, borderRadius: 8 }}
        />
      )}
      <View style={{ marginTop: 5 }}>
        <Text>User: {userName}</Text>
        <Button title='Play' onPress={handlePlay}/>
      </View>
    </View>
  );
};

export default VideoTile;
