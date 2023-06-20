import * as React from "react";
import { StyleSheet, View, Text, Button, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";

// components
import SideQuestList from "../../components/sidequest/SideQuestList";

function SideQuestScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <SideQuestList />
      <Button
        onPress={() => navigation.navigate("Quest Complete")}
        title="Test"
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

export default SideQuestScreen;
