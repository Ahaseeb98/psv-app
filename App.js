
import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import DashBoard from './src/screens/index'
export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <DashBoard/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 0,
    flex: 1,
    backgroundColor: '#F5FCFF',
  }
});
