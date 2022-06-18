import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableWithoutFeedback,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
  Modal,
} from "react-native";
import { Fab, Header, LoadingIndicator, Goal, GoalModal } from "../components";
import { balsamiqSans, inter } from "../config";
import { Theme } from "../config";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import axios from "axios";
import { useState, useEffect } from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";

async function getGoals() {
  const { accessToken } = await GoogleSignin.getTokens();
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  const { data } = await axios.get(
    "https://tasks.googleapis.com/tasks/v1/users/@me/lists"
  );
  // Check if a list with the name "Goals" exists
  const goalList = data.items.find((item) => item.title === "Goals");
  let goals = [];
  if (goalList) {
    const { data: goalsData } = await axios.get(
      `https://tasks.googleapis.com/tasks/v1/lists/${goalList.id}/tasks`
    );
    goals = goalsData.items;
  } else {
    // Create a new list with the name "Goals"
    await axios.post("https://tasks.googleapis.com/tasks/v1/users/@me/lists", {
      title: "Goals",
    });
  }
  return { goals, goalList };
}

async function addGoal(title, notes, due) {
  const { goalList } = await getGoals();
  return await axios.post(
    `https://tasks.googleapis.com/tasks/v1/lists/${goalList.id}/tasks`,
    {
      title,
      notes,
      due,
    }
  );
}

export function AddGoalModal({ visible, onClose }) {
  const [goalTitle, setGoalTitle] = useState();
  const [date, setDate] = useState(new Date());
  const [goalTime, setGoalTime] = useState();
  const [goalDesc, setGoalDesc] = useState();
  const [selected, setSelected] = useState(null);
  const [dateVisible, setDateVisible] = useState(false);
  return (
    <Modal visible={visible} animationType="slide" onRequestClose={onClose}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
          <View style={styles.body}>
            <TouchableOpacity onPress={onClose} style={styles.close}>
              <FontAwesome5 name="times" size={24} color={Theme.secondary} />
            </TouchableOpacity>
            <View
              style={[styles.currentGoal, { marginTop: 50, maxHeight: "80%" }]}
            >
              <Text style={inter.h3}>Add Goal</Text>
              <TextInput
                style={styles.goalTitle}
                value={goalTitle}
                onChangeText={(text) => setGoalTitle(text)}
                defaultValue="Goal Title"
              />
              <View style={styles.goalAcc}>
                <TouchableOpacity
                  style={{ marginRight: 15 }}
                  onPress={() => setSelected("desc")}
                >
                  <FontAwesome5
                    name="align-justify"
                    size={20}
                    color={Theme.text}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setSelected("time")}>
                  <FontAwesome5 name="clock" size={20} color={Theme.text} />
                </TouchableOpacity>
              </View>
              <View style={styles.goalAcc}>
                {!selected ? null : selected === "desc" ? (
                  <TextInput
                    style={styles.goalDesc}
                    value={goalDesc}
                    onChangeText={(text) => setGoalDesc(text)}
                    multiline={true}
                    defaultValue="What should be done to achieve this goal?"
                  />
                ) : (
                  <View style={styles.goalTime}>
                    <Text style={inter.h4}>Add a due date to your goal!</Text>
                    <Text style={inter.bodyBase}>
                      {goalTime ? goalTime.toDateString() : "Not Set"}
                    </Text>
                    <TouchableOpacity
                      style={{
                        marginTop: 15,
                        padding: 12,
                        borderWidth: 0.4,
                        borderRadius: 4,
                        width: 120,
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                      onPress={() => {
                        setDateVisible(true);
                      }}
                    >
                      <Text style={balsamiqSans[18]}>Set Date</Text>
                    </TouchableOpacity>
                    {dateVisible ? (
                      <DateTimePicker
                        testID="dateTimePicker"
                        value={date}
                        mode="date"
                        onChange={(event, selectedDate) => {
                          setDate(selectedDate);
                          setGoalTime(selectedDate);
                          setDateVisible(false);
                        }}
                      />
                    ) : null}
                  </View>
                )}
              </View>
            </View>
          </View>
          <KeyboardAvoidingView>
            <Fab
              icon="check"
              onPress={() => {
                if (goalTitle) {
                  addGoal(goalTitle, goalDesc, goalTime).then((data) => {
                    onClose();
                  });
                }
              }}
            >
              Create
            </Fab>
          </KeyboardAvoidingView>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}

export function GoalScreen({ navigation }) {
  const [goals, setGoals] = useState(null);
  const [currentGoal, setCurrentGoal] = useState(null);
  const [addGoalVisible, setAddGoalVisible] = useState(false);
  const [selectedGoal, setSelectedGoal] = useState(null);

  const onPressGoal = (goal) => setSelectedGoal(goal);

  useEffect(() => {
    getGoals()
      .then(({ goals }) => {
        const current = goals.find((goal) => goal.notes === "[CURRENT:GOAL]");
        if (current) setCurrentGoal(current);
        else if (goals.length !== 0) setCurrentGoal(goals[0]);
        else setCurrentGoal("No Goal");
        setGoals(goals.filter((goal) => goal !== currentGoal));
      })
      .catch((err) => {
        setCurrentGoal(null);
        setGoals(null);
      });
  }, [addGoalVisible]);

  return (
    <View style={styles.container}>
      <AddGoalModal
        visible={addGoalVisible}
        onClose={() => setAddGoalVisible(false)}
      />
      <GoalModal
        visible={!!selectedGoal}
        goal={selectedGoal}
        onClose={() => setSelectedGoal(null)}
      />
      <Header>GOALS</Header>
      <View style={styles.body}>
        <View style={styles.currentGoal}>
          <Text style={[inter.h3, , { marginBottom: 12 }]}>
            Your Current Goal:
          </Text>
          <Text style={[balsamiqSans[48], { textAlign: "center" }]}>
            {currentGoal === null ? (
              <LoadingIndicator />
            ) : currentGoal === "No Goal" ? (
              "Make A Goal"
            ) : (
              currentGoal.title
            )}
          </Text>
        </View>
        <View style={styles.otherGoals}>
          <Text style={inter.h3}>Other Goals:</Text>
          <FlatList
            data={goals}
            renderItem={({ item }) => (
              <Goal goal={item} onPress={onPressGoal} />
            )}
            keyExtractor={(item) => item.id}
            style={styles.otherGoalsList}
          />
        </View>
        <Fab icon="plus" onPress={() => setAddGoalVisible(true)}>
          Goal
        </Fab>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    height: "100%",
    width: "100%",
    backgroundColor: Theme.primary,
    color: Theme.text,
  },
  body: {
    paddingHorizontal: 24,
    flexDirection: "column",
    flex: 1,
    alignItems: "center",
  },
  currentGoal: {
    backgroundColor: Theme.secondary,
    maxHeight: 300,
    width: "100%",
    borderRadius: 28,
    alignItems: "center",
    paddingVertical: 36,
    paddingHorizontal: 36,
    marginBottom: 24,
  },
  otherGoals: {
    backgroundColor: Theme.secondary,
    width: "100%",
    flex: 1,
    borderTopRightRadius: 28,
    borderTopLeftRadius: 28,
    padding: 24,
  },
  close: {
    width: 50,
    height: 50,
    borderRadius: 20,
    backgroundColor: Theme.accent,
    alignItems: "center",
    justifyContent: "center",
  },
  goalTitle: {
    marginTop: 24,
    ...balsamiqSans[24],
    borderWidth: 2,
    padding: 12,
    borderRadius: 12,
    width: "100%",
  },
  goalAcc: {
    marginVertical: 12,
    width: "100%",
    flexDirection: "row",
  },
  goalDesc: {
    ...balsamiqSans[14],
    borderWidth: 0.5,
    padding: 12,
    borderRadius: 4,
    width: "100%",
    color: "#666",
    height: 120,
  },
});
