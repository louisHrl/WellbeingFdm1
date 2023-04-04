import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  View,
  Linking,
  ScrollView,
} from 'react-native';

export default function Meditations() {
  const videoIds = [
    'pU80BEm43JM',
    'q5thMTntbOY',
    'Hzi3PDz1AWU',
    'thcEuMDWxoI',
    'F5378Ag9EjA',
    'YzRUEmqDJd8',
    'z6X5oEIg6Ak',
  ];

  const renderThumbnails = () => {
    return videoIds.map((videoId) => {
      const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;
      const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/0.jpg`;

      return (
        <TouchableOpacity
          key={videoId}
          onPress={() => {
            // Open YouTube video in a web browser
            Linking.openURL(videoUrl);
          }}
        >
          <Image
            style={styles.thumbnail}
            source={{ uri: thumbnailUrl }}
            resizeMode="cover"
          />
        </TouchableOpacity>
      );
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {renderThumbnails()}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#FFA500',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingHorizontal: 10,
      },
  thumbnail: {
    width: '20em',
    height: '10em',
    margin: 5,
  },
});
