import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Button, View } from 'react-native';

export default function PreScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>FDM Wellbeing</Text>
      <Button 
        title="Login"
        onPress={() => navigation.navigate("Login")}
      />
       <Button 
        title="Signup"
        onPress={() => navigation.navigate("Signup")}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});