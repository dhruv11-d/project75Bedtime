import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import firebase from 'firebase';

export default class LoginScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }

  showAlert(errorCode) {
    switch (errorCode) {
      case 'auth/user-not-found':
        alert(
          'So Sorry ! No user with the email id / password is found in the database. '
        );
        this.setState({
          email: '',
          password: '',
        });
        break;
      case 'auth/invalid-email':
        alert('Please enter a valid email id or correct password');
        this.setState({
          password: '',
        });
        break;
      default:
        this.setState({
          email: '',
          password: '',
        });
        alert('Invalid email and password');
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container1}>
          <Text style={styles.title}>Bedtime Stories App</Text>
          <Image
            style={styles.image}
            source={{
              uri:
                'https://media.cdnandroid.com/84/f7/68/f3/imagen-bedtime-stories-goodnight-0thumb.jpeg',
            }}
          />
          <TextInput
            placeholder="Email - user@storyhub.com"
            placeholderTextColor="black"
            onChangeText={(emailText) => {
              this.setState({
                email: emailText,
              });
            }}
            value={this.state.email}
            style={styles.textInput}
          />
          <TextInput
            placeholder="Password - 123456"
            placeholderTextColor="black"
            onChangeText={(passwordText) => {
              this.setState({
                password: passwordText,
              });
            }}
            value={this.state.password}
            style={styles.textInput}
            secureTextEntry={true}
          />
        </View>
        <View style={styles.container2}>
          <TouchableOpacity
            style={styles.button}
            onPress={async () => {
              var email = await this.state.email;
              var password = await this.state.password;
              firebase
                .auth()
                .signInWithEmailAndPassword(email, password)
                .then(() => {
                  this.props.navigation.navigate('Home');
                })
                .catch((error) => {
                  var errorCode = error.code;
                  var errorMessage = error.message;
                  return this.showAlert(errorCode);
                });
            }}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#B8E9F7',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 30,
    fontFamily: 'britannic',
    backgroundColor: 'yellow',
    border: 'dashed',
    padding: 2.5,
  },
  image: {
    width: 200,
    height: 200,
    margin: 20,
  },
  container1: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    marginBottom: -10,
  },
  container2: {
    alignItems: 'center',
    margin: 10,
  },
  textInput: {
    width: '80%',
    height: 40,
    border: 'dashed',
    borderColor: 'black',
    alignSelf: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginBottom: 10,
    margin: 12,
    fontWeight: 'bold',
    fontSize: 18,
    fontFamily: 'britannic',
    backgroundColor: 'gold',
  },
  button: {
    width: 200,
    height: 50,
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    margin: 10,
    borderColor: 'black',
    borderRadius: 100,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 25,
    fontWeight: 'bold',
    fontFamily: 'britannic',
  },
});