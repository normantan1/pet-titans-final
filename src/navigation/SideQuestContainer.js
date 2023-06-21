import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// Screens
import SideQuestScreen from "./screens/SideQuestScreen";
import QuestCompleteScreen from "./screens/QuestCompleteScreen";

const Stack = createStackNavigator();

function SideQuestContainer() {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Side Quest Main" component={SideQuestScreen} />
            <Stack.Screen name="Quest Complete" component={QuestCompleteScreen} />
        </Stack.Navigator>
    )
}

export default SideQuestContainer;