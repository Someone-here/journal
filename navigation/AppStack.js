import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  GoalScreen,
  MemoriesScreen,
  NoteScreen,
  ScheduleScreen,
} from "../screens";
import { NavBar } from "../components";
import { Dimensions, View } from "react-native";

const Tab = createBottomTabNavigator();
const { width, height } = Dimensions.get("window");

export function AppStack() {
  return (
    <View style={{ width, height }}>
      <Tab.Navigator
        tabBar={(props) => <NavBar {...props} />}
        screenOptions={{
          tabBarHideOnKeyboard: true,
          headerShown: false,
        }}
      >
        <Tab.Screen name="Memories" component={MemoriesScreen} />
        <Tab.Screen name="Goals" component={GoalScreen} />
        <Tab.Screen name="Notes" component={NoteScreen} />
        <Tab.Screen name="Schedule" component={ScheduleScreen} />
      </Tab.Navigator>
    </View>
  );
}
