import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  GoalScreen,
  TimelineScreen,
  NoteScreen,
  ScheduleScreen,
} from "../screens";
import { NavBar } from "../components";

const Tab = createBottomTabNavigator();

export function AppStack() {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <NavBar {...props} />}
    >
      <Tab.Screen name="Timeline" component={TimelineScreen} />
      <Tab.Screen name="Goals" component={GoalScreen} />
      <Tab.Screen name="Notes" component={NoteScreen} />
      <Tab.Screen name="Schedule" component={ScheduleScreen} />
    </Tab.Navigator>
  );
}
