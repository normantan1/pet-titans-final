import React, { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View, Image, Modal, Pressable
} from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

// api
import { getQuests } from "../../api/quest";
import { currentUserId, getUserList, getUser } from "../../api/users";

const data = getQuests();
const currentUser = getUser(currentUserId);

const SideQuestList = () => { 
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [userCredits, setUserCredits] = useState(currentUser.credits);
  const [userExp, setUserExp] = useState(currentUser.currExp)

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedItem(null);
  };

  const addExp = () => {
    const updatedExp = userExp + 45;
    setUserExp(updatedExp);
    currentUser.currExp = currentUser.currExp + 15;
    console.log(currentUser.currExp);
  };


  const addCredits = () => {
    const updatedCredits = userCredits + 15;
    setUserCredits(updatedCredits);
    currentUser.credits = currentUser.credits + 15;
    console.log(currentUser.credits);
  }

  const renderItem = ({ item }) => (
    <View style={styles.listContainer}>
      <TouchableOpacity onPress={() => handleItemClick(item)} style={styles.items}>
        <Text style={styles.itemHeaderText}> Side Quest {item.id} </Text>
        <Text style={styles.itemText}> {item.title} </Text>
      </TouchableOpacity>
      <View style={styles.darkenedMargin} />
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      {selectedItem && (
        <Modal
          visible={modalVisible}
          animationType="slide"
          transparent={true}
          onRequestClose={closeModal}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Pressable style={styles.modalButton} onPress={closeModal}>
                <MaterialCommunityIcons name="close" size={25} color={"grey"}/>
              </Pressable>
              <Text style={styles.modalTitle}> Side Quest {selectedItem.id}</Text>
              <Text style={styles.modalText}> {selectedItem.title} </Text>
              <View style={styles.modalBtmContainer}>
                <View style={styles.leftBox}>
                  <Text style={styles.titanText}> {selectedItem.exp} Titans </Text>
                </View>
                <Image source = {require('../../../assets/titan.png')} style={{ width: "10%", height: "30%" }} resizeMode="contain"/>
                <MaterialCommunityIcons name="cash" size={30} color={"grey"}  />
                <View style={styles.rightBox}>
                  <Text style={styles.titanText}> {selectedItem.credits} Credits </Text>
                </View>
              </View>
              <TouchableOpacity style={styles.completeButton} onPress={(e) => { closeModal(e); addCredits(e); addExp(e); }}>
                <Text style={styles.completeButtonText}>Complete</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}
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
    backgroundColor: "beige",
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
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    borderColor: "black",
    height: "40%",
    width: "85%",
    borderRadius: 10
  },
  modalTitle: {
    fontSize: 35,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center"
  },
  modalText: {
    fontSize: 18,
    marginBottom: 18,
    textAlign: "center"
  },
  modalButton: {
    padding: 10,
    alignSelf: "flex-end"
  },
  modalButtonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  modalBtmContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: "20%"
  },
  leftBox: {
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    backgroundColor: "#FFD89C",
    width: "25%",
    height: "30%"
  },
  rightBox: {
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: "#FFD89C",
    width: "25%",
    height: "30%"
  },
  titanText: {
    fontSize: 17,
    marginTop: 4,
    textAlign:"center",
    alignItems: "center"
  },
  completeButton: {
    padding: 10,
    backgroundColor: "green",
    borderRadius: 8,
    alignSelf: "center",
    marginBottom: 20
  },
  completeButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
});

export default SideQuestList;
