import * as React from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from "@react-navigation/native";

const data = [
  { id: '1', title: 'Item 1' },
  { id: '2', title: 'Item 2' },
  { id: '3', title: 'Item 3' },
  { id: '4', title: 'Item 4' },
];


const SideQuestList = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={handleItemClick} style={styles.items}>
      <Text style={styles.itemText}> {item.title} </Text>
    </TouchableOpacity>
  );

  const handleItemClick = (item) => {
    navigation.navigate(item.title)
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

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16
  },
  items: {
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
  itemText: {
    fontSize: 16,
    fontWeight: 'bold',
  }
})

export default SideQuestList;