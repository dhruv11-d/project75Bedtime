import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.allText}>
        <TouchableOpacity style={styles.header}>
          <Text style={styles.headerText}>Story Hub App</Text>
        </TouchableOpacity>
        <Text style={styles.displayText}>
          We all love stories… All kinds of stories - science fiction, fiction,
          non-fiction as well as bedtime stories ! So, I have developed a Story
          Hub App where all story lovers have access to read the stories and the
          writers have access to write the stories. You can go to the different
          sections of this app to read as well as write stories. Hope you will
          love !!
        </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  allText: {
    backgroundColor: '#00cbff',
    flex: 1,
  },
  header: {
    backgroundColor: 'gold',
    border: 'dashed',
  },
  headerText: {
    fontFamily: 'britannic',
    fontSize: 35,
    textAlign: 'center',
    padding: 5,
  },
  displayText: {
    fontFamily: 'britannic',
    fontSize: 20,
    padding: 15,
  },
});