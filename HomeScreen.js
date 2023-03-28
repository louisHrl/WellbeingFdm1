import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Button, View } from 'react-native';


export  function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
  
        <Text style={styles.Text}>FDM Wellbeing</Text>

        
 
        <Button style={styles.button1} 
          title='Fitness'
          onPress={() => navigation.navigate("Fitness")}
        />
        <Button style={styles.button2} 
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
      backgroundColor: 'lightblue',
      alignItems: 'center',
      justifyContent: 'center',
    },
    Text: {
      flex: 1,
      marginTop: 16,
      textAlign: 'center',
      fontSize: 30,
    },

    

    button1: {
      flex: 1,
      marginTop: 30,

    },

    button2: {

    }

   
  });