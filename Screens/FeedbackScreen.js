import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import db from '../Config';

export default class FeedbackScreen extends React.Component {
  constructor(props){
        super(props);
        this.state = {
           feedback:'',
           name:'',
           email:''
        }
    }

    submitFeedback = ()=>{
        db.collection("Feedback").add({
          feedback:this.state.feedback,
          name: this.state.name,
          email:this.state.email
        })
        this.setState({
           feedback:'',
           name:'',
           email:''
        })
       alert("Thank you for submitting your feedback.");
    }
  render() {
    return (
      <KeyboardAvoidingView style={styles.allText} behavior="padding" enabled>
        <TouchableOpacity style={styles.header}>
          <Text style={styles.headerText}>Feedback</Text>
        </TouchableOpacity>

        <TextInput
          style={styles.feedbackBox}
          placeholder="Write your feedback or opinion here."
           placeholderTextColor='black'
          value = {this.state.feedback}
          onChangeText = {text =>this.setState({feedback:text})}
        />

          <TextInput
          style={styles.authorBox}
          placeholder="Write your e-mail id here."
           placeholderTextColor='black'
            keyboardType="email-address"
          value = {this.state.email}
          onChangeText = {text =>this.setState({email:text})}
        />

        <TextInput
          style={styles.authorBox}
          placeholder="Write your name here."
           placeholderTextColor='black'
          value = {this.state.name}
          onChangeText = {text =>this.setState({name:text})}
        />
        <TouchableOpacity
          style={styles.submitButton}
          onPress={this.submitFeedback}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}
const styles = StyleSheet.create({
  allText: {
    flex: 1,
    backgroundColor: '#feb7b5',
  },
  header: {
    backgroundColor: '#ff615e',
    border: 'dashed',
  },
  headerText: {
    fontFamily: 'britannic',
    fontSize: 35,
    textAlign: 'center',
    padding: 5,
  },

  feedbackBox: {
    width: '90%',
    height: '40%',
    backgroundColor: 'white',
    fontFamily: 'kristen itc',
    border: 'dashed',
    padding: 17,
    marginLeft: 20,
    marginTop: 20,
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
  submitButton: {
    backgroundColor: '#ff615e',
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