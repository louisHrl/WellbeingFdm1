import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Button, View } from 'react-native';

export  function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
  
        <Text>FDM Wellbeing</Text>
 
        <Button 
          title='Fitness'
          onPress={() => navigation.navigate("Fitness")}
        />
        <Button 
          title='Mind'
          onPress={() => navigation.navigate("Mind")}
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