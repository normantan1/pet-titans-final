import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// components
import SideQuestList from "../../components/sidequest/SideQuestList";

function SideQuestScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.box1}>
        <Text style={styles.header}>Side Quests</Text>
      </View>
      <SideQuestList />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
    box1: {
        height: 80,
        justifyContent: 'center',
        alignItems: 'center'
    },
    header: {
        fontWeight: 'bold',
        fontSize: 30,
        fontFamily: "Baskerville"
        
    }
});

export default SideQuestScreen;
