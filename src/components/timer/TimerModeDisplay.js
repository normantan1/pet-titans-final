import React from "react";
import { View, Text, StyleSheet } from "react-native";

// export const TimerModes = "Focus";

const TimerModeDisplay = ({ timerMode }) => {
  return (
    <View style={styles.timerCountDownContainer}>
      <Text style={styles.timerCountDownText}>
        {timerMode} Time {timerMode === "Break" ? "💤" : "💪"}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  timerCountDownContainer: {
    alignItems: "center",
    width: "100%",
  },
  timerCountDownText: {
    fontWeight: "600",
    fontSize: 40,
    marginBottom: 10,
    color: "black",
    fontFamily: "Baskerville"
  },
});

export default TimerModeDisplay;
