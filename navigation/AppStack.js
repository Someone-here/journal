import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  GoalScreen,
  MemoriesScreen,
  NoteScreen,
  ScheduleScreen,
  MemoryScreen,
} from "../screens";
import { NavBar } from "../components";
import { Dimensions, View } from "react-native";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";

const Tab = createBottomTabNavigator();
const { width, height } = Dimensions.get("window");

const MemoriesStackNav = createSharedElementStackNavigator();

function MemoriesStack() {
  return (
    <MemoriesStackNav.Navigator screenOptions={{ headerShown: false }}>
      <MemoriesStackNav.Screen name="Main" component={MemoriesScreen} />
      <MemoriesStackNav.Screen
        name="Detail"
        component={MemoryScreen}
        sharedElements={(route) => {
          console.log(route.params.id);
          return [{ id: route.params.id, animation: "fade" }];
        }}
      />
    </MemoriesStackNav.Navigator>
  );
}

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
        <Tab.Screen name="Memories" component={MemoriesStack} />
        <Tab.Screen name="Goals" component={GoalScreen} />
        <Tab.Screen name="Notes" component={NoteScreen} />
        <Tab.Screen name="Schedule" component={ScheduleScreen} />
      </Tab.Navigator>
    </View>
  );
}
