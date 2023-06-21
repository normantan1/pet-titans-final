import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//Define RewardsRedeem component
const RewardsRedeemsScreen = ({ navigation, route }) => {
    // Extract the reward data from the route parameters
    const { reward } = route.params;

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Redeem</Text>
            </View>
            <ScrollView contentContainerStyle={styles.rewardList}>
                <View style={styles.rewardItem}>
                    <Text style={styles.rewardName}>{reward.name}</Text>
                    <Text style={styles.rewardPoints}>{reward.points} points</Text>
                </View>
            </ScrollView>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.redeemButton} onPress={() => alert('Reward redeemed!')}>
                    <Text style={styles.buttonText}>Redeem</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cancelButton} onPress={() => alert('Reward cancelled!')}>
                    <Text style={styles.buttonText}>Cancel</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginRight: 'auto',
    },
    creditContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    creditText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    rewardList: {
        flexGrow: 1,
        justifyContent: 'center',
        paddingBottom: 20,
    },
    rewardItem: {
        alignItems: 'center',
        marginBottom: 10,
    },
    rewardName: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    rewardPoints: {
        fontSize: 14,
        color: 'gray',
        textAlign: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    redeemButton: {
        backgroundColor: 'green',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
    },
    cancelButton: {
        backgroundColor: 'red',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default RewardsRedeemsScreen;