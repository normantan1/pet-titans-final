import * as React from "react";
import { useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";

// components
import TimerCountDown from "../../components/timer/TimerCountDown";
import TimerModeDisplay from "../../components/timer/TimerModeDisplay";
import TimerToggleButton from "../../components/timer/TimerToggleButton";

const FOCUS_TIME = 5/60 * 60;
const BREAK_TIME = 5/60 * 60;

function TimerScreen() {
  const [timer, setTimer] = useState(FOCUS_TIME);
  const [timerMode, setTimerMode] = useState("Focus");
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;

    if (isActive) {
      interval = setInterval(() => {setTimer((prevTime) => prevTime - 1)}, 1000);
    } else if (!isActive && timer !== 0) {
      clearInterval(interval)
    }

    if (timer === 0) {
      if (timerMode === "Focus") {
        setTimerMode("Break");
        setTimer(BREAK_TIME);
      } else {
        setTimerMode("Focus");
        setTimer(FOCUS_TIME);
      }
      setIsActive(false);
    }

    return () => clearInterval(interval);
  }, [isActive, timer]);

  const startTimer= () => {
    setIsActive(true);
  };

  const pauseTimer = () => {
    setIsActive(false);
  };

  return (
    <View style={styles.container}>
      <TimerModeDisplay timerMode={timerMode} />
      <TimerCountDown timer={timer} />
      <TimerToggleButton
        isActive={isActive} 
        onStart={startTimer} 
        onPause={pauseTimer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default TimerScreen;