import * as React from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// components
import SideQuestList from "../../components/sidequest/SideQuestList";

function SideQuestScreen() {
  return (
    <SafeAreaView style={styles.container}>
        <SideQuestList />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});

export default SideQuestScreen;
