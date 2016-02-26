/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 @flow
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  NativeModules, //import android native modules
  View,
  DeviceEventEmitter
} from 'react-native';

var Toast = require('./MyModules/modules');

class RNtestModule extends Component {

  constructor(props) {
    super(props);
    this.state = {event: "Hello"};

  }

 onChange(state){
    this.setState(state);
  }

  componentWillMount() {
    var that = this;
    DeviceEventEmitter.addListener('keyboardwillshow', function(e: Event){
      console.log("event happend" + " " +
      // JSON.stringify(arguments) +
      // JSON.stringify(arguments) is a good tool to check what the object is made of
      e.values + "haha");
      this.onChange({event: e.values});
    }.bind(this));
    // listener for listening the event coming from Activity

  }


  render() {

    Toast.show('Awesome', Toast.SHORT);
    //native module method using Toast
    Toast.callBackDemo(this.state.event, (input) => {
      console.log(input);
    });//native module method using callback


        return (<View style={styles.container}>
          <Text style={styles.welcome}>
            {this.state.event}
          </Text>
          <Text style={styles.instructions}>
            To get started, edit index.android.js
          </Text>
          <Text style={styles.instructions}>
            Shake or press menu button for dev menu
          </Text>

        </View>);

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
