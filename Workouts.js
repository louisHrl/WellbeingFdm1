import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Linking,
} from 'react-native';

export default function Workouts() {
  const videoIds = [
    'NsEbXsTwas8',
    'qVek72z3F1U',
    'OPEDjl88P-4',
    'roHQ3F7d9YQ',
    'crPb62o-z_E',
    'PAXkl-AdJFg',
    'x4YNi4nRboU',
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

  return <ScrollView
  contentContainerStyle={styles.container}
  showsVerticalScrollIndicator={false}
>
  {renderThumbnails()}
</ScrollView>
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
