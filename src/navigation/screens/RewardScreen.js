import React, { useState } from 'react';
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function RewardsPage({ navigation }) {
    const Header = () => {
        return (
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Rewards</Text>
                <Image source={require("../../assets/trophy.png")} style={styles.headerIcon} />
                <View style={styles.creditContainer}>
                    <Text style={styles.creditText}>{creditsLeft}</Text>
                    <Image source={require("../../assets/credit.png")} style={styles.creditIcon} />
                </View>
            </View>
        )
    }

    const Boxes = ({ navigation }) => {
        return (
            <View style={styles.boxContainer}>
                <ScrollView contentContainerStyle={styles.rewardList}
                    contentInset={{ bottom: 200 }}>
                    <View style={styles.rewardGrid}>
                        {rewards.map((reward) => (
                            <TouchableOpacity
                                key={reward.id}
                                style={styles.rewardItem}
                                onPress={() => { navigation.navigate('Home') }}
                            //onPress={() => alert('Reward redeemed!')}
                            >
                                <Text style={styles.rewardName}>{reward.name}</Text>
                                <Image source={reward.image} style={styles.rewardImage} />
                                <Text style={styles.rewardDescription}>{reward.description}</Text>
                                <Text style={styles.rewardPoints}>{reward.points} points</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </ScrollView>
            </View>
        )
    }

    const [creditsLeft, setCreditsLeft] = useState(500); // Example value, replace with your actual credits

    const rewards = [
        { id: 1, name: 'Reward 1', points: 100, description: "123", image: require("../../assets/GV.png") },
        { id: 2, name: 'Reward 2', points: 200, description: "456", image: require("../../assets/GV.png") },
        { id: 3, name: 'Reward 3', points: 300, description: "789", image: require("../../assets/GV.png") },
        { id: 4, name: 'Reward 4', points: 400, description: "dtt3", image: require("../../assets/GV.png") },
        { id: 5, name: 'Reward 5', points: 400, description: "343", image: require("../../assets/GV.png") },
        { id: 6, name: 'Reward 6', points: 400, description: "686", image: require("../../assets/GV.png") },
        { id: 7, name: 'Reward 7', points: 400, description: "069", image: require("../../assets/GV.png") },
        { id: 8, name: 'Reward 8', points: 400, description: "249", image: require("../../assets/GV.png") },

    ];

    return (
        <View style={styles.container}>
            <Header />
            <Boxes />
        </View>
    );
};


// function RewardRedeemScreen() {
//     return (

//     )
// }

// const Stack = createStackNavigator()

// export default function RewardScreenStack() {
//     return (
//         <Stack.Navigator>
//             <Stack.Screen name='Rewards Home' component={RewardScreen} />
//         </Stack.Navigator>
//     )

// }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        justifyContent: 'center'
    },
    headerTitle: {
        fontSize: 30,
        fontWeight: 'bold',
        marginRight: 'auto',
    },

    headerIcon: {
        width: 35,
        height: 50,
        justifyContent: "flex-end",
        marginRight: 95
    },

    boxContainer: {
        flex: 1,
        width: "100%",
        height: 100,
        padding: 5,
        flexDirection: "row",
        flexWrap: "wrap",
        backgroundColor: "snow"
    },

    box: {
        width: "40%",
        height: "40%",
        padding: 5,
        backgroundColor: "linen"
    },

    creditContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    creditText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginRight: 4,
    },
    creditIcon: {
        width: 65,
        height: 30,
    },

    rewardList: {
        flex: 1,
        flexGrow: 1,
        paddingBottom: 20
    },
    rewardGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        height: 20000
    },
    rewardItem: {
        width: '48%',
        marginBottom: 10,
        backgroundColor: '#f2f2f2',
        padding: 10,
        borderRadius: 8,
    },

    rewardImage: {
        width: '100%',
        height: 100,
        borderRadius: 8,
        marginBottom: 8,
    },

    rewardName: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 5,
    },
    rewardPoints: {
        fontSize: 14,
        color: 'gray',
        textAlign: 'center',
        marginBottom: 5,
    },
    rewardDescription: {
        fontSize: 12,
        textAlign: 'center',
    },
});