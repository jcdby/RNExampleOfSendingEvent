/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  NativeModules, //import android native modules
  View
} from 'react-native';

var Toast = require('./MyModules/modules');

class RNtestModule extends Component {


  render() {
    var input : string = "goodbye";
    Toast.show('Awesome', Toast.SHORT);
    //native module method using Toast
    Toast.callBackDemo(input, (input) => {
      console.log(input);
    });//native module method using callback
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          {input}
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Shake or press menu button for dev menu
        </Text>

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

AppRegistry.registerComponent('RNtestModule', () => RNtestModule);
