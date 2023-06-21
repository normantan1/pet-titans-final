import * as React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

// api
import { getQuests } from "../../api/quest";

const data = getQuests();

const SideQuestList = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <View style={styles.listContainer}>
      <TouchableOpacity onPress={handleItemClick} style={styles.items}>
        <Text style={styles.itemHeaderText}> Side Quest {item.id} </Text>
        <Text style={styles.itemText}> {item.title} </Text>
      </TouchableOpacity>
      <View style={styles.darkenedMargin} />
    </View>
  );

  const handleItemClick = (item) => {
    navigation.navigate("Quest Complete");
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContainer: {
    flex: 1,
    flexDirection: "column"
  },
  items: {
    padding: 30,
    backgroundColor: "#FFD89C",
    width: "100%"
  },
  itemHeaderText: {
    fontSize: 25,
    fontWeight: "bold",
  },
  itemText: {
    fontSize: 12,
  },
  darkenedMargin: {
    height: 0.3,
    width: "100%",
    backgroundColor: "black",
  },
});

export default SideQuestList;
