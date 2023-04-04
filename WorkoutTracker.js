import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';

export default function WorkoutTracker() {
  const [exercise, setExercise] = useState('');
  const [reps, setReps] = useState('');
  const [sets, setSets] = useState('');
  const [workoutList, setWorkoutList] = useState([]);

  const handleAddExercise = () => {
    if (exercise && reps && sets) {
      setWorkoutList([
        ...workoutList,
        {
          id: exercise + Date.now(),
          name: exercise,
          reps,
          sets,
          date: new Date(),
        },
      ]);
      setExercise('');
      setReps('');
      setSets('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Track</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={exercise}
          onChangeText={setExercise}
          placeholder="Enter exercise"
        />
        <TextInput
          style={styles.input}
          value={reps}
          onChangeText={setReps}
          placeholder="Enter reps"
          keyboardType="number-pad"
        />
        <TextInput
          style={styles.input}
          value={sets}
          onChangeText={setSets}
          placeholder="Enter sets"
          keyboardType="number-pad"
        />
        <TouchableOpacity style={styles.button} onPress={handleAddExercise}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={workoutList}
        renderItem={({ item }) => (
          <View style={styles.exerciseBox} key={item.id}>
            <Text style={styles.listItem}>
              {item.name} - {item.reps} reps, {item.sets} sets - {item.date.toLocaleDateString()}
            </Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    width: '20em',
    borderRadius: 5,
    margin: 5,
  },
  button: {
    backgroundColor: 'blue',
    padding: 8,
    borderRadius: 5,
    margin: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  exerciseBox: {
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    padding: 10,
    marginVertical: 5,
    width: '20em',
  },
  listItem: {
    fontSize: 18,
    marginTop: 10,
  },
});
