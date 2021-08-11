import * as React from 'react';
import {Text,View,StyleSheet,TextInput,TouchableOpacity, ToastAndroid, KeyboardAvoidingView} from 'react-native';
import { Header } from 'react-native-elements';
import db from '../Config';

export default class App extends React.Component {

  constructor(props){
        super(props);
        this.state = {
            title: '',
            author: '',
            storyText: '',
        }
    }

    submitStory = ()=>{
        db.collection("User Stories").add({
            title: this.state.title,
            author: this.state.author,
            storyText: this.state.storyText,
        })
        this.setState({
            title: '',
            author: '',
            storyText: ''
        })
       alert("Your story has been submitted.");
    }

  render() {
    return (
      <KeyboardAvoidingView style={styles.allText} behavior = "padding" enabled>
        <TouchableOpacity style={styles.header}>
          <Text style={styles.headerText}>Story Hub App</Text>
        </TouchableOpacity>

        <TextInput
          style={styles.titleBox}
          placeholder="Write the title of the story here"
          value = {this.state.title}
          onChangeText = {text =>this.setState({title:text})}
        />

        <TextInput
          style={styles.authorBox}
          placeholder="Write the name of the author here"
           value = {this.state.author}
           onChangeText = {text =>this.setState({author:text})}
        />

        <TextInput
          style={styles.storyBox}
          placeholder="Write your story here"
           value = {this.state.storyText}
           onChangeText = {text =>this.setState({storyText:text})}
        />

        <TouchableOpacity style={styles.submitButton} onPress = {this.submitStory}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}
const styles = StyleSheet.create({
  allText: {
    backgroundColor: '#38b29b',
    flex: 1,
  },
  header: {
    backgroundColor: 'orange',
    border: 'dashed',
  },
  headerText: {
    fontFamily: 'britannic',
    fontSize: 35,
    textAlign: 'center',
    padding: 5,
  },
  titleBox: {
    width: '90%',
    height: 20,
    backgroundColor: 'white',
    fontFamily: 'kristen itc',
    border: 'dashed',
    padding: 17,
    marginLeft: 20,
    marginTop: 10,
    color: 'black',
    fontSize: 15,
  },
  authorBox: {
    width: '90%',
    height: 20,
    backgroundColor: 'white',
    fontFamily: 'kristen itc',
    border: 'dashed',
    padding: 17,
    marginLeft: 20,
    marginTop: 10,
    color: 'black',
    fontSize: 15,
  },
  storyBox: {
    width: '90%',
    height: '40%',
    backgroundColor: 'white',
    fontFamily: 'kristen itc',
    border: 'dashed',
    padding: 17,
    marginLeft: 20,
    marginTop: 10,
    color: 'black',
    fontSize: 15,
  },
  submitButton: {
    backgroundColor: 'orange',
    width: '50%',
    height: 40,
    border: 'dashed',
    marginTop: 10,
    padding: 5,
    marginLeft: 80,
  },
  buttonText: {
    fontFamily: 'britannic',
    textAlign: 'center',
    fontSize: 25,
  },
});