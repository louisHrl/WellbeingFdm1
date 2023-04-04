import React from "react";
import { StyleSheet, Text, Button, View, ImageBackground } from "react-native";

export function HomeScreen({ navigation }) {
  return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
        <Button
          title="Fitness"
          onPress={() => navigation.navigate("Fitness")}
        />
        </View>
        <View style={styles.buttonContainer}>
        <Button
          title="Mind"
          onPress={() => navigation.navigate("Mind")}
        />
        </View>
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
    marginBottom: 16, // adjust this value as needed
  },
});

