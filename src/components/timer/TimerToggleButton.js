import React from "react";
import { Pressable, View, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const TimerToggleButton = ({ isActive, onStart, onPause }) => {
  const handleToggle = () => {
    isActive ? onPause() : onStart();
  };

  return (
    <Pressable
      onPress={handleToggle}
      style={({ pressed }) => [{ opacity: pressed ? 0.6 : 1 }]}
    >
      <View style={styles.container}>
        <FontAwesome
          style={styles.icon}
          name={isActive ? "pause" : "play"}
          size={40}
          color="black"
        />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    width: 70,
    height: 70,
    borderRadius: 70 / 2,
    justifyContent: "center",
    borderColor: "black",
    marginVertical: 20,
  },
  icon: { alignSelf: "center" },
});

export default TimerToggleButton;