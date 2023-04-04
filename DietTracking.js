import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from 'react-native';

const APP_ID = 'a5022907';
const API_KEY = '78fb8893a651e9831981bd33352315da';

export default function DietTracking() {
  const [food, setFood] = useState('');
  const [foodList, setFoodList] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchCalories = async (food) => {
    setLoading(true);
    const response = await fetch(
      `https://api.edamam.com/api/food-database/v2/parser?ingr=${food}&app_id=${APP_ID}&app_key=${API_KEY}`,
    );
    const data = await response.json();
    setLoading(false);

    if (data.hints && data.hints.length > 0) {
      const foodItem = data.hints[0].food;
      setFoodList([
        ...foodList,
        {
          id: foodItem.foodId,
          name: foodItem.label,
          calories: foodItem.nutrients.ENERC_KCAL,
        },
      ]);
    } else {
      alert('Food not found');
    }
  };

  const handleAddFood = () => {
    if (food) {
      fetchCalories(food);
      setFood('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Track</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={food}
          onChangeText={setFood}
          placeholder="Enter food item"
        />
        <TouchableOpacity style={styles.button} onPress={handleAddFood}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
      </View>
      {loading && <ActivityIndicator size="large" color="#0000ff" />}
      <View style={styles.foodListBox}>
        <FlatList
          data={foodList}
          renderItem={({ item }) => (
            <Text style={styles.listItem} key={item.id}>
              {item.name} - {item.calories} kcal
            </Text>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFA500', // Change background color here
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
    width: '100%',
    justifyContent: 'center',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    width: '10em',
    borderRadius: 5,
    marginRight: 10,
  },
  button: {
    backgroundColor: 'blue',
    padding: 8,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  foodListBox: {
    width: '20em',
    borderWidth: 1,
    borderColor: '#777',
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 10,
  },
  listItem: {
    fontSize: 18,
    marginTop: 10,
  },
});
