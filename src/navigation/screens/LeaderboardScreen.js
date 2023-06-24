import React, { useState } from "react";
import { View, Text, SafeAreaView, StyleSheet, Modal, TouchableOpacity, Image } from "react-native";
import { getUserList } from "../../api/users.js";
import Leaderboard from 'react-native-leaderboard';

function LeaderboardScreen() {
  const [selectedUser, setSelectedUser] = useState(null);

  const handleUserPress = (user) => {
    setSelectedUser(user);
  };

  const closeModal = () => {
    setSelectedUser(null);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.box1}>
        <Text style={styles.header}>Leaderboard 🔥</Text>
      </View>
      <View style={styles.leaderboardContainer}>
        <Leaderboard
          data={getUserList()}
          sortBy='currExp'
          labelBy='name'
          evenRowColor='darkorange'
          oddRowColor='beige'
          icon='pics'
          onRowPress={handleUserPress}
        />
      </View>
      <Modal visible={!!selectedUser} animationType="slide" transparent>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>{selectedUser?.name}</Text>
              <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
                <Text style={styles.closeButtonText}>X</Text>
              </TouchableOpacity>
            </View>
            {/* Display user profile picture */}
            <Image source={{ uri: selectedUser?.pics }} style={styles.profilePicture} />
            <Text style={styles.modalText}>Email: {selectedUser?.email}</Text>
            <Text style={styles.modalText}>Level: {selectedUser?.level}</Text>
            <Text style={styles.modalText}>Current Exp: {selectedUser?.currExp}</Text>
            {/* Add more profile details here */}
          </View>
        </View>
      </Modal>
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
  },
  leaderboardContainer: {
    flex: 1,
    padding: 10,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'beige',
    padding: 20,
    borderRadius: 10,
    width: '90%',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  modalTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    fontFamily: 'Baskerville',
  },
  closeButton: {
    backgroundColor: 'lightgray',
    padding: 8,
    borderRadius: 20,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
    
  },
  profilePicture: {
    width: 150,
    height: 150,
    borderRadius: 75,
    alignSelf: 'center',
    marginBottom: 10,
  },
  modalText: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default LeaderboardScreen;
