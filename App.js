import PreScreen from "./PreScreen";
import Login from "./Login";
import Signup from "./Signup";
import Fitness from "./Fitness";
import Mind from "./Mind";
import { HomeScreen } from "./HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Tabs from "./Tabs";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>  
      <Tabs></Tabs>
      <Stack.Navigator>
        <Stack.Screen 
          name="Base"
          component={PreScreen}
          options={{title: ""}}
        />
        <Stack.Screen 
          name="Login"
          component={Login}
        />
        <Stack.Screen 
          name="HomeScreen"
          component={HomeScreen}
          options={{title: ""}}
        />
        <Stack.Screen 
          name="Signup"
          component={Signup}
        />
        <Stack.Screen 
          name="Fitness"
          component={Fitness}
        />
        <Stack.Screen 
          name="Mind"
          component={Mind}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

