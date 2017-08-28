import React, {Component} from 'react';
import ReactNative from 'react-native';
import {ActionConst, Scene, Router} from 'react-native-router-flux';
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
        <Router duration={0}>
          <Scene key="root" hideNavBar={true} hideTabBar={true} hideOnChildTabs={true}>
            <Scene key="setup" component={Setup} initial={true} />
            <Scene key="report" component={Report} />
            <Scene key="preview" component={Preview} />
          </Scene>
        </Router>
    );
  }
}

let styles = StyleSheet.create({
  iOsStatusBar: {
   marginTop:20 
  }
});

export default App;
