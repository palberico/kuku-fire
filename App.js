import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'react-native-firebase';

class App extends React.Component {
  state = { isAuthenticated: false }

  componentDidMount() {
    firebase.auth().signInAnonymously()
      .then( () => {
        this.setState({
          isAuthenticated: true,
        })
      });
  }

  render() {
    if (!this.state.isAuthenticated) {
      return null;
    }
    return (
      <View>
        <Text>Firebase Anon Auth Works!</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
