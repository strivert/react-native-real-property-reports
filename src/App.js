import React, {Component} from 'react';
import ReactNative from 'react-native';
import {
  Setup,
  Report,
  Preview
} from './screens'

const { StyleSheet, Text, View } = ReactNative;

/**
 * High Level Container
 */
class App extends Component {

  /**
    * App Container Constructor
    * @param {props} props from parent component
    * @return {void}
    */
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  /**
   * Render a page(screen)
   * @return {jsxresult} result in jsx format
   */
  render() {
    return (
        <Setup />
    );
  }
}

let styles = StyleSheet.create({
  iOsStatusBar: {
   marginTop:20 
  }
});

export default App;
