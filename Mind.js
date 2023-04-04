import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Button, View } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';

export default function Mind({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button
          title="Consult"
          onPress={() => navigation.navigate('Consult')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Sleep Tracking"
          onPress={() => navigation.navigate('SleepTracking')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Meditations"
          onPress={() => navigation.navigate('Meditations')}
        />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFA500',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    width: '10em',
    marginBottom: 20,
  },
});

