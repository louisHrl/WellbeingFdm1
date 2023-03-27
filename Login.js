import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import { StackActions } from '@react-navigation/native';

export default function Login({ navigation, route }) {

  return (
    <View style={styles.container}>
      <Text>Username</Text>
      <TextInput style={styles.input}
      />

      <Text>Password</Text>
      <TextInput style={styles.input}
      />

      <Button 
        title='Login'
        onPress={() => navigation.navigate("HomeScreen")}
      />
      <Button 
        title='Go to Signup'
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
  input:{
    borderWidth: 1,
    borderColor: '#777',
    padding: 4,
    margin: 15,
    width: 250,
  }

});