/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Linking
} from 'react-native';

var number = 0;


export default class HereAreSomeNumbers extends Component {
  constructor(props) {
    super(props);
    this.state = {number: Math.floor(Math.random()*1000001)};
  } 

  getNumber = () => {
    let newNumber = Math.floor(Math.random()*1000001);
    this.setState({number: newNumber});
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to the unofficial&nbsp;
          <Text style={{color: 'blue'}}
            onPress={() => Linking.openURL('https://herearesomenumbers.firebaseapp.com/')}
          >
            herearesomenumbers
          </Text>
          &nbsp;app!
        </Text>
        <Text style={styles.instructions}>
          Current Number:
        </Text>
        <Text style={styles.instructions}>
          {this.state.number}
        </Text>
        <Button
           style={styles.instructions}
           onPress={this.getNumber}
           title='Get a new number'
           color="#286090"
        >
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('HereAreSomeNumbers', () => HereAreSomeNumbers);
