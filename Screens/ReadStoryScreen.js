import React from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView, TouchableOpacity,SafeAreaView } from 'react-native';
import { SearchBar } from 'react-native-elements';
import db from '../Config';

export default class ReadStoryScr extends React.Component {
  constructor() {
    super();
    this.state = {
      allStories: [],
      dataSource: [],
      search: '',
    };
  }
  componentDidMount() {
    this.retrieveStories();
  }

  updateSearch = (search) => {
    this.setState({ search });
  };

  retrieveStories = () => {
    try {
      var allStories = [];
      var stories = db
        .collection('User Stories')
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            allStories.push(doc.data());
            console.log('User Stories', allStories);
          });
          this.setState({ allStories });
        });
    } catch (error) {
      console.log(error);
    }
  };

  SearchFilterFunction(text) {
    const newData = this.state.allStories.filter((item) => {
      const itemData = item.title ? item.title.toUpperCase() : ''.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      dataSource: newData,
      search: text,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View styles={{ height: 20, width: '100%', }}>
          <SearchBar style = {styles.searchBar}
            placeholder="Write title of your story here."
            onChangeText={(text) => this.SearchFilterFunction(text)}
            onClear={(text) => this.SearchFilterFunction('')}
            value={this.state.search}
          />
        </View>
  <SafeAreaView style={styles.container}>
        <ScrollView style = {styles.scrollView}>
          <View>
            {this.state.search === ''
              ? this.state.allStories.map((item) => (
                  <View
                    style={{
                      borderColor: 'black',
                      borderWidth: 3,
                      padding: 10,
                      margin: 10,
                      backgroundColor:'#efddf7'
                    }}>
                    <Text style = {styles.title}>Title : {item.title}</Text>
                    <Text style = {styles.author}>Author : {item.author}</Text>
                    <Text style = {styles.story}>Story : {item.storyText}</Text> 
                  </View>
                ))
              : this.state.dataSource.map((item) => (
                  <View
                    style={{
                      borderColor: 'black',
                      borderWidth: 3,
                      padding: 10,
                      margin: 10,
                      backgroundColor:'#efddf7'
                    }}>
                    <Text style = {styles.title}>Title : {item.title}</Text>
                    <Text style = {styles.author}>Author : {item.author}</Text>
                    <Text style = {styles.story}>Story : {item.storyText}</Text>
                  </View>
                ))}
          </View>
        </ScrollView>
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
container: {
  flex:1,
  backgroundColor: 'orange',
},
story:{
  fontFamily:'britannic',
  fontSize:20,
  color:'black',
  marginTop: 10,
  marginBottom: 10,
},
title:{
  fontFamily:'britannic',
  fontSize:20,
  color:'red',
  marginTop: 10,
  marginBottom: 10,
},
author:{
  fontFamily:'britannic',
  fontSize:20,
  color:'blue',
  marginTop: 10,
  marginBottom: 10,
},
searchBar:{
  fontFamily:'britannic',
  color:'white',
  padding:10,
},
scrollView: {
    width:"100%"
  },
});