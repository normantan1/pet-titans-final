import * as React from "react";
import {useState} from "react";
import { View, Text, SafeAreaView, StyleSheet, Image, FlatList, TouchableOpacity, Modal, Button } from "react-native";
import { ProgressBar, MD3Colors } from 'react-native-paper';
import * as Progress from 'react-native-progress';
import api, { currentUserId, getUser } from "../../api/users.js";
import { getQuests } from "../../api/quest.js";

function HomeScreen() {

    
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [quest, setQuest] = useState(getQuests())

    const handleItemClick = (item) => {
        setSelectedItem(item);
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
        setSelectedItem(null);
      };

	const user = getUser(currentUserId);
    
    const [exp, setExp] = useState(user.currExp)

    const [size, setSize] = useState(150)



    

    const processLevel = (exp) => {
        return Math.floor(exp / 100) + 1;
    }

    const processExp = (exp) => {
        return exp%100;
    }

    const processProgress = (exp) => {
        return exp%100/100;
    }


    const Item = ({ title, id }) => (
        <TouchableOpacity
          style={styles.item}
        >
          <Text style={styles.id}>Side Quest {id}</Text>
          <Text style={styles.title}>{title}</Text>
          <TouchableOpacity onPress={() => {
            const updatedQuests = quest.filter((item) => item.id !== id);
            setQuest(updatedQuests);
            setExp(exp + 50);
            setSize(size + 10);
          }}style={styles.button}>
            <Text style={styles.buttonText}>Complete</Text>
          </TouchableOpacity>
        </TouchableOpacity>
      );
      

      
      
    return (
        <SafeAreaView style = {styles.container}>
            <View style = {styles.box1}>
                <Text style = {styles.header}> Pet Titans </Text>
            </View>
            <View style = {styles.box2}>
                <View style = {styles.box2text}>
                    <Text style = {{fontWeight: 'bold', fontSize: 20}}>Level {processLevel(exp)}</Text>
                </View>
                <View style = {{flexDirection: 'row', flex: 1}}>
                    <View style = {styles.box2progressbar}>
                        <Progress.Bar progress={processProgress(exp)} width={300} height={20} borderRadius={10} color='darkorange'/>
                    </View>
                    <View style = {{marginTop: 0}}>
                        <Image source = {require('../../../assets/titan.png')}
                            style={{ width: 30, height: 30 }}
                            resizeMode="contain"/>
                    </View>
                </View>
                <View style = {{justifyContent: "space-between" , flexDirection: 'row'}}>
                    <Text style = {{marginLeft:35}}> {processExp(exp)} titans </Text>
                    <Text style = {{marginRight:50}}> {100 - processExp(exp)} titans </Text>
                </View>
            </View>
            <View style = {styles.box3}>
                <Image
                source={exp < 80? require('../../../assets/egg.png'): require('../../../assets/dog.gif')}
                style={{ width: size, height: size }}
                resizeMode="contain"
                />
                
            </View>
            <View style={styles.box4}>
        {quest.length === 0 ? (
          <Text style={styles.completedText}>All quests completed 🔥</Text>
        ) : (
          <FlatList
            data={quest}
            renderItem={({ item }) => (
              <Item title={item.title} id={item.id} />
            )}
            keyExtractor={(item) => item.id.toString()}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        )}
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
      },
      
      completedText: {
        textAlign: 'center',
        fontFamily:'Baskerville',
        fontSize: 30
      },

      button: {
        backgroundColor: 'darkorange',
        borderRadius: 8,
        marginTop: 5,
        paddingVertical: 5,
        paddingHorizontal: 10,
      },
      buttonText: {
        fontWeight: 'bold',
        textAlign: 'center',
      },
})


export default HomeScreen;
