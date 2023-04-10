import PreScreen from "./PreScreen";
import Login from "./Login";
import Signup from "./Signup";
import Fitness from "./Fitness";
import DietTracking from './DietTracking';
import Workouts from './Workouts';
import WorkoutTracker from './WorkoutTracker';
import Mind from "./Mind";
import SleepTracking from './SleepTracking';
import Meditations from './Meditations';
import Consult from './Consult';
import { HomeScreen } from "./HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, Text } from "react-native";

const Stack = createNativeStackNavigator();

function CustomHeader() {
  return (
    <Text style={styles.heading}>FDM Wellbeing</Text>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitle: (props) => <CustomHeader {...props} />,
        }}
      >
        <Stack.Screen
          name="Base"
          component={PreScreen}
          options={{ title: "" }}
        />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ title: "" }}
        />
        <Stack.Screen name="Fitness" component={Fitness} />
        <Stack.Screen name="DietTracking" component={DietTracking} />
        <Stack.Screen name="Workouts" component={Workouts} options={{ title: 'Workouts' }} />
        <Stack.Screen name="WorkoutTracker" component={WorkoutTracker} options={{ title: 'Workout Tracker' }} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Mind" component={Mind} />
        <Stack.Screen name="SleepTracking" component={SleepTracking} options={{ title: 'Sleep Tracking' }} />
        <Stack.Screen name="Meditations" component={Meditations} />
        <Stack.Screen name="Consult" component={Consult} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  heading: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 30,
    color: "#FFA500",
  },
});
