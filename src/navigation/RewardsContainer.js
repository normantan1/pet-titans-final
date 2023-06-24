import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// Screens
import RewardScreen from "./screens/RewardScreen";
import RewardsRedeemsScreen from "./screens/RewardRedeemScreen";

const Stack = createStackNavigator();

function RewardsContainer() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="RewardScreen" component={RewardScreen} />
            <Stack.Screen name="RewardsRedeemScreen" component={RewardsRedeemsScreen} />
        </Stack.Navigator>
    )
}

export default RewardsContainer;