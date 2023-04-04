import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Button, View } from 'react-native';

export default function PreScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.buttonsWrapper}>
        <View style={styles.buttonContainer}>
          <Button 
            title="Login"
            onPress={() => navigation.navigate("Login")}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button 
            title="Signup"
            onPress={() => navigation.navigate("Signup")}
          />
        </View>
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
  buttonsWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    marginBottom: 16, // adjust this value as needed
  },
});
