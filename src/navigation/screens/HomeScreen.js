import * as React from "react";
import { View, Text, SafeAreaView, StyleSheet, Image, FlatList } from "react-native";
import { ProgressBar, MD3Colors } from 'react-native-paper';
import * as Progress from 'react-native-progress';
import api, { currentUserId, getUser } from "../../api/users.js";
import { getQuests } from "../../api/quest.js";

function HomeScreen() {
	const user = getUser(currentUserId);

    const processLevel = (exp) => {
        return Math.floor(exp / 100) + 1;
    }

    const processExp = (exp) => {
        return exp%100;
    }

    const processProgress = (exp) => {
        return exp%100/100;
    }

    const processStage = (level) => {
        if (1 <= level <= 3) {
            return 'Baby';
        } else if (4 <= level <= 7) {
            return 'Teenager'
        } else {
            return 'Adult'
        }
    }

    const Item = ({title, id}) => (
        <View style={styles.item}>
          <Text style={styles.id}>Side Quest {id}</Text>
           <Text style={styles.title}>{title}</Text>
        </View>
    );
      
      
    return (
        <SafeAreaView style = {styles.container}>
            <View style = {styles.box1}>
                <Text style = {styles.header}> Pet Titans </Text>
            </View>
            <View style = {styles.box2}>
                <View style = {styles.box2text}>
                    <Text style = {{fontWeight: 'bold', fontSize: 20}}>Level {processLevel(user.currExp)} - {processStage(processLevel(user.currExp))}</Text>
                </View>
                <View style = {{flexDirection: 'row', flex: 1}}>
                    <View style = {styles.box2progressbar}>
                        <Progress.Bar progress={processProgress(user.currExp)} width={300} height={20} borderRadius={10} color='darkorange'/>
                    </View>
                    <View style = {{marginTop: 0}}>
                        <Image source = {require('../../../assets/titan.png')}
                            style={{ width: 30, height: 30 }}
                            resizeMode="contain"/>
                    </View>
                </View>
                <View style = {{justifyContent: "space-between" , flexDirection: 'row'}}>
                    <Text style = {{marginLeft:35}}> {processExp(user.currExp)} titans </Text>
                    <Text style = {{marginRight:50}}> {100 - processExp(user.currExp)} titans </Text>
                </View>
            </View>
            <View style = {styles.box3}>
                <Image
                source={require('../../../assets/dog.gif')}
                style={{ width: 300, height: 250 }}
                resizeMode="contain"
                />
            </View>
            <View style = {styles.box4}>
                <FlatList
                    data={getQuests()}
                    renderItem={({item}) => <Item title={item.title} id = {item.id}/>}
                    keyExtractor={item => item.id}
                    horizontal = {true}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#f8f9fb'
    },

    box1: {
        alignItems: 'center',
        justifyContent: 'center',
        height : 100
    },

    box2: {
        justifyContent: 'center',
        height: 100,
        flexDirection: 'column',
    },

    box2text: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginLeft: 40,
        marginBottom: 10
    },
    
    header: {
        fontWeight: 'bold',
        fontSize: 30,
        fontFamily: "Baskerville"
    },

    box2progressbar: {
        marginLeft: 35,
        marginTop: 5,
        marginRight: 5
    },

    box3: {
        height: 400,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    
    box4: {
        height: 1,
        flex: 1,
        marginBottom: 10

    },

    item: {
        backgroundColor: 'beige',
        padding: 15,
        marginVertical: 2,
        marginHorizontal: 10,
        borderRadius: 20,
        
      },
      id: {
        fontSize: 25,
        fontWeight: 'bold',
        paddingBottom: 10
      },
      title : {
        fontSize: 15,
      }
})


export default HomeScreen;
