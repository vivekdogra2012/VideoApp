import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Video } from 'expo-av';

const PlayerScreen = ({ route }) => {
  const { video } = route.params;
  const videoUri = video?.video_files?.[1]?.link;
  return (
    <View style={styles.container}>
      <View style={styles.videoContainer}>
        {videoUri ? (
          <Video
            source={{ uri: videoUri }}
            style={styles.videoPlayer}
            useNativeControls
            resizeMode="contain"
            isMuted={false}
            shouldPlay
            isLooping
          />
        ) : (
          <Text>No video available</Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  videoContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  videoPlayer: {
    width: '100%',
    height: 500,
  },
});

export default PlayerScreen;
