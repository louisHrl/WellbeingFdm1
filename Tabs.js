import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Fitness from "./Fitness";
import Mind from "./Mind";
import { HomeScreen } from "./HomeScreen";

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return(
        <Tab.Navigator>
            <Tab.Screen name="HomeScreen" component={HomeScreen}/>
            <Tab.Screen name="Mind" component={Mind}/>
            <Tab.Screen name="Fitness" component={Fitness}/>
        </Tab.Navigator>
    );
}

export default Tabs;