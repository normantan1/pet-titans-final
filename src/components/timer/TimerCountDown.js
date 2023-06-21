import React from "react";
import { View, Text, StyleSheet } from "react-native";

const TimerCountDownDisplay = ({ timer }) => {
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <View style={styles.timerContainer}>
      <View style={styles.circle}>
        <Text style={styles.timerText}> {formatTime(timer)} </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  timerContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    marginTop: 20
  },
  circle: {
    width: 250,
    height: 250,
    borderRadius: 150,
    backgroundColor: "#FFD89C",
    alignItems: "center",
    justifyContent: "center",
  },
  timerText: {
    fontSize: 56,
    fontWeight: "400",
    color: "#F97B22",
    fontFamily: "Baskerville"
  },
});

export default TimerCountDownDisplay;
