import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from '@expo/vector-icons';

// Icon
import AppIcon from "../components/AppIcon";

// Screens
import HomeScreen from "./screens/HomeScreen";
import SideQuestContainer from "./SideQuestContainer";
import TimerScreen from "./screens/TimerScreen";
import LeaderboardScreen from "./screens/LeaderboardScreen";
import RewardScreen from "./screens/RewardScreen";

// Screen Names
const homeName = "Home";
<<<<<<< Updated upstream
const sideQuestName = "SideQuest";
const timerName = "Timer";
=======
const sideQuestName = "Side Quest Main";
const timerName = "Pomodoro Timer";
>>>>>>> Stashed changes
const leaderboardName = "Leaderboard";
const rewardScreen = "Reward";

const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          headerShown: false,  
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              let rn = route.name;

              if (rn === homeName) {
                iconName = focused ? 'paw' : 'paw-outline';
              } else if (rn === sideQuestName) {
                iconName = focused ? 'clipboard-list' : 'clipboard-list-outline';
              } else if (rn === timerName) {
                iconName = focused ? 'timer' : 'timer-outline';
              } else if (rn === leaderboardName) {
                iconName = focused ? 'scoreboard' : 'scoreboard-outline';
              } else if (rn === rewardScreen) {
                iconName = focused ? 'ticket' : 'ticket-outline';
              }

              return <MaterialCommunityIcons name={iconName} size={size} color={color} />
            },
            tabBarActiveTintColor: "#6b9383",
            tabBarInactiveTintColor: "grey"
          })}>

        <Tab.Screen 
          name={homeName} 
          component={HomeScreen}
          options={{
            tabBarIcon: () => <AppIcon />,
          }}
          />
        <Tab.Screen name={sideQuestName} component={SideQuestContainer} />
        <Tab.Screen name={timerName} component={TimerScreen} />
        <Tab.Screen name={leaderboardName} component={LeaderboardScreen} />
        <Tab.Screen name={rewardScreen} component={RewardScreen} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainContainer;