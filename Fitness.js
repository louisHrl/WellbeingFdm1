import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Button, View } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';

export default function Fitness({ navigation }) {
  return (
      <View style={styles.container}>
    
      <Text>Fitness</Text>
      
  

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