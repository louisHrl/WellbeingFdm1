import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Button, View } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';

export default function Fitness({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button
          title="Diet Tracking"
          onPress={() => navigation.navigate('DietTracking')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Workouts"
          onPress={() => navigation.navigate('Workouts')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Workout Tracker"
          onPress={() => navigation.navigate('WorkoutTracker')}
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
    width: '10em', // Set the desired width as a percentage of the screen width
    marginBottom: 20,
  },
});
