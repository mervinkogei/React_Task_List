import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Keyboard, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Task from './components/Task';

export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask(null);
  }
  const deleteTask = (index) => {
    let copyItems = [...taskItems];
    copyItems.splice(index,1);
    setTaskItems(copyItems);

  }
  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style ={styles.sectionTitle}> Today's Tasks</Text>

        <View style ={styles.items}>
          {
            taskItems.map((items, index) =>{
              return <TouchableOpacity key={index} onPress={() => deleteTask(index)}>
                 <Task text= {items}/>
              </TouchableOpacity>
              
              //
            })
          }
          {/* <Task text={'Task 1'}/>
          <Task text={'Task 2'}/> */}
          

        </View>

      </View>

      <KeyboardAvoidingView
       behavior={Platform.OS === 'ios' ? 'padding' : "height"}  
       style ={styles.writeTaskWrapper}  >
        <TextInput style={styles.textInput} placeholder = "Write a task here" value={task} onChangeText={text =>setTask(text)}/>

        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style ={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
       </KeyboardAvoidingView>
       </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cbc6c3',
   
  },
  tasksWrapper:{
    paddingTop: 80,
    paddingHorizontal: 20
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  items:{
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  textInput: {
    paddingVertical : 15,
    paddingHorizontal: 15,
    width: 250,
    backgroundColor:'#fff',
    borderRadius: 60,
    borderColor: '#c0c0c0',
    borderWidth: 1
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#fff',
    justifyContent: "center",
    borderRadius: 60,
    alignItems: "center",
    borderColor: '#c0c0c0',
    borderWidth: 1
  },
  addText: {},
});
