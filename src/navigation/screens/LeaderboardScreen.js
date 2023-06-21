import * as React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import {getUserList} from "../../api/users.js";
import Leaderboard from 'react-native-leaderboard';

function LeaderboardScreen() {
    return (
        <SafeAreaView>
            <View style = {styles.box1}>
                <Text style = {styles.header}>
                    Leaderboard 🔥
                </Text>
            </View>
            <Leaderboard 
                data = {getUserList()}
                sortBy='currExp' 
                labelBy='name'
                evenRowColor = 'darkorange'
                oddRowColor = 'beige'
                icon = 'pics'/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    box1: {
        height: 80,
        justifyContent: 'center',
        alignItems: 'center'
    },
    header: {
        fontWeight: 'bold',
        fontSize: 30
    }
})

export default LeaderboardScreen;
