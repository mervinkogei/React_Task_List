import React from "react";
import  {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const Task = (props) => {
    return (
        <View style ={styles.items}>
            <View style ={styles.itemsLeft}>
                <View style ={styles.square}></View>
                <Text style ={styles.itemText}>{props.text}</Text>
            </View>
            <View style = {styles.circle}></View>
        </View>
    )
}

const styles = StyleSheet.create ({
    items: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 18,
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    itemsLeft: {
        flexDirection: 'row',
        alignItems :'center',
        flexWrap:'wrap'
    },
    square: {
        width: 24,
        height: 24,
        backgroundColor : '#87ceed',
        opacity: 8.4,
        borderRadius: 5,
        marginRight: 15
    },
    itemText: {
        maxWidth: '80%'
    },
    circle: {
        width: 12,
        height: 12,
        borderColor: '#87ceed',
        borderWidth: 2,
        borderRadius: 5
    }
});

export default Task;