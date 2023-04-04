import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function SleepTracking() {
  const [sleepTime, setSleepTime] = useState('');
  const [wakeTime, setWakeTime] = useState('');
  const [feedback, setFeedback] = useState('');

  const calculateSleep = () => {
    const sleep = parseFloat(sleepTime);
    const wake = parseFloat(wakeTime);

    if (isNaN(sleep) || isNaN(wake)) {
      setFeedback('Please enter valid times.');
      return;
    }

    let timeSlept = wake - sleep;
    if (timeSlept < 0) {
      timeSlept += 24;
    }

    if (timeSlept < 8) {
      const sleepNeeded = 8 - timeSlept;
      const sleepEarlier = sleep - sleepNeeded;

      setFeedback(
        `You should have slept ${sleepNeeded.toFixed(
          2
        )} hours earlier, at ${sleepEarlier.toFixed(2)}`
      );
    } else {
      setFeedback('You had a good night sleep!');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sleep Tracking</Text>
      <TextInput
        style={styles.input}
        value={sleepTime}
        onChangeText={setSleepTime}
        placeholder="Enter time you slept (0-24)"
        keyboardType="number-pad"
      />
      <TextInput
        style={styles.input}
        value={wakeTime}
        onChangeText={setWakeTime}
        placeholder="Enter time you woke up (0-24)"
        keyboardType="number-pad"
      />
      <TouchableOpacity style={styles.button} onPress={calculateSleep}>
        <Text style={styles.buttonText}>Calculate</Text>
      </TouchableOpacity>
      <Text style={styles.feedback}>{feedback}</Text>
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
  feedback: {
    fontSize: 18,
    marginTop: 10,
  },
});
