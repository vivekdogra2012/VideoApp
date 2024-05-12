import React, { useState } from 'react';
import { View, TextInput, FlatList, Text, ActivityIndicator, StyleSheet } from 'react-native';
import VideoTile from '../components/VideoTile';
import _ from 'lodash';

const API_KEY = 'QLBoB87XwBWq4jyg2iI0gonCy9V3YCukZCWhu2Qx3rRN5BDd0B1TfKdW'; // Replace with your Pexels API key
const BASE_URL = 'https://api.pexels.com/videos/search';

const SearchScreen = () => {
  const [query, setQuery] = useState('');
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchVideos = async (text) => {
    try {
      setLoading(true);
      const response = await fetch(`${BASE_URL}?query=${encodeURIComponent(text)}`, {
        headers: {
          Authorization: API_KEY,
        },
      });
      const data = await response.json();
      setVideos(data.videos);
    } catch (error) {
      console.error('Error fetching videos:', error);
    } finally {
      setLoading(false);
    }
  };

  const debouncedSearchVideos = _.debounce(searchVideos, 500);

  const handleSearch = (text) => {
    setQuery(text);
    if (text.trim() <= 1) {
      // If search string is empty, clear videos and reset loading state
      setVideos([]);
      setLoading(false);
      return;
    }
    debouncedSearchVideos(text);
  };  
  

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search videos"
        style={styles.input}
        value={query}
        onChangeText={(text)=>handleSearch(text)}
      />
      {loading ? (
        <ActivityIndicator size="large" color="blue" style={styles.loader} />
      ) : videos.length > 0 ? (
        <FlatList
          data={videos}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.videoItem}>
                <VideoTile video={item} />
            </View>
          )}
        />
      ) : (
        <Text>Enter Text To Search Videos!!!</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  loader: {
    marginTop: 20,
  },
  videoItem: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
});

export default SearchScreen;
