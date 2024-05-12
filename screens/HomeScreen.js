import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import VideoTile from '../components/VideoTile';

const HomeScreen = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPopularVideos();
  }, []);

  const fetchPopularVideos = async () => {
    try {
      const response = await fetch(
        'https://api.pexels.com/videos/popular?per_page=100&page=1',
        {
          headers: {
            Authorization: 'QLBoB87XwBWq4jyg2iI0gonCy9V3YCukZCWhu2Qx3rRN5BDd0B1TfKdW', // Add your Pexels API key here
          },
        }
      );
      const data = await response.json();
      setVideos(data.videos);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching popular videos:', error);
      setLoading(false);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{fontSize: 20, fontWeight: 500, padding: 10}}>Popular videos</Text>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={videos}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <VideoTile video={item} />}
        />
      )}
    </View>
  );
};

export default HomeScreen;
